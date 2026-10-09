import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary-subtle text-primary fw-medium small mb-2">
            <Quote size={14} />
            <span>Recommandations</span>
          </div>
          <h2 className="display-6 fw-bold tracking-tight mb-2">
            Témoignages
          </h2>
          <p className="text-body-secondary lead fs-6">
            Des retours authentiques de CTOs, directeurs artistiques et chefs de produit.
          </p>
        </div>

        {/* Testimonials Bootstrap Grid */}
        <div className="row g-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="col-12 col-md-4">
              <div className="card glass-card h-100 p-4 rounded-4 border shadow-sm d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex gap-1 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="badge bg-body-tertiary text-muted font-mono-code text-xs">
                    {t.projectRelation}
                  </span>
                </div>

                <p className="text-body-secondary small flex-grow-1 fst-italic mb-4" style={{ lineHeight: '1.6' }}>
                  "{t.text}"
                </p>

                <div className="d-flex align-items-center gap-3 pt-3 border-top mt-auto">
                  <div 
                    className="rounded-circle overflow-hidden shadow-sm flex-shrink-0"
                    style={{ width: '44px', height: '44px' }}
                  >
                    {t.avatar.startsWith('http') ? (
                      <img src={t.avatar} alt={t.name} className="w-100 h-100 object-fit-cover" />
                    ) : (
                      <div className="w-100 h-100 bg-primary text-white d-flex align-items-center justify-content-center fw-bold">
                        {t.avatar}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="h6 fw-bold text-body mb-0" style={{ fontSize: '0.9rem' }}>{t.name}</h3>
                    <div className="text-muted small" style={{ fontSize: '0.78rem' }}>
                      {t.role} · <strong className="text-body-secondary">{t.company}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
