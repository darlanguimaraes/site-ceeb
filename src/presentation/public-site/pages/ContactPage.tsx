import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import LocationMap from "../components/LocationMap";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen font-display bg-background-light text-slate-800 antialiased">
      <Header />

      <main className="max-w-8xl mx-auto">
        <section className="px-4 md:px-12 py-5">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-8 text-center">
              Contato e Localização
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Informações de Contato */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">
                    Contato
                  </h2>
                  <ContactForm />
                  <div className="space-y-2 text-slate-600">
                    <p>
                      <strong>Se preferir, envie um e-mail:</strong>{" "}
                      ceeuripedesbarsanulphosj@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">
                    Endereço
                  </h2>
                  <p className="text-slate-600 mb-2">Rua Flomape, 1342</p>
                  <p className="text-slate-600">
                    Real Parque, São José, Santa Catarina
                  </p>
                  <p className="text-slate-600">CEP: 88113-220</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4 mt-4">
                    Como Chegar
                  </h2>
                  <LocationMap height="450px" />
                  <p className="text-sm text-slate-500 mt-3">
                    Clique no marcador para ver mais opções de navegação. Use os
                    controles no canto superior direito para alternar entre Mapa
                    de Ruas, Satélite e Satélite com Labels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
