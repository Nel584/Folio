import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../data/portfolioData';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle, 
  Zap, 
  Layers, 
  BarChart3,
  Calendar,
  Sparkles
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3 p-md-4 z-50"
        style={{ zIndex: 1050 }}
      >
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ 
            backgroundColor: 'rgba(5, 8, 15, 0.82)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="card glass-card rounded-5 border position-relative overflow-hidden w-100 shadow-2xl z-1"
          style={{ 
            maxWidth: '860px', 
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="card-header border-bottom d-flex align-items-center justify-content-between p-4 bg-transparent">
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-primary text-white rounded-pill px-3 py-1 font-mono-code text-xs">
                {project.categoryLabel}
              </span>
              <h3 className="h5 fw-bold mb-0 text-body">{project.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="btn btn-outline-secondary border-0 rounded-circle p-2 d-flex align-items-center justify-content-center"
              aria-label="Fermer la modal"
              style={{ width: '38px', height: '38px' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body Scrollable */}
          <div className="card-body p-4 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 140px)' }}>
            {/* Project Image Banner */}
            <div className="rounded-4 overflow-hidden mb-4 border position-relative" style={{ maxHeight: '340px' }}>
              <img
                src={project.image}
                alt={project.title}
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            {/* Subtitle & Description */}
            <div className="mb-4">
              <h4 className="h6 text-primary fw-bold mb-2">{project.subtitle}</h4>
              <p className="lead text-body-secondary fs-6 mb-3" style={{ lineHeight: '1.7' }}>
                {project.longDescription}
              </p>
            </div>

            {/* Stats row with Bootstrap Grid */}
            <div className="row g-3 mb-4">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="col-4">
                  <div className="p-3 rounded-4 bg-body-tertiary border text-center">
                    <div className="fs-4 fw-bolder text-primary font-mono-code">{stat.value}</div>
                    <div className="text-muted small fw-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights & Achievements */}
            <div className="mb-4">
              <h5 className="h6 fw-bold text-body mb-3 d-flex align-items-center gap-2">
                <CheckCircle size={18} className="text-success" />
                <span>Points Clés &amp; Réalisations Techniques</span>
              </h5>
              <div className="d-flex flex-column gap-2">
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="d-flex align-items-start gap-2 text-body-secondary small">
                    <span className="text-primary fw-bold">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Details */}
            <div className="mb-4">
              <h5 className="h6 fw-bold text-body mb-3 d-flex align-items-center gap-2">
                <Layers size={18} className="text-primary" />
                <span>Architecture &amp; Choix Techniques</span>
              </h5>
              <div className="d-flex flex-column gap-2">
                {project.architecture.map((arch, idx) => (
                  <div key={idx} className="d-flex align-items-start gap-2 text-body-secondary small">
                    <span className="text-info fw-bold">▸</span>
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mb-2">
              <div className="text-muted small fw-semibold mb-2">Technologies utilisées :</div>
              <div className="d-flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="badge bg-secondary-subtle text-secondary-emphasis rounded-pill px-3 py-1.5 font-mono-code text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer with Actions */}
          <div className="card-footer border-top p-4 bg-transparent d-flex align-items-center justify-content-between gap-3">
            <button
              onClick={onClose}
              className="btn btn-outline-secondary rounded-pill px-4"
            >
              Fermer
            </button>
            <div className="d-flex align-items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary rounded-pill px-3 d-flex align-items-center gap-2"
              >
                <Github size={16} />
                <span>Code Source</span>
              </a>
              {project.demoUrl && project.demoUrl !== '#' && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary rounded-pill px-4 d-flex align-items-center gap-2 shadow-sm"
                >
                  <span>Voir le projet</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
