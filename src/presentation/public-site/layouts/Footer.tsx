import euripedes from "../../../assets/euripedes.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-12 py-8">
      <div className="max-w-8xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img
              src={euripedes}
              alt="Logo Casa Espírita Eurípedes Barsanulpho"
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-cookie tracking-tight text-primary">
                Casa Espírita Eurípedes Barsanulpho
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] text-slate-400 uppercase font-medium">
                Amor e Caridade
              </span>
            </div>
          </div>
        </div>

        <div className="md:text-right">
          <h5 className="font-bold text-slate-900 mb-6 text-sm tracking-widest ">
            Visite-nos
          </h5>
          <p className="text-sm text-slate-500 mb-2 font-medium">
            Rua Flomape, 1342
          </p>
          <p className="text-sm text-slate-500 mb-6 font-medium">
            Real Parque, São José, Santa Catarina
          </p>
          <a
            href="/contato"
            className="flex items-center gap-2 text-primary font-bold text-xs md:justify-end cursor-pointer hover:text-blue-700 transition-colors"
          >
            <span className="material-symbols-outlined text-base">
              location_on
            </span>
            Obter Direções
          </a>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 md:px-12 mt-16 pt-4 border-t border-slate-50 text-center">
        <p className="text-slate-400 text-[12px] tracking-[0.2em]">
          © {new Date().getFullYear()} Casa Espírita Eurípedes Barsanulpho -
          Amor e Caridade
        </p>
      </div>
    </footer>
  );
}
