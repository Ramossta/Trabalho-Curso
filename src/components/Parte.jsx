export default function Parte() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row g-3 justify-content-center">
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 rounded-4 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <div className="mb-3 fs-3 text-success">📋</div>
                <h5 className="fw-bold">Planos personalizados</h5>
                <p className="text-muted small mb-0">
                  Dieta feita para você de acordo com seus objetivos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 rounded-4 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <div className="mb-3 fs-3 text-success">🥗</div>
                <h5 className="fw-bold">Receitas saudáveis</h5>
                <p className="text-muted small mb-0">
                  Opções nutritivas para o seu dia a dia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 rounded-4 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <div className="mb-3 fs-3 text-success">📈</div>
                <h5 className="fw-bold">Acompanhe seu progresso</h5>
                <p className="text-muted small mb-0">
                  Monitore sua evolução e conquiste seus resultados.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card border-0 rounded-4 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <div className="mb-3 fs-3 text-success">💬</div>
                <h5 className="fw-bold">Suporte de nutricionistas</h5>
                <p className="text-muted small mb-0">
                  Tire dúvidas e receba orientação de quem entende.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 p-4 rounded-4 bg-success bg-opacity-10 border border-success d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
          <div>
            <h6 className="mb-2 fw-semibold">Baixe agora e dê o primeiro passo para a sua melhor versão!</h6>
            <p className="mb-0 text-muted small">
              Acompanhe sua alimentação com mais controle, planejamento e motivação.
            </p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-dark btn-sm rounded-pill px-3">App Store</button>
            <button className="btn btn-dark btn-sm rounded-pill px-3">Google Play</button>
          </div>
        </div>
      </div>
    </section>
  );
}
