import { useState } from "react";

export default function Planos() {
  const [anual, setAnual] = useState(false);

  const planos = [
    {
      nome: "Gratuito",
      preco: 0,
      precoAnual: 0,
      descricao: "Para quem quer começar",
      cor: "#6c757d",
      icone: "ti-leaf",
      recursos: [
        "Acompanhamento básico de calorias",
        "3 receitas por semana",
        "IMC e peso corporal",
        "Suporte por e-mail",
      ],
      bloqueados: [
        "Plano alimentar personalizado",
        "Consulta com nutricionista",
        "Relatórios detalhados",
        "Sem anúncios",
      ],
    },
    {
      nome: "Pro",
      preco: 29.9,
      precoAnual: 19.9,
      descricao: "Para quem quer resultados",
      cor: "#1D9E75",
      icone: "ti-rocket",
      destaque: true,
      recursos: [
        "Tudo do plano Gratuito",
        "Plano alimentar personalizado",
        "Receitas ilimitadas",
        "Relatórios detalhados",
        "Sem anúncios",
        "Suporte prioritário",
      ],
      bloqueados: [
        "Consulta com nutricionista",
      ],
    },
    {
      nome: "Premium",
      preco: 59.9,
      precoAnual: 39.9,
      descricao: "Para quem quer o melhor",
      cor: "#9b6fd4",
      icone: "ti-crown",
      recursos: [
        "Tudo do plano Pro",
        "Consulta mensal com nutricionista",
        "Dieta ajustada semanalmente",
        "Acesso antecipado a novidades",
        "Suporte 24h via chat",
        "App sem anúncios",
      ],
      bloqueados: [],
    },
  ];

  return (
    <section className="py-5 bg-light min-vh-100">
      <div className="container">

        <div className="text-center mb-5">
          <span
            className="badge rounded-pill px-3 py-2 mb-3 border border-2"
            style={{ color: "#1D9E75", borderColor: "#1D9E75", backgroundColor: "white", fontSize: 13 }}
          >
            Planos e preços
          </span>
          <h1 className="fw-bold display-6 mb-2">Escolha o plano ideal para você</h1>
          <p className="text-muted">Sem taxas escondidas. Cancele quando quiser.</p>

          <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
            <span className={`small fw-semibold ${!anual ? "text-dark" : "text-muted"}`}>Mensal</span>
            <div
              onClick={() => setAnual(!anual)}
              style={{
                width: 48,
                height: 26,
                borderRadius: 999,
                backgroundColor: anual ? "#1D9E75" : "#dee2e6",
                cursor: "pointer",
                position: "relative",
                transition: "background 0.2s",
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "white",
                  position: "absolute",
                  top: 3,
                  left: anual ? 25 : 3,
                  transition: "left 0.2s",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                }}
              />
            </div>
            <span className={`small fw-semibold ${anual ? "text-dark" : "text-muted"}`}>
              Anual{" "}
              <span
                className="badge rounded-pill px-2 ms-1"
                style={{ backgroundColor: "#e6f9f2", color: "#1D9E75", fontSize: 11 }}
              >
                Economize 33%
              </span>
            </span>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {planos.map((plano) => (
            <div className="col-md-6 col-lg-4" key={plano.nome}>
              <div
                className="card h-100 border-0 rounded-4 shadow-sm position-relative"
                style={{
                  border: plano.destaque ? `2px solid ${plano.cor}` : "1px solid #e9ecef",
                  outline: plano.destaque ? `2px solid ${plano.cor}` : "none",
                }}
              >
                {plano.destaque && (
                  <div
                    className="position-absolute top-0 start-50 translate-middle badge rounded-pill px-3 py-2"
                    style={{ backgroundColor: plano.cor, fontSize: 12 }}
                  >
                    Mais popular
                  </div>
                )}

                <div className="card-body p-4">
                  <div className="d-flex align-items-center gap-2 mb-3 mt-2">
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center"
                      style={{ width: 36, height: 36, backgroundColor: plano.cor + "20" }}
                    >
                      <i className={`ti ${plano.icone}`} style={{ color: plano.cor, fontSize: 18 }}></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">{plano.nome}</h5>
                      <small className="text-muted">{plano.descricao}</small>
                    </div>
                  </div>

                  <div className="mb-4">
                    {plano.preco === 0 ? (
                      <span className="display-6 fw-bold">Grátis</span>
                    ) : (
                      <>
                        <span className="text-muted small">R$</span>
                        <span className="display-6 fw-bold mx-1">
                          {(anual ? plano.precoAnual : plano.preco).toFixed(2).replace(".", ",")}
                        </span>
                        <span className="text-muted small">/mês</span>
                        {anual && (
                          <div className="small text-muted mt-1">
                            Cobrado R$ {(plano.precoAnual * 12).toFixed(2).replace(".", ",")} por ano
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <button
                    className="btn w-100 fw-semibold rounded-3 mb-4"
                    style={{
                      backgroundColor: plano.destaque ? plano.cor : "white",
                      color: plano.destaque ? "white" : plano.cor,
                      border: `1.5px solid ${plano.cor}`,
                      boxShadow: "none",
                    }}
                  >
                    {plano.preco === 0 ? "Começar grátis" : "Assinar agora"}
                  </button>

                  <ul className="list-unstyled mb-0">
                    {plano.recursos.map((r) => (
                      <li key={r} className="d-flex align-items-start gap-2 mb-2 small">
                        <i className="ti ti-check mt-1" style={{ color: plano.cor, fontSize: 15, flexShrink: 0 }}></i>
                        <span>{r}</span>
                      </li>
                    ))}
                    {plano.bloqueados.map((r) => (
                      <li key={r} className="d-flex align-items-start gap-2 mb-2 small text-muted">
                        <i className="ti ti-x mt-1" style={{ fontSize: 15, flexShrink: 0 }}></i>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted small mt-5">
          <i className="ti ti-shield-check me-1" style={{ color: "#1D9E75" }}></i>
          Pagamento seguro · Cancele quando quiser · Sem fidelidade
        </p>

      </div>
    </section>
  );
}