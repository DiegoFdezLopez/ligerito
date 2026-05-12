import React from "react";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import MochilaPDFView from "../components/MochilaPDFView";

export function exportarMochilaPDF(data) {
  const ventana = window.open("", "_blank", "width=900,height=1200");

  if (!ventana) {
    alert("No se pudo abrir la ventana de impresión.");
    return;
  }

  ventana.document.write(`
    <html>
      <head>
        <title>${data.nombreMochila}</title>
        <meta charset="utf-8" />
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; background: white; font-family: ui-sans-serif, system-ui, sans-serif; }
          .bg-white { background-color: white; }
          .text-black { color: black; }
          .min-h-screen { min-height: 100vh; }
          .max-w-4xl { max-width: 56rem; }
          .mx-auto { margin-left: auto; margin-right: auto; }
          .px-10 { padding-left: 2.5rem; padding-right: 2.5rem; }
          .py-10 { padding-top: 2.5rem; padding-bottom: 2.5rem; }
          .border-b { border-bottom: 1px solid; }
          .border-t { border-top: 1px solid; }
          .border { border: 1px solid; }
          .border-slate-200 { border-color: #e2e8f0; }
          .border-slate-300 { border-color: #cbd5e1; }
          .border-slate-500 { border-color: #64748b; }
          .pb-6 { padding-bottom: 1.5rem; }
          .pb-2 { padding-bottom: 0.5rem; }
          .mb-8 { margin-bottom: 2rem; }
          .mb-4 { margin-bottom: 1rem; }
          .mb-3 { margin-bottom: 0.75rem; }
          .mt-1 { margin-top: 0.25rem; }
          .mt-2 { margin-top: 0.5rem; }
          .mt-5 { margin-top: 1.25rem; }
          .mt-10 { margin-top: 2.5rem; }
          .mt-0\\.5 { margin-top: 0.125rem; }
          .pt-4 { padding-top: 1rem; }
          .pl-1 { padding-left: 0.25rem; }
          .text-xs { font-size: 0.75rem; line-height: 1rem; }
          .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
          .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
          .font-bold { font-weight: 700; }
          .font-black { font-weight: 900; }
          .font-semibold { font-weight: 600; }
          .uppercase { text-transform: uppercase; }
          .italic { font-style: italic; }
          .text-slate-400 { color: #94a3b8; }
          .text-slate-500 { color: #64748b; }
          .text-slate-600 { color: #475569; }
          .text-slate-700 { color: #334155; }
          .text-slate-900 { color: #0f172a; }
          .text-right { text-align: right; }
          .flex { display: flex; }
          .items-start { align-items: flex-start; }
          .items-center { align-items: center; }
          .justify-between { justify-content: space-between; }
          .gap-3 { gap: 0.75rem; }
          .gap-4 { gap: 1rem; }
          .gap-8 { gap: 2rem; }
          .min-w-0 { min-width: 0; }
          .w-4 { width: 1rem; }
          .h-4 { height: 1rem; }
          .shrink-0 { flex-shrink: 0; }
          .break-words { overflow-wrap: break-word; }
          .space-y-8 > * + * { margin-top: 2rem; }
          .space-y-3 > * + * { margin-top: 0.75rem; }
          .tracking-\\[0\\.25em\\] { letter-spacing: 0.25em; }
          .tracking-\\[0\\.2em\\] { letter-spacing: 0.2em; }
          @media print {
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          }
        </style>
      </head>
      <body>
        <div id="pdf-root"></div>
      </body>
    </html>
  `);

  ventana.document.close();

  const mountNode = ventana.document.getElementById("pdf-root");
  const root = createRoot(mountNode);
  // flushSync fuerza el render síncrono para que el contenido
  // esté en el DOM antes de que llegue el evento load
  flushSync(() => {
    root.render(<MochilaPDFView data={data} />);
  });

  ventana.focus();
  ventana.print();
}
