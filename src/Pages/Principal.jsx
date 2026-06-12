import { useState } from "react";
import Titulo from "../components/Titulo";

const categorias = ["Todos", "Alimentação", "Sono", "Exercício", "Hidratação", "Mental"];

const habitos = [
  {
    id: 1,
    categoria: "Alimentação",
    icone: "ti-apple",
    cor: "#1D9E75",
    bg: "#e6f9f2",
    titulo: "Coma de 3 em 3 horas",
    descricao: "Manter refeições regulares ajuda a controlar o metabolismo e evitar excessos.",
    dificuldade: "Fácil",
    tempo: "Todo dia",
  },
  {
    id: 2,
    categoria: "Sono",
    icone: "ti-moon",
    cor: "#9b6fd4",
    bg: "#f3edfb",
    titulo: "Durma 8 horas por noite",
    descricao: "O sono adequado regula hormônios do apetite e melhora o desempenho físico.",
    dificuldade: "Médio",
    tempo: "Todo dia",
  },
  {
    id: 3,
    categoria: "Hidratação",
    icone: "ti-droplet",
    cor: "#378ADD",
    bg: "#e6f1fb",
    titulo: "Beba 2 litros de água",
    descricao: "A hidratação adequada melhora o metabolismo, a pele e a disposição diária.",
    dificuldade: "Fácil",
    tempo: "Todo dia",
  },
  {
    id: 4,
    categoria: "Exercício",
    icone: "ti-run",
    cor: "#e67e22",
    bg: "#fdf0e0",
    titulo: "Caminhe 30 minutos",
    descricao: "Uma caminhada diária reduz o estresse, melhora o coração e queima calorias.",
    dificuldade: "Fácil",
    tempo: "Todo dia",
  },
  {
    id: 5,
    categoria: "Mental",
    icone: "ti-brain",
    cor: "#e84393",
    bg: "#fdeef6",
    titulo: "Medite por 10 minutos",
    descricao: "A meditação reduz ansiedade, melhora o foco e a qualidade do sono.",
    dificuldade: "Médio",
    tempo: "Todo dia",
  },
  {
    id: 6,
    categoria: "Alimentação",
    icone: "ti-salad",
    cor: "#1D9E75",
    bg: "#e6f9f2",
    titulo: "Inclua vegetais em todas refeições",
    descricao: "Vegetais fornecem fibras, vitaminas e minerais essenciais para o organismo.",
    dificuldade: "Médio",
    tempo: "Todo dia",
  },
  {
    id: 7,
    categoria: "Sono",
    icone: "ti-device-mobile-off",
    cor: "#9b6fd4",
    bg: "#f3edfb",
    titulo: "Sem telas 1h antes de dormir",
    descricao: "A luz azul das telas atrapalha a produção de melatonina e prejudica o sono.",
    dificuldade: "Difícil",
    tempo: "Todo dia",
  },
  {
    id: 8,
    categoria: "Hidratação",
    icone: "ti-glass",
    cor: "#378ADD",
    bg: "#e6f1fb",
    titulo: "Comece o dia com água",
    descricao: "Beber um copo de água ao acordar hidrata o corpo e ativa o metabolismo.",
    dificuldade: "Fácil",
    tempo: "Manhã",
  },
  {
    id: 9,
    categoria: "Exercício",
    icone: "ti-barbell",
    cor: "#e67e22",
    bg: "#fdf0e0",
    titulo: "Musculação 3x por semana",
    descricao: "O treino de força aumenta a massa muscular e acelera o metabolismo.",
    dificuldade: "Difícil",
    tempo: "3x/semana",
  },
  {
    id: 10,
    categoria: "Mental",
    icone: "ti-notebook",
    cor: "#e84393",
    bg: "#fdeef6",
    titulo: "Escreva 3 gratidões por dia",
    descricao: "A prática da gratidão melhora o humor, reduz o estresse e aumenta o bem-estar.",
    dificuldade: "Fácil",
    tempo: "Todo dia",
  },
  {
    id: 11,
    categoria: "Alimentação",
    icone: "ti-fish",
    cor: "#1D9E75",
    bg: "#e6f9f2",
    titulo: "Consuma proteínas em toda refeição",
    descricao: "As proteínas aumentam a saciedade e são essenciais para manutenção muscular.",
    dificuldade: "Médio",
    tempo: "Todo dia",
  },
  {
    id: 12,
    categoria: "Sono",
    icone: "ti-clock",
    cor: "#9b6fd4",
    bg: "#f3edfb",
    titulo: "Tenha um horário fixo para dormir",
    descricao: "Dormir e acordar no mesmo horário regula o relógio biológico do corpo.",
    dificuldade: "Médio",
    tempo: "Todo dia",
  },
];

const dificuldadeCor = {
  "Fácil": { bg: "#e6f9f2", color: "#0F6E56" },
  "Médio": { bg: "#fdf0e0", color: "#a05c10" },
  "Difícil": { bg: "#fdeef6", color: "#a0205e" },
};

export default function Principal() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [concluidos, setConcluidos] = useState([]);

  const filtrados = categoriaSelecionada === "Todos"
    ? habitos
    : habitos.filter((h) => h.categoria === categoriaSelecionada);

  function toggleConcluido(id) {
    setConcluidos((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }

  return (
  <>
  <Titulo
        Navbar="Bem vindo(a) ao Nutri Mais"
  />
    <section className="py-5 bg-light min-vh-100">
      
      <div className="container">

        

        <div className="text-center mb-5">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <div
              className="rounded-3 d-flex align-items-center justify-content-center"
              style={{ width: 40, height: 40, backgroundColor: "#1D9E75" }}
            >
              <i className="ti ti-leaf text-white" style={{ fontSize: 20 }}></i>
            </div>
            <span className="fw-semibold fs-4">Nutri Mais</span>
          </div>
          <h1 className="fw-bold display-6 mb-2">Hábitos recomendados</h1>
          <p className="text-muted">Pequenas mudanças que geram grandes resultados no seu dia a dia.</p>

          <div className="d-flex align-items-center justify-content-center gap-2 mt-2">
            <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: "#e6f9f2", color: "#0F6E56", fontSize: 13 }}>
              <i className="ti ti-check me-1"></i>
              {concluidos.length} de {habitos.length} concluídos hoje
            </span>
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSelecionada(cat)}
              className="btn btn-sm rounded-pill px-3"
              style={{
                boxShadow: "none",
                backgroundColor: categoriaSelecionada === cat ? "#1D9E75" : "white",
                color: categoriaSelecionada === cat ? "white" : "#495057",
                border: `1.5px solid ${categoriaSelecionada === cat ? "#1D9E75" : "#dee2e6"}`,
                fontWeight: categoriaSelecionada === cat ? 600 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filtrados.map((habito) => {
            const concluido = concluidos.includes(habito.id);
            return (
              <div className="col-sm-6 col-lg-4" key={habito.id}>
                <div
                  className="card h-100 border-0 rounded-4 shadow-sm"
                  style={{
                    opacity: concluido ? 0.75 : 1,
                    transition: "opacity 0.2s",
                  }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start justify-content-between mb-3">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center"
                        style={{ width: 44, height: 44, backgroundColor: habito.bg, flexShrink: 0 }}
                      >
                        <i className={`ti ${habito.icone}`} style={{ color: habito.cor, fontSize: 22 }}></i>
                      </div>
                      <button
                        onClick={() => toggleConcluido(habito.id)}
                        className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: 32,
                          height: 32,
                          backgroundColor: concluido ? "#1D9E75" : "white",
                          border: `1.5px solid ${concluido ? "#1D9E75" : "#dee2e6"}`,
                          boxShadow: "none",
                          flexShrink: 0,
                        }}
                        title={concluido ? "Desmarcar" : "Marcar como feito"}
                      >
                        <i className="ti ti-check" style={{ color: concluido ? "white" : "#adb5bd", fontSize: 14 }}></i>
                      </button>
                    </div>

                    <span
                      className="badge rounded-pill px-2 py-1 mb-2 small"
                      style={{ backgroundColor: habito.bg, color: habito.cor, fontSize: 11 }}
                    >
                      {habito.categoria}
                    </span>

                    <h6 className="fw-bold mb-1" style={{ textDecoration: concluido ? "line-through" : "none" }}>
                      {habito.titulo}
                    </h6>
                    <p className="text-muted small mb-3">{habito.descricao}</p>

                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <span
                        className="badge rounded-pill px-2 py-1"
                        style={{
                          backgroundColor: dificuldadeCor[habito.dificuldade].bg,
                          color: dificuldadeCor[habito.dificuldade].color,
                          fontSize: 11,
                        }}
                      >
                        {habito.dificuldade}
                      </span>
                      <span className="d-flex align-items-center gap-1 text-muted" style={{ fontSize: 12 }}>
                        <i className="ti ti-clock" style={{ fontSize: 13 }}></i>
                        {habito.tempo}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtrados.length === 0 && (
          <div className="text-center py-5 text-muted">
            <i className="ti ti-mood-empty" style={{ fontSize: 48 }}></i>
            <p className="mt-3">Nenhum hábito encontrado nessa categoria.</p>
          </div>
        )}

      </div>
    </section>
  </>  
  );
}