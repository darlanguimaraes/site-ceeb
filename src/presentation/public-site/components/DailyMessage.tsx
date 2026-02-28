export default function DailyMessage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center border-b border-slate-100 pb-4">
        <h3 className="text-xl font-bold text-primary tracking-tight">
          Mensagem
        </h3>
      </div>

      <div className="bg-primary p-12 text-white relative overflow-hidden">
        <span className="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-white/10 select-none">
          format_quote
        </span>
        <div className="relative z-10">
          <p className="text-2xl font-light italic leading-relaxed mb-8">
            "Em verdade, cada criatura responderá pelos compromissos que assume,
            à frente da Lei, e mordomos e apóstolos da evolução planetária serão
            constrangidos à prestação de contas dos bens que houverem usufruído
            para melhoria e iluminação do mundo, no entanto, não olvides a
            superioridade espiritual com o Cristo e nem te esqueças de que foste
            chamado por Jesus a partilhar-lhe o Conhecimento Divino da paz e da
            justiça, do sacrifício e da tolerância fraterna."
          </p>
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-12 bg-white/30"></div>
            <span className="font-bold tracking-widest uppercase text-xs">
              Emmanuel
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
