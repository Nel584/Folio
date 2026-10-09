import { useState } from 'react';
import { motion } from 'motion/react';
import { CERTIFICATS, SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Sparkles, 
  Layers, 
  Server, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Code2 
} from 'lucide-react';

export default function SkillsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="competences" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary-subtle text-primary fw-medium small mb-2">
            <Sparkles size={14} />
            <span>Expertise &amp; Savoir-Faire</span>
          </div>
          <h2 className="display-6 fw-bold tracking-tight mb-2">
            Mes compétences
          </h2>
          <p className="text-body-secondary lead fs-6">
            Spécialisation pointue sur l'écosystème React/Next.js, l'orchestration des animations et le code propre et maintenable.
          </p>
        </div>

        {/* 4 Superpowers Feature Grid with Bootstrap cards */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card glass-card p-4 rounded-4 border h-100 shadow-sm">
              <div className="p-2.5 bg-primary bg-opacity-10 text-primary rounded-3 d-inline-flex mb-3" style={{ width: 'fit-content' }}>
                <Zap size={22} />
              </div>
              <h3 className="h6 fw-bold text-body mb-2">Next.js 15 App Router</h3>
              <p className="text-body-secondary small mb-0">
                Server Components, streaming SSR avec React Suspense, Server Actions pour les mutations directes et routage dynamique.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card glass-card p-4 rounded-4 border h-100 shadow-sm">
              <div className="p-2.5 bg-warning bg-opacity-10 text-warning rounded-3 d-inline-flex mb-3" style={{ width: 'fit-content' }}>
                <Sparkles size={22} />
              </div>
              <h3 className="h6 fw-bold text-body mb-2">Framer Motion Fluide</h3>
              <p className="text-body-secondary small mb-0">
                Physique de ressorts réaliste, animations de mise en page automatiques (layoutId), gestes tactiles et transitions de pages.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card glass-card p-4 rounded-4 border h-100 shadow-sm">
              <div className="p-2.5 bg-info bg-opacity-10 text-info rounded-3 d-inline-flex mb-3" style={{ width: 'fit-content' }}>
                <Layers size={22} />
              </div>
              <h3 className="h6 fw-bold text-body mb-2">Bootstrap 5 Responsive</h3>
              <p className="text-body-secondary small mb-0">
                Système de grille 12 colonnes, classes utilitaires robustes, flexbox responsive et composants modulaires accessibles.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card glass-card p-4 rounded-4 border h-100 shadow-sm">
              <div className="p-2.5 bg-success bg-opacity-10 text-success rounded-3 d-inline-flex mb-3" style={{ width: 'fit-content' }}>
                <ShieldCheck size={22} />
              </div>
              <h3 className="h6 fw-bold text-body mb-2">Performance &amp; Core Web Vitals</h3>
              <p className="text-body-secondary small mb-0">
                Score Lighthouse 99+, LCP inférieur à 800ms, zéro décalage de mise en page (CLS = 0) et SEO technique de pointe.
              </p>
            </div>
          </div>
        </div>

        <div className="card glass-card rounded-4 border shadow-sm p-4 mb-5">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
            <div>
              <div className="small text-uppercase fw-semibold text-primary mb-1 font-mono-code">Certifications</div>
              <h3 className="h5 fw-bold text-body mb-0">Formations et diplômes reconnus</h3>
            </div>
            <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-1 fw-semibold">
              {CERTIFICATS.length} certificat{CERTIFICATS.length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="row g-3">
            {CERTIFICATS.map((cert) => (
              <div key={cert.id} className="col-12 col-md-6">
                <div className="p-3 bg-body-tertiary border rounded-3 h-100">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-2">
                    <div>
                      <div className="fw-bold text-body small">{cert.title}</div>
                      <div className="text-primary small font-mono-code mt-1">{cert.organization}</div>
                    </div>
                    <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill small">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-body-secondary small mb-0" style={{ lineHeight: '1.6' }}>
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Skills Bar Section */}
        <div className="row g-4 align-items-stretch">
          {/* Category Tabs Left */}
          <div className="col-12 col-lg-4">
            <div className="card glass-card p-3 rounded-4 border shadow-sm h-100 d-flex flex-column gap-2">
              <span className="text-muted small fw-semibold px-2 pt-1 font-mono-code text-uppercase">
                Domaines d'intervention
              </span>
              {SKILL_CATEGORIES.map((cat, idx) => {
                const isSelected = activeCategoryIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategoryIndex(idx)}
                    className={`btn text-start p-3 rounded-3 d-flex align-items-center justify-content-between transition-all ${
                      isSelected
                        ? 'btn-primary shadow-sm text-white'
                        : 'btn-outline-secondary border-0 text-body hover-bg-light'
                    }`}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="rounded-2 p-1.5 bg-white bg-opacity-20">
                        {idx === 0 && <Layers size={18} />}
                        {idx === 1 && <Server size={18} />}
                        {idx === 2 && <Zap size={18} />}
                      </div>
                      <span className="fw-semibold">{cat.name}</span>
                    </div>
                    <span className="badge bg-white bg-opacity-25 rounded-pill px-2 py-1 small">
                      {cat.skills.length}
                    </span>
                  </button>
                );
              })}

              <div className="mt-auto p-3 bg-body-tertiary rounded-3 border">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <Code2 size={16} className="text-primary" />
                  <span className="small fw-bold">Code Standard &amp; Typage</span>
                </div>
                <p className="text-muted small mb-0">
                  TypeScript strict sans "any", ESLint, architectures scalables et tests unitaires.
                </p>
              </div>
            </div>
          </div>

          {/* Skill Progress Cards Right */}
          <div className="col-12 col-lg-8">
            <div className="card glass-card p-4 rounded-4 border shadow-sm h-100">
              <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
                <h3 className="h5 fw-bold mb-0 text-body">{activeCategory.name}</h3>
                <span className="text-muted small font-mono-code">Niveau d'expertise</span>
              </div>

              <div className="d-flex flex-column gap-4">
                {activeCategory.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="d-flex align-items-center justify-content-between mb-1.5">
                      <div className="d-flex align-items-center gap-2">
                        <span className="fw-bold text-body small">{skill.name}</span>
                        <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill font-mono-code" style={{ fontSize: '0.68rem' }}>
                          {skill.badge}
                        </span>
                      </div>
                      <span className="font-mono-code small text-primary fw-bold">
                        {skill.level}%
                      </span>
                    </div>

                    <p className="text-body-secondary small mb-2" style={{ fontSize: '0.8rem' }}>
                      {skill.description}
                    </p>

                    {/* Animated Progress Bar */}
                    <div 
                      className="progress rounded-pill bg-body-secondary" 
                      style={{ height: '7px' }}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                        className="progress-bar rounded-pill bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
