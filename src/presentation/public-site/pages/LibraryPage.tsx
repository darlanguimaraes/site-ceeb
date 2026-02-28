import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import livros from "../../../assets/livro.jpeg";

export default function LibraryPage() {
  return (
    <div className="min-h-screen font-display bg-background-light text-slate-800 antialiased">
      <Header />
      <main className="max-w-2xl mx-auto">
        <section className="px-4 md:px-12 py-6">
          <h1 className="text-2xl font-bold text-primary mb-4">Biblioteca</h1>
          <img
            src={livros}
            alt="Livros da Biblioteca da Casa Espírita Eurípedes Barsanulpho"
            className="w-96 max-w-3xl mx-auto mb-8 rounded-lg shadow-md object-cover"
          />
          <div>
            {" "}
            <p>
              As obras disponibilizadas na <b>Biblioteca</b> da{" "}
              <b>Casa Espírita Eurípedes Barsanulpho</b> para empréstimo aos
              frequentadores e as que se destinam à comercialização na livraria,
              são rigorosamente fiéis à Doutrina Espírita codificada por Allan
              Kardec.
            </p>
            <p>
              * Para que possam usufruir do empréstimo das obras, os
              frequentadores da Casa Espirita Eurípedes Barsanulpho devem se
              <b> cadastrar</b> junto à biblioteca.
            </p>
            <p>
              * O <b>empréstimo</b> de livros é inteiramente <b>gratuito</b>,
              sendo o empréstimo de livros por um período de{" "}
              <b>30 dias, renováveis</b> por mais 30 dias.
            </p>
            <p>
              <b>
                * A não devolução das obras no prazo acarreta na aplicação de
                multa no valor de R$1,00 (um real) por dia de atraso.
              </b>
            </p>
            <p>
              * Cada frequentador somente pode pegar para empréstimo um livro
              por vez, não sendo permitido o empréstimo de outra obra enquanto
              não houver sido devolvida a que foi retirada anteriormente.
            </p>
            <p>
              * O empréstimo de obras da biblioteca e a comercialização de obras
              da livraria se verifica nos dias de exposições doutrinárias, 30
              minutos antes e 30 minutos após a exposição doutrinária, não
              podendo esta atividade ser realizada durante a exposição
              doutrinária.
            </p>
            <p>
              * Em caso de perda ou extravio de livro, aquele que o retirou por
              empréstimo deverá fazer a doação de outro, de mesmo título, autor
              e editora. Em caso da não existência do produto no mercado, caberá
              ao dirigente do Departamento Doutrinário aprovar a substituição
              por outro similar.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
