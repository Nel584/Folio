import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, Project } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  Zap, 
  Maximize2 
} from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'realise' | 'en_cours' | 'a_venir'>('all');

  const filterOptions = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'realise', label: 'Projets réalisés' },
    { id: 'en_cours', label: 'En préparation' },
    { id: 'a_venir', label: 'À venir' },
  ] as const;

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : activeFilter === 'realise'
    ? PROJECTS.filter(p => p.category === 'realise')
    : activeFilter === 'en_cours'
    ? PROJECTS.filter(p => p.id === 'cosmetique-ecommerce' || p.id === 'tricotage-ecommerce' || p.id === 'logistik-platform' || p.category === 'en_cours' || p.category === 'a_venir')
    : activeFilter === 'a_venir'
    ? PROJECTS.filter(p => p.id === 'cosmetique-ecommerce' || p.id === 'tricotage-ecommerce' || p.id === 'logistik-platform' || p.category === 'en_cours' || p.category === 'a_venir')
    : PROJECTS;

  return (
    <section id="projets" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5 gap-3">
          <div>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary-subtle text-primary fw-medium small mb-2">
              <Sparkles size={14} />
              <span>Portfolio &amp; Réalisations</span>
            </div>
            <h2 className="display-6 fw-bold tracking-tight mb-2">
              Mes Projets Web &amp; Applications
            </h2>
            <p className="text-body-secondary lead fs-6 mb-0 max-w-xl">
              Une sélection de réalisations complètes — sites e-commerce, plateformes académiques et applications sur mesure.
            </p>
          </div>

          {/* Filter Pills with Framer Motion layoutId */}
          <div className="d-flex flex-wrap gap-1 p-1 bg-body-tertiary rounded-pill border">
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`btn btn-sm rounded-pill px-3 py-1.5 fw-medium position-relative transition-colors border-0 ${
                    isActive ? 'text-white' : 'text-body-secondary hover-text-primary'
                  }`}
                  style={{ zIndex: 1 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectPill"
                      className="position-absolute top-0 start-0 w-100 h-100 bg-primary rounded-pill shadow-sm"
                      style={{ zIndex: -1 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Bootstrap Grid */}
        <motion.div layout className="row g-4">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="col-12 col-lg-4 col-md-6"
              >
                <div 
                  className="card glass-card rounded-5 border h-100 overflow-hidden shadow-sm d-flex flex-column cursor-pointer group"
                  onClick={() => onSelectProject(project)}
                >
                  {/* Thumbnail Banner with zoom effect */}
                  <div className="position-relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-100 h-100 object-fit-cover transition-transform"
                      style={{ transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />

                    {/* Gradient Overlay */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-3"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <span className={`badge ${
                          project.category === 'realise' ? 'bg-primary' :
                          activeFilter === 'en_cours' ? 'bg-warning text-dark' :
                          activeFilter === 'a_venir' ? 'bg-info text-dark' :
                          project.category === 'en_cours' ? 'bg-warning text-dark' : 'bg-secondary'
                        } rounded-pill px-3 py-1 font-mono-code text-xs`}>
                          {activeFilter === 'en_cours' && (project.id === 'tricotage-ecommerce' || project.id === 'logistik-platform')
                            ? 'En préparation'
                            : activeFilter === 'a_venir' && project.id === 'cosmetique-ecommerce'
                            ? 'À venir'
                            : project.categoryLabel}
                        </span>
                        <div 
                          className="bg-white bg-opacity-20 text-white rounded-circle p-2 d-flex align-items-center justify-content-center backdrop-blur"
                          style={{ width: '32px', height: '32px' }}
                        >
                          <Maximize2 size={14} />
                        </div>
                      </div>

                      <div className="d-flex gap-1.5 flex-wrap">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="bg-dark bg-opacity-75 text-white border border-light border-opacity-25 rounded-3 px-2 py-0.5 font-mono-code"
                            style={{ fontSize: '0.7rem' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="mb-2">
                      <h3 className="h5 fw-bold text-body mb-1">{project.title}</h3>
                      <p className="text-primary small fw-medium mb-2">{project.subtitle}</p>
                      <p className="text-body-secondary small mb-3" style={{ lineHeight: '1.6' }}>
                        {project.description}
                      </p>
                    </div>

                    {/* Footer Buttons */}
                    <div className="d-flex align-items-center justify-content-between pt-3 border-top mt-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                        className="btn btn-outline-primary btn-sm rounded-pill px-3 fw-medium d-flex align-items-center gap-1.5"
                      >
                        <span>Détails</span>
                        <ArrowUpRight size={14} />
                      </button>

                      <div className="d-flex align-items-center gap-2">
                        {project.demoUrl && project.demoUrl !== '#' && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="btn btn-primary btn-sm rounded-pill px-3 fw-medium d-flex align-items-center gap-1.5 shadow-sm"
                          >
                            <span>Voir le projet</span>
                            <ExternalLink size={13} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="btn btn-outline-secondary btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                            title="GitHub"
                            style={{ width: '32px', height: '32px' }}
                          >
                            <Github size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
