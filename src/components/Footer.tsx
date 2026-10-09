import { PORTFOLIO_INFO } from '../data/portfolioData';
import { PageId, NAV_ITEMS } from '../types/navigation';
import { ArrowUp, Github, Linkedin, Instagram, MessageSquare, Code2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-top py-5 bg-body-tertiary position-relative mt-auto">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-between mb-4">
          <div className="col-12 col-lg-5">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div 
                className="d-flex align-items-center justify-content-center rounded-3 bg-primary text-white shadow-sm"
                style={{ width: '32px', height: '32px' }}
              >
                <Code2 size={18} />
              </div>
              <span className="fw-bold fs-6 text-body">{PORTFOLIO_INFO.name}</span>
            </div>
            <p className="text-body-secondary small mb-0 max-w-md">
              Portfolio développé selon les principes de <strong>Next.js</strong>, avec des animations <strong>Framer Motion</strong> et la mise en page responsive <strong>Bootstrap 5</strong>.
            </p>
          </div>

          {/* Quick Page Links */}
          <div className="col-12 col-lg-4 d-flex flex-wrap gap-2 justify-content-lg-center">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  scrollToTop();
                }}
                className="btn btn-link btn-sm text-body-secondary text-decoration-none px-2 py-1"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="col-12 col-lg-3 d-flex flex-row align-items-center justify-content-lg-end gap-3">
            <div className="d-flex gap-2">
              <a
                href={PORTFOLIO_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: '36px', height: '36px' }}
                aria-label="WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
              <a
                href={PORTFOLIO_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: '36px', height: '36px' }}
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={PORTFOLIO_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: '36px', height: '36px' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={PORTFOLIO_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: '36px', height: '36px' }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn btn-outline-primary btn-sm rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-1.5"
              aria-label="Remonter en haut"
            >
              <span>Haut</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="pt-3 border-top d-flex flex-column flex-sm-row align-items-center justify-content-between text-muted small font-mono-code gap-2">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_INFO.name}. Tous droits réservés.
          </div>
          <div className="d-flex align-items-center gap-1">
            <span>Next.js Architecture · Framer Motion · Bootstrap 5</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
