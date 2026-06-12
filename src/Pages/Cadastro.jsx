import { useState } from "react";

export default function NovasContas() {
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", senha: "", confirmar: "" });
  const [msg, setMsg] = useState({ texto: "", tipo: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCadastro() {
    setMsg({ texto: "", tipo: "" });

    if (!form.nome || !form.email || !form.senha || !form.confirmar) {
      setMsg({ texto: "Preencha todos os campos.", tipo: "error" });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setMsg({ texto: "E-mail inválido.", tipo: "error" });
      return;
    }

    if (form.senha.length < 6) {
      setMsg({ texto: "A senha deve ter pelo menos 6 caracteres.", tipo: "error" });
      return;
    }

    if (form.senha !== form.confirmar) {
      setMsg({ texto: "As senhas não coincidem.", tipo: "error" });
      return;
    }

    setMsg({ texto: "Conta criada com sucesso!", tipo: "success" });
  }

  const inputStyle = { boxShadow: "none", outline: "none" };
  const inputFocusStyle = { boxShadow: "none", borderColor: "#1D9E75" };

  return (
    <section className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="card border-0 shadow-sm rounded-4 p-4" style={{ width: "100%", maxWidth: "420px" }}>

        <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
          <div className="rounded-3 d-flex align-items-center justify-content-center" style={{ width: 36, height: 36, backgroundColor: "#1D9E75" }}>
            <i className="ti ti-leaf text-white" style={{ fontSize: 18 }}></i>
          </div>
          <span className="fw-semibold fs-5">Nutri Mais</span>
        </div>

        <h2 className="text-center fw-bold fs-5 mb-1">Crie sua conta</h2>
        <p className="text-center text-muted small mb-4">Comece sua jornada saudável hoje</p>

        {msg.texto && (
          <div className={`alert ${msg.tipo === "error" ? "alert-danger" : "alert-success"} d-flex align-items-center gap-2 py-2 small`}>
            <i className={`ti ${msg.tipo === "error" ? "ti-alert-circle" : "ti-circle-check"}`}></i>
            {msg.texto}
          </div>
        )}

        <div className="mb-3">
          <label className="form-label small text-muted">Nome completo</label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="ti ti-user text-muted"></i>
            </span>
            <input
              type="text"
              name="nome"
              className="form-control border-start-0 ps-0"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label small text-muted">E-mail</label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="ti ti-mail text-muted"></i>
            </span>
            <input
              type="email"
              name="email"
              className="form-control border-start-0 ps-0"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label small text-muted">Senha</label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="ti ti-lock text-muted"></i>
            </span>
            <input
              type={showSenha ? "text" : "password"}
              name="senha"
              className="form-control border-start-0 border-end-0 ps-0"
              placeholder="Mínimo 6 caracteres"
              value={form.senha}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
            <button
              className="input-group-text bg-white border-start-0"
              onClick={() => setShowSenha(!showSenha)}
              type="button"
              style={{ boxShadow: "none", outline: "none" }}
            >
              <i className={`ti ${showSenha ? "ti-eye-off" : "ti-eye"} text-muted`}></i>
            </button>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label small text-muted">Confirmar senha</label>
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="ti ti-lock-check text-muted"></i>
            </span>
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmar"
              className="form-control border-start-0 border-end-0 ps-0"
              placeholder="Repita a senha"
              value={form.confirmar}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
            <button
              className="input-group-text bg-white border-start-0"
              onClick={() => setShowConfirm(!showConfirm)}
              type="button"
              style={{ boxShadow: "none", outline: "none" }}
            >
              <i className={`ti ${showConfirm ? "ti-eye-off" : "ti-eye"} text-muted`}></i>
            </button>
          </div>
        </div>

        <button
          className="btn w-100 text-white fw-semibold mt-1"
          style={{ backgroundColor: "#1D9E75", boxShadow: "none" }}
          onClick={handleCadastro}
        >
          Criar conta
        </button>

        <div className="d-flex align-items-center gap-2 my-3">
          <hr className="flex-grow-1 m-0" />
          <span className="text-muted small">ou cadastre-se com</span>
          <hr className="flex-grow-1 m-0" />
        </div>

        <button
          className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2"
          style={{ boxShadow: "none" }}
        >
          <svg width="16" height="16" viewBox="0 0 48 48">
            <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-21 0-1.3-.2-2.7-.5-4z"/>
          </svg>
          Cadastrar com Google
        </button>

        <p className="text-center small text-muted mt-3 mb-0">
          Já tem uma conta?{" "}
          <a href="#" className="text-decoration-none fw-semibold" style={{ color: "#1D9E75" }}>
            Entrar
          </a>
        </p>

      </div>
    </section>
  );
}