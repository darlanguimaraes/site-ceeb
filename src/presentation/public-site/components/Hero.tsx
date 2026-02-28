import image1 from "../../../assets/frente.jpg";

export default function Hero() {
  return (
    <section className="relative h-120 w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          alt="Panoramic peaceful landscape with soft light"
          src={image1}
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/40 to-transparent"></div>
      </div>

      <div className="relative h-full flex flex-col justify-between px-4 md:px-8 py-4 md:py-8 max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-extralight text-slate-900 leading-tight">
          Bem Vindo <br />
        </h2>
        <p className="text-slate-900 text-base md:text-lg max-w-lg leading-relaxed font-normal">
          A Casa Espírita Eurípedes Barsanulpho, fundada em 29 de agosto de
          2014, é uma organização religiosa, de caráter educacional, cultural,
          de assistência social, filantrópica, sem fins lucrativos, e tem por
          objetivos a prática da caridade espiritual, moral e material por todos
          os meios ao seu alcance e dentro dos princípios da Doutrina Espírita
          codificada por Allan Kardec. Conheça as nossas atividades e horários
          de funcionamento e seja muito bem-vindo
        </p>
      </div>
    </section>
  );
}
