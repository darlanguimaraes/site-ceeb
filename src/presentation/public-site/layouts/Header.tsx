import euripedes from "../../../assets/euripedes.png";
import Navigation from "../components/Navigation";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-8xl mx-auto px-4 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src={euripedes}
            alt="Logo Casa Espírita Eurípedes Barsanulpho"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-3xl font-cookie tracking-tight text-primary leading-none">
              Casa Espírita Eurípedes Barsanulpho
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] text-slate-400 uppercase font-medium">
              Amor e Caridade
            </span>
          </div>
        </div>

        <Navigation />
      </div>
    </nav>
  );
}
