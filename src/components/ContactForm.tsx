"use client";
import { useState } from "react";
interface Form {
    name: string;
    lastName?: string;
    email: string;
    message: string;
}
const ContactForm = () => {
    const [formData, setFormData] = useState<Form>({
        name: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitMessage('¡Mensaje enviado exitosamente! Me pondré en contacto contigo pronto.');
                setFormData({ name: '', lastName: '', email: '', message: '' });
            } else {
                setSubmitMessage('Error al enviar el mensaje. Por favor, intenta de nuevo.');
            }
        } catch {
            setSubmitMessage('Error al enviar el mensaje. Por favor, intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Función para manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Nombre
                    </label>

                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="Tu nombre"
                    />
                </div>
                <div className="hidden">
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Apellido
                    </label>
                    
                    <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="Tu apellido"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="tu@email.com"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Mensaje
                </label>
                <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
            </div>
            {submitMessage && (
                <div className={`p-4 rounded-lg ${submitMessage.includes('exitosamente') ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'}`}>
                    {submitMessage}
                </div>
            )}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
        </form>
    )
}

export default ContactForm;