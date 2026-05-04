
import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import Markdown from 'react-markdown';
import { FaArrowLeft } from "react-icons/fa";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), 'public', 'posts', `${slug}.md`);
  
  let content = '';
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch {
    throw new Error('Proyecto no encontrado');
  }

  return (

       <section className="py-4 px-4 sm:px-6 lg:px-8">
         <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
           <div className="prose dark:prose-invert max-w-none">
             <Markdown>{content}</Markdown>
           </div>
         </div>
       </section>
    )
}
