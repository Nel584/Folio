import { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary-subtle text-primary fw-medium small mb-2">
            <Sparkles size={14} />
            <span>Parcours Professionnel</span>
          </div>
          <h2 className="display-6 fw-bold tracking-tight mb-2">
            Expériences &amp; Réalisations
          </h2>
          <p className="text-body-secondary lead fs-6">
            Une trajectoire tournée vers l'excellence technique et l'impact direct sur les produits.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="position-relative d-flex flex-column gap-4">
              {EXPERIENCES.map((exp, idx) => {
                const isExpanded = expandedId === exp.id;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="card glass-card rounded-4 border p-4 shadow-sm"
                  >
                    <div 
                      className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 cursor-pointer"
                      onClick={() => toggleExpand(exp.id)}
                    >
                      <div className="d-flex align-items-start gap-3">
                        <div 
                          className="p-3 bg-primary bg-opacity-10 text-primary rounded-4 d-flex align-items-center justify-content-center"
                          style={{ width: '48px', height: '48px' }}
                        >
                          <Briefcase size={22} />
                        </div>
                        <div>
                          <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                            <h3 className="h6 fw-bold text-body mb-0">{exp.role}</h3>
                            <span className="badge bg-primary text-white rounded-pill font-mono-code text-xs">
                              {exp.type}
                            </span>
                          </div>
                          <div className="text-primary fw-medium small">
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      <div className="d-flex align-items-center justify-content-between justify-content-md-end gap-3 text-muted small font-mono-code">
                        <div className="d-flex align-items-center gap-1.5">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="d-none d-sm-flex align-items-center gap-1.5">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                        <button 
                          className="btn btn-outline-secondary btn-sm rounded-circle p-1 d-flex align-items-center justify-content-center"
                          style={{ width: '30px', height: '30px' }}
                          aria-label="Détails"
                        >
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      </div>
                    </div>

                    {/* Expandable details */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 mt-3 border-top"
                      >
                        <p className="text-body-secondary small mb-3">
                          {exp.description}
                        </p>

                        <div className="mb-3">
                          <div className="text-body small fw-bold mb-2">Impact &amp; Succès majeurs :</div>
                          <div className="d-flex flex-column gap-2">
                            {exp.accomplishments.map((acc, aIdx) => (
                              <div key={aIdx} className="d-flex align-items-start gap-2 text-body-secondary small">
                                <CheckCircle size={15} className="text-success mt-0.5 flex-shrink-0" />
                                <span>{acc}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="d-flex flex-wrap gap-1.5 pt-2">
                          {exp.skills.map((sk, sIdx) => (
                            <span 
                              key={sIdx} 
                              className="badge bg-body-tertiary text-body-secondary border rounded-pill px-2.5 py-1 font-mono-code text-xs"
                            >
                              {sk}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
