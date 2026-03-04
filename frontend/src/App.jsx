import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ResumenPesos from './components/ResumenPesos';
import ListaCategorias from './components/ListaCategorias'; // <-- Importar

function App() {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-y-auto">
        <Header />
        
        <main className="p-8 max-w-4xl mx-auto w-full">
          <ResumenPesos />
          <ListaCategorias /> {/* <-- Poner aquí */}
          
          {/* Pie de página sencillo */}
          <footer className="mt-10 py-6 border-t border-gray-200 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            © 2024 Ligerito - Control de peso para viajes
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;