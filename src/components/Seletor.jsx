import heroImage from '../../nutri.png';
import { Link } from 'react-router-dom';

export default function Seletor() {
  return (
    <section
      className="position-relative overflow-hidden"
      style={{ backgroundColor: '#ffffff',  }}
    >
      <div className="container py-5">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <span className="badge rounded-pill px-3 py-2 mb-3 text-success bg-white border border-2 border-success">
              NutriNós
            </span>
            <h1 className="display-4 fw-bold text-dark mb-3">
              Nutrição que transforma vidas!
            </h1>
            <p className="lead text-secondary mb-4">
              O app que te ajuda a ter uma alimentação mais saudável, equilibrada e personalizada.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
              <Link to="/cadastro">
                <button className="btn btn-success btn-lg px-4 shadow-sm">Comece agora</button>
              </Link>
              <Link to="/planos">
                <button className="btn btn-outline-success btn-lg px-4">Veja planos</button>
              </Link>
            </div>
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <div className="d-flex align-items-center gap-2 text-success">
                <span className="fs-4">✔️</span>
                <small>Saúde, nutrição e bem-estar</small>
              </div>
              <div className="d-flex align-items-center gap-2 text-success">
                <span className="fs-4">📱</span>
                <small>Interface moderna e intuitiva</small>
              </div>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <div className="mx-auto" style={{ maxWidth: '520px' }}>
              <img
                src={heroImage}
                alt="NutriNós app preview"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
