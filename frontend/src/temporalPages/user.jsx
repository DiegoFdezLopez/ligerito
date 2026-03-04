<>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Ligerito - Travel Packing Dashboard</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <style
    type="text/tailwindcss"
    dangerouslySetInnerHTML={{
      __html:
        "\n        @layer base {\n            body { @apply bg-background-light text-slate-900; }\n        }\n        .no-scrollbar::-webkit-scrollbar { display: none; }\n        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 20;\n        }\n    "
    }}
  />
  <div className="flex h-screen overflow-hidden">
    <aside className="w-80 flex flex-col bg-white border-r border-slate-100 h-full shrink-0">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-primary text-white p-1 rounded-lg">
            <span className="material-symbols-outlined text-xl">scale</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">
            Ligerito
          </h1>
        </div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Lists
          </h2>
          <button className="flex items-center gap-1 text-xs font-bold text-primary hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-sm">add</span>
            Create New
          </button>
        </div>
        <nav className="space-y-1 max-h-[30vh] overflow-y-auto no-scrollbar">
          <a
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 text-slate-900 font-medium group"
            href="#"
          >
            <span className="truncate">Japan Autumn 2024</span>
            <span className="text-[10px] text-slate-400 group-hover:text-primary">
              6.2kg
            </span>
          </a>
          <a
            className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-500 transition-colors"
            href="#"
          >
            <span className="truncate">Pacific Crest Trail</span>
            <span className="text-[10px] text-slate-400">8.9kg</span>
          </a>
          <a
            className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-500 transition-colors"
            href="#"
          >
            <span className="truncate">Weekend in Lisbon</span>
            <span className="text-[10px] text-slate-400">4.1kg</span>
          </a>
        </nav>
      </div>
      <div className="mx-6 border-t border-slate-100" />
      <div className="flex-1 flex flex-col p-6 overflow-hidden">
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
            Item Library
          </h2>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              search
            </span>
            <input
              className="w-full bg-slate-50 border-none rounded-lg py-2 pl-9 pr-4 text-xs focus:ring-1 focus:ring-primary/30 transition-all"
              placeholder="Search gear..."
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto space-y-2 no-scrollbar">
          <div className="p-3 bg-white border border-slate-100 rounded-lg hover:border-primary/30 cursor-pointer transition-colors group">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-700">
                Ultralight Backpack
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                920g
              </span>
            </div>
          </div>
          <div className="p-3 bg-white border border-slate-100 rounded-lg hover:border-primary/30 cursor-pointer transition-colors group">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-700">
                Merino Wool Shirt
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                140g
              </span>
            </div>
          </div>
          <div className="p-3 bg-white border border-slate-100 rounded-lg hover:border-primary/30 cursor-pointer transition-colors group">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-700">
                USB-C Powerbank
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                280g
              </span>
            </div>
          </div>
          <div className="p-3 bg-white border border-slate-100 rounded-lg hover:border-primary/30 cursor-pointer transition-colors group">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-700">
                Titanium Spork
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                12g
              </span>
            </div>
          </div>
          <div className="p-3 bg-white border border-slate-100 rounded-lg hover:border-primary/30 cursor-pointer transition-colors group">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-700">
                Rain Shell
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase">
                310g
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <div className="flex-1 flex flex-col h-full overflow-y-auto">
      <header className="h-16 bg-white/70 backdrop-blur-sm border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-10 shrink-0">
        <div>
          <h2 className="text-sm font-bold text-slate-900">
            Japan Autumn 2024
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button>
          <button className="p-2 text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-slate-100 ml-2">
            <img
              alt="Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF8EGsEDJ5VnHHMQEUwC_DYMCKpuwA37RvtZTMARnGVhLWyCOrd4mtu7gSILrugOasN6nDt4bvTJYg0EJ5nnhxR0sz3AhpqNP2RpP5rV3sB6J0PVTk9g73V3HTO45nAP0DKHxDH8lWckpF-3JTgGmul97LsgXioQ8fQ_8J12zuPDXS7mXbDkxEg8SxexmZ1Tc8LYI2nkRBpLYWJet-V1cVPgDwSuUL9K0CZMDiLjXV-aZA5IPGZ5h3LUDUv2SBNbF_cB8VFE5NC9qP"
            />
          </div>
        </div>
      </header>
      <main className="flex-1 p-8 max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Weight Distribution
            </h3>
            <div className="text-2xl font-black text-slate-900">
              6.22{" "}
              <span className="text-lg font-bold text-slate-400 uppercase tracking-normal">
                kg
              </span>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 flex items-center gap-12">
            <div className="flex-1 space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500">
                  <span>Clothing</span>
                  <span>3.2kg (51%)</span>
                </div>
                <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "51%" }} />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500">
                  <span>Electronics</span>
                  <span>1.8kg (29%)</span>
                </div>
                <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-300"
                    style={{ width: "29%" }}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase text-slate-500">
                  <span>Hygiene</span>
                  <span>0.5kg (8%)</span>
                </div>
                <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-200"
                    style={{ width: "8%" }}
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:block w-40 h-40 relative">
              <div className="absolute inset-0 rounded-full border-[12px] border-slate-50" />
              <div className="absolute inset-0 rounded-full border-[12px] border-primary border-t-transparent border-l-transparent border-r-transparent transform -rotate-45" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-slate-400">Total</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-10 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-3">
                <h4 className="text-sm font-bold text-slate-900">Clothing</h4>
                <button className="flex items-center gap-1 px-2 py-1 rounded bg-slate-100 hover:bg-primary/10 text-slate-500 hover:text-primary transition-all text-[10px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-xs">add</span>
                  Add Item
                </button>
              </div>
              <div className="h-px flex-1 bg-slate-100" />
            </div>
            <div className="space-y-1">
              <div className="flex px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 items-center">
                <div className="flex-1">Name &amp; Description</div>
                <div className="w-24 text-center">Weight</div>
                <div className="w-24 text-center">Qty</div>
                <div className="w-8" />
              </div>
              <div className="flex px-4 py-2 bg-white hover:bg-slate-50 rounded-lg items-center transition-colors border border-transparent hover:border-slate-100 group">
                <div className="flex-1 flex items-center gap-2 overflow-hidden mr-8">
                  <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                    Merino T-Shirt
                  </span>
                  <span className="text-[10px] text-slate-400 truncate">
                    {" "}
                    - Grey, antimicrobial base layer
                  </span>
                </div>
                <div className="w-24 text-center text-xs font-medium text-slate-600">
                  150g
                </div>
                <div className="w-24 flex justify-center">
                  <div className="flex items-center gap-1.5">
                    <button className="w-5 h-5 flex items-center justify-center rounded-md bg-slate-50 hover:bg-slate-200 text-slate-400 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <span className="text-xs font-bold w-5 text-center">3</span>
                    <button className="w-5 h-5 flex items-center justify-center rounded-md bg-slate-50 hover:bg-slate-200 text-slate-400 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-8 flex justify-end">
                  <button className="text-slate-300 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                    <span className="material-symbols-outlined text-base">
                      close
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex px-4 py-2 bg-white hover:bg-slate-50 rounded-lg items-center transition-colors border border-transparent hover:border-slate-100 group">
                <div className="flex-1 flex items-center gap-2 overflow-hidden mr-8">
                  <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                    Packable Down Jacket
                  </span>
                  <span className="text-[10px] text-slate-400 truncate">
                    {" "}
                    - Insulation for cool evenings
                  </span>
                </div>
                <div className="w-24 text-center text-xs font-medium text-slate-600">
                  280g
                </div>
                <div className="w-24 flex justify-center">
                  <div className="flex items-center gap-1.5">
                    <button className="w-5 h-5 flex items-center justify-center rounded-md bg-slate-50 hover:bg-slate-200 text-slate-400 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <span className="text-xs font-bold w-5 text-center">1</span>
                    <button className="w-5 h-5 flex items-center justify-center rounded-md bg-slate-50 hover:bg-slate-200 text-slate-400 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-8 flex justify-end">
                  <button className="text-slate-300 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                    <span className="material-symbols-outlined text-base">
                      close
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-3">
                <h4 className="text-sm font-bold text-slate-900">
                  Electronics
                </h4>
                <button className="flex items-center gap-1 px-2 py-1 rounded bg-slate-100 hover:bg-primary/10 text-slate-500 hover:text-primary transition-all text-[10px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-xs">add</span>
                  Add Item
                </button>
              </div>
              <div className="h-px flex-1 bg-slate-100" />
            </div>
            <div className="space-y-1">
              <div className="flex px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 items-center">
                <div className="flex-1">Name &amp; Description</div>
                <div className="w-24 text-center">Weight</div>
                <div className="w-24 text-center">Qty</div>
                <div className="w-8" />
              </div>
              <div className="flex px-4 py-2 bg-white hover:bg-slate-50 rounded-lg items-center transition-colors border border-transparent hover:border-slate-100 group">
                <div className="flex-1 flex items-center gap-2 overflow-hidden mr-8">
                  <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                    Mirrorless Camera
                  </span>
                  <span className="text-[10px] text-slate-400 truncate">
                    {" "}
                    - With 35mm prime lens
                  </span>
                </div>
                <div className="w-24 text-center text-xs font-medium text-slate-600">
                  650g
                </div>
                <div className="w-24 flex justify-center">
                  <div className="flex items-center gap-1.5">
                    <button className="w-5 h-5 flex items-center justify-center rounded-md bg-slate-50 hover:bg-slate-200 text-slate-400 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <span className="text-xs font-bold w-5 text-center">1</span>
                    <button className="w-5 h-5 flex items-center justify-center rounded-md bg-slate-50 hover:bg-slate-200 text-slate-400 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-8 flex justify-end">
                  <button className="text-slate-300 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                    <span className="material-symbols-outlined text-base">
                      close
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex px-4 py-2 bg-white hover:bg-slate-50 rounded-lg items-center transition-colors border border-transparent hover:border-slate-100 group">
                <div className="flex-1 flex items-center gap-2 overflow-hidden mr-8">
                  <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                    Universal Travel Adapter
                  </span>
                  <span className="text-[10px] text-slate-400 truncate">
                    {" "}
                    - GaN fast charging
                  </span>
                </div>
                <div className="w-24 text-center text-xs font-medium text-slate-600">
                  180g
                </div>
                <div className="w-24 flex justify-center">
                  <div className="flex items-center gap-1.5">
                    <button className="w-5 h-5 flex items-center justify-center rounded-md bg-slate-50 hover:bg-slate-200 text-slate-400 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <span className="text-xs font-bold w-5 text-center">1</span>
                    <button className="w-5 h-5 flex items-center justify-center rounded-md bg-slate-50 hover:bg-slate-200 text-slate-400 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                </div>
                <div className="w-8 flex justify-end">
                  <button className="text-slate-300 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                    <span className="material-symbols-outlined text-base">
                      close
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-slate-200 rounded-xl text-slate-400 hover:border-primary/40 hover:text-primary transition-all group bg-slate-50/50">
            <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">
              create_new_folder
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Add New Category
            </span>
          </button>
        </div>
        <footer className="mt-12 py-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-400 font-medium tracking-wide">
          <p>© 2024 LIGERITO GEAR TRACKING</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-primary transition-colors" href="#">
              PRIVACY POLICY
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              TERMS OF SERVICE
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              HELP CENTER
            </a>
          </div>
        </footer>
      </main>
    </div>
  </div>
</>
