
import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import Markdown from 'react-markdown';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), 'public', 'projects', `${slug}.md`);
  
  let content = '';
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch {
    throw new Error('Proyecto no encontrado');
  }

  return (
     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
       {/* Header */}
       <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
         <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-center py-4">
             <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors">
               ← Volver
             </Link>
             <Link href="/" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
               Inicio
             </Link>
           </div>
         </nav>
       </header>

       {/* Project Content */}
       <section className="py-4 px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
           <div className="prose dark:prose-invert max-w-none">
             <Markdown>{content}</Markdown>
           </div>
         </div>
       </section>
     </div>
    )
}
