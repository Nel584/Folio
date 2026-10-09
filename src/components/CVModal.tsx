import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_INFO, PROJECTS, EXPERIENCES, FORMATIONS, CERTIFICATS } from '../data/portfolioData';
import { 
  X, 
  Download, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Heart, 
  Languages, 
  Code2, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const textContent = 
`=============================================================
CURRICULUM VITAE - EHOUAN YAO SYLAS
Développeur Web Junior
=============================================================

CONTACT :
• Téléphone   : +229 01 92 21 18 95
• Email       : ehouans@gmail.com
• Localisation: Cotonou, Bénin
• Portfolio   : portfolio-five-tau-tvhmvwkgx3.vercel.app
• GitHub      : github.com/Nel584
• LinkedIn    : Sylas EHOUAN

LANGUES :
• Français : courant
• Anglais  : débutant

COMPÉTENCES :
• Développement : HTML, CSS, JavaScript, PHP, React, Laravel, MySQL / SQL
• Outils       : Git, GitHub, VS Code

PROFIL :
Étudiant en développement web à l'École Internationale du Graphisme du Bénin, je réalise des sites et applications web.
Ma formation couvre HTML, CSS, JavaScript, PHP, React et Laravel. Mon expérience
en vente et en conseil client m'a appris à comprendre les besoins et à apporter des solutions adaptées.

PROJETS WEB :
1. Layali Perles
   Projet personnel : conception et réalisation d'un site de vente de bijoux.

2. SchoolPay
   Projet académique en équipe : plateforme de paiement scolaire.

3. SEGURO Hotel
   Projet académique : site de réservation hôtelière.

EXPÉRIENCE PROFESSIONNELLE :
• Conseiller en vente - produits cosmétiques
  Boutique de cosmétiques, Marché Dantokpa, Cotonou | 2025 - 2026
  - Conseil client et vente de produits cosmétiques.
  - Gestion des commandes.
  - Participation à la promotion sur les réseaux sociaux.

FORMATION :
• Formation en développement web (En cours) - École Internationale du Graphisme du Bénin
• Baccalauréat (2024 - 2025)

CERTIFICAT :
• Digital Marketing 101 for Entrepreneurs and Freelancers - Domestika, août 2026.

CENTRES D'INTÉRÊT :
• Athlétisme, musique et jeux vidéo.
=============================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_EHOUAN_Yao_Sylas.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div 
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3 p-md-4 z-50"
        style={{ zIndex: 1060 }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ 
            backgroundColor: 'rgba(5, 8, 15, 0.85)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="card glass-card rounded-5 border position-relative overflow-hidden w-100 shadow-2xl z-1"
          style={{ maxWidth: '920px', maxHeight: '92vh', display: 'flex', flexDirection: 'column' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="card-header border-bottom d-flex align-items-center justify-content-between p-3.5 px-4 bg-body-tertiary">
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-primary text-white rounded-pill px-3 py-1 font-mono-code text-xs">
                CV Officiel
              </span>
              <h3 className="h6 fw-bold mb-0 text-body">Curriculum Vitae · EHOUAN Yao Sylas</h3>
            </div>
            <button
              onClick={onClose}
              className="btn btn-outline-secondary border-0 rounded-circle p-2 d-flex align-items-center justify-content-center"
              aria-label="Fermer"
              style={{ width: '36px', height: '36px' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body: Styled exactly like the PDF CV */}
          <div className="card-body p-4 overflow-y-auto" style={{ maxHeight: 'calc(92vh - 130px)' }}>
            <div className="row g-4">
              {/* Left Column (Sidebar of the CV) */}
              <div className="col-12 col-md-4 border-end-md pb-3">
                {/* Photo Avatar */}
                <div className="text-center mb-4">
                  <div 
                    className="rounded-circle overflow-hidden mx-auto shadow-sm border border-3 border-primary"
                    style={{ width: '130px', height: '130px' }}
                  >
                    <img
                      src={PORTFOLIO_INFO.avatar}
                      alt={PORTFOLIO_INFO.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </div>

                {/* CONTACT */}
                <div className="mb-4">
                  <h6 className="fw-bold text-uppercase font-mono-code text-primary small mb-3 border-bottom pb-1">
                    Contact
                  </h6>
                  <div className="d-flex flex-column gap-2 small text-body-secondary font-mono-code" style={{ fontSize: '0.82rem' }}>
                    <div className="d-flex align-items-center gap-2">
                      <Phone size={14} className="text-primary flex-shrink-0" />
                      <span>{PORTFOLIO_INFO.phone}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Mail size={14} className="text-primary flex-shrink-0" />
                      <a href={`mailto:${PORTFOLIO_INFO.email}`} className="text-decoration-none text-body">
                        {PORTFOLIO_INFO.email}
                      </a>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <MapPin size={14} className="text-primary flex-shrink-0" />
                      <span>{PORTFOLIO_INFO.location}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Globe size={14} className="text-primary flex-shrink-0" />
                      <span className="text-truncate" style={{ maxWidth: '190px' }}>
                        {PORTFOLIO_INFO.portfolioUrl.replace('https://', '')}
                      </span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Github size={14} className="text-primary flex-shrink-0" />
                      <a href={PORTFOLIO_INFO.github} target="_blank" rel="noreferrer" className="text-decoration-none text-body">
                        github.com/{PORTFOLIO_INFO.githubUsername}
                      </a>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Linkedin size={14} className="text-primary flex-shrink-0" />
                      <a href={PORTFOLIO_INFO.linkedin} target="_blank" rel="noreferrer" className="text-decoration-none text-body">
                        LinkedIn : Sylas EHOUAN
                      </a>
                    </div>
                  </div>
                </div>

                {/* LANGUES */}
                <div className="mb-4">
                  <h6 className="fw-bold text-uppercase font-mono-code text-primary small mb-3 border-bottom pb-1">
                    Langues
                  </h6>
                  <ul className="list-unstyled d-flex flex-column gap-1.5 small text-body-secondary mb-0">
                    <li className="d-flex justify-content-between">
                      <span className="fw-medium text-body">Français</span>
                      <span className="text-muted">Courant</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span className="fw-medium text-body">Anglais</span>
                      <span className="text-muted">Débutant</span>
                    </li>
                  </ul>
                </div>

                {/* COMPÉTENCES */}
                <div className="mb-4">
                  <h6 className="fw-bold text-uppercase font-mono-code text-primary small mb-3 border-bottom pb-1">
                    Compétences
                  </h6>
                  <div className="mb-2">
                    <div className="text-xs fw-bold text-uppercase text-muted mb-1">Développement</div>
                    <div className="d-flex flex-wrap gap-1">
                      {["HTML", "CSS", "JavaScript", "PHP", "React", "Laravel", "MySQL / SQL"].map((c, i) => (
                        <span key={i} className="badge bg-body-secondary text-body-secondary border rounded-pill font-mono-code text-xs">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs fw-bold text-uppercase text-muted mb-1">Outils</div>
                    <div className="d-flex flex-wrap gap-1">
                      {["Git", "GitHub", "VS Code"].map((c, i) => (
                        <span key={i} className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill font-mono-code text-xs">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CENTRES D'INTÉRÊT */}
                <div>
                  <h6 className="fw-bold text-uppercase font-mono-code text-primary small mb-2 border-bottom pb-1">
                    Centres d'intérêt
                  </h6>
                  <p className="small text-body-secondary mb-0">
                    Athlétisme, musique et jeux vidéo.
                  </p>
                </div>
              </div>

              {/* Right Column (Main content of the CV) */}
              <div className="col-12 col-md-8 ps-md-4">
                {/* Header Name & Title */}
                <div className="border-bottom pb-3 mb-4">
                  <h1 className="h3 fw-extrabold text-body tracking-tight mb-1 text-uppercase">
                    {PORTFOLIO_INFO.name}
                  </h1>
                  <h2 className="h6 fw-bold text-primary text-uppercase font-mono-code mb-0">
                    {PORTFOLIO_INFO.title}
                  </h2>
                </div>

                {/* PROFIL */}
                <div className="mb-4">
                  <h5 className="h6 fw-bold text-uppercase font-mono-code text-primary mb-2">
                    Profil
                  </h5>
                  <p className="small text-body-secondary mb-0" style={{ lineHeight: '1.7' }}>
                    {PORTFOLIO_INFO.bio}
                  </p>
                </div>

                {/* PROJETS WEB */}
                <div className="mb-4">
                  <h5 className="h6 fw-bold text-uppercase font-mono-code text-primary mb-3">
                    Projets Web
                  </h5>
                  <div className="d-flex flex-column gap-3">
                    <div>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="fw-bold text-body small">Layali Perles</span>
                        <span className="badge bg-body-tertiary text-muted font-mono-code text-xs">Projet Personnel</span>
                      </div>
                      <p className="small text-body-secondary mb-0">
                        Conception et réalisation d'un site de vente de bijoux.
                      </p>
                    </div>

                    <div>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="fw-bold text-body small">SchoolPay</span>
                        <span className="badge bg-body-tertiary text-muted font-mono-code text-xs">Projet Académique</span>
                      </div>
                      <p className="small text-body-secondary mb-0">
                        Projet académique en équipe : plateforme de paiement scolaire.
                      </p>
                    </div>

                    <div>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="fw-bold text-body small">SEGURO Hotel</span>
                        <span className="badge bg-body-tertiary text-muted font-mono-code text-xs">Projet Académique</span>
                      </div>
                      <p className="small text-body-secondary mb-0">
                        Projet académique : site de réservation hôtelière.
                      </p>
                    </div>
                  </div>
                </div>

                {/* EXPÉRIENCE PROFESSIONNELLE */}
                <div className="mb-4">
                  <h5 className="h6 fw-bold text-uppercase font-mono-code text-primary mb-3">
                    Expérience Professionnelle
                  </h5>
                  <div className="p-3 bg-body-tertiary rounded-3 border">
                    <div className="d-flex justify-content-between align-items-baseline mb-1">
                      <span className="fw-bold text-body small">Conseiller en vente - produits cosmétiques</span>
                      <span className="badge bg-body text-muted font-mono-code text-xs">2025 - 2026</span>
                    </div>
                    <div className="text-primary small mb-2 font-mono-code" style={{ fontSize: '0.78rem' }}>
                      Boutique de cosmétiques, Marché Dantokpa, Cotonou
                    </div>
                    <ul className="small text-body-secondary mb-0 ps-3">
                      <li>Conseil client et vente de produits cosmétiques.</li>
                      <li>Gestion des commandes.</li>
                      <li>Participation à la promotion sur les réseaux sociaux.</li>
                    </ul>
                  </div>
                </div>

                {/* FORMATION */}
                <div className="mb-4">
                  <h5 className="h6 fw-bold text-uppercase font-mono-code text-primary mb-3">
                    Formation
                  </h5>
                  <div className="d-flex flex-column gap-2">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <div className="fw-bold text-body small">Formation en développement web</div>
                        <div className="text-muted small">École Internationale du Graphisme du Bénin</div>
                      </div>
                      <span className="badge bg-success-subtle text-success border border-success-subtle font-mono-code text-xs">
                        En cours
                      </span>
                    </div>

                    <div className="d-flex justify-content-between align-items-start pt-2 border-top">
                      <div>
                        <div className="fw-bold text-body small">Baccalauréat</div>
                        <div className="text-muted small">Enseignement Secondaire</div>
                      </div>
                      <span className="font-mono-code text-muted small">
                        2024 - 2025
                      </span>
                    </div>
                  </div>
                </div>

                {/* CERTIFICAT */}
                <div>
                  <h5 className="h6 fw-bold text-uppercase font-mono-code text-primary mb-2">
                    Certificat
                  </h5>
                  <div className="p-2.5 bg-body-tertiary rounded-3 border d-flex align-items-center justify-content-between">
                    <div>
                      <div className="fw-bold text-body small">Digital Marketing 101 for Entrepreneurs and Freelancers</div>
                      <div className="text-muted small">Domestika</div>
                    </div>
                    <span className="font-mono-code text-muted small text-nowrap ms-2">Août 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="card-footer border-top p-3 px-4 bg-body-tertiary d-flex align-items-center justify-content-between">
            <button onClick={onClose} className="btn btn-outline-secondary rounded-pill px-4 btn-sm">
              Fermer
            </button>
            <button
              onClick={handleDownload}
              className="btn btn-primary rounded-pill px-4 btn-sm d-flex align-items-center gap-2 shadow-sm"
            >
              <Download size={15} />
              <span>Télécharger le CV (Texte / Formaté)</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
