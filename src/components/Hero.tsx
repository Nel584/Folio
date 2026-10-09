import { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { PORTFOLIO_INFO, PROJECTS } from '../data/portfolioData';
import { PageId } from '../types/navigation';
import { 
  ArrowRight, 
  Sparkles, 
  Copy, 
  Check, 
  Zap, 
  Layers, 
  Send, 
  ShieldCheck, 
  Github, 
  Linkedin, 
  Instagram,
  ChevronRight,
  User,
  GraduationCap,
  MessageSquare
} from 'lucide-react';

interface HeroProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
  onNavigate: (page: PageId) => void;
}

export default function Hero({ onCopyEmail, emailCopied, onNavigate }: HeroProps) {
  const [isHoveringAvatar, setIsHoveringAvatar] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const floatingVariantsReverse: Variants = {
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const featuredProject = PROJECTS[0];

  return (
    <section 
      id="hero" 
      className="position-relative min-vh-100 d-flex flex-column justify-content-center py-5 overflow-hidden"
    >
      {/* Authentic Hero Background Image with Dark Cinematic Overlay (from portfolio) */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <img 
          src={PORTFOLIO_INFO.heroImage} 
          alt="" 
          className="w-100 h-100 object-fit-cover" 
          style={{ opacity: 0.16, filter: 'brightness(0.6)' }}
        />
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(11, 15, 25, 0.94) 0%, rgba(15, 23, 42, 0.88) 50%, rgba(20, 10, 15, 0.94) 100%)' 
          }} 
        />
      </div>

      {/* Background ambient lighting */}
      <div 
        className="ambient-glow bg-primary" 
        style={{ width: '450px', height: '450px', top: '8%', left: '5%' }} 
      />
      <div 
        className="ambient-glow bg-danger" 
        style={{ width: '380px', height: '380px', bottom: '12%', right: '5%' }} 
      />

      <div className="container position-relative z-1 pt-4 mt-3">
        <motion.div 
          className="row align-items-center g-5 mb-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Headline and Pitch */}
          <div className="col-12 col-lg-7">
            {/* Status indicator badge */}
            <motion.div variants={itemVariants} className="d-inline-flex mb-3">
              <div className="d-flex align-items-center gap-2 px-3 py-1.5 rounded-pill border bg-body-tertiary shadow-sm text-sm">
                <span className="position-relative d-flex" style={{ width: '9px', height: '9px' }}>
                  <span className="position-absolute w-100 h-100 rounded-circle bg-success opacity-75 animate-ping" />
                  <span className="position-relative w-100 h-100 rounded-circle bg-success" />
                </span>
                <span className="fw-medium text-body-secondary small">
                  {PORTFOLIO_INFO.status} · Cotonou, Bénin
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="display-4 fw-extrabold tracking-tight lh-sm mb-3"
            >
              Je transforme vos idées en{' '}
              <span className="text-gradient d-inline-block">applications web</span>{' '}
              modernes, rapides et{' '}
              <span className="text-gradient-warm d-inline-block">élégantes</span>.
            </motion.h1>

            {/* Subtitle / Pitch */}
            <motion.p 
              variants={itemVariants} 
              className="lead text-body-secondary mb-4 col-xl-11"
              style={{ fontSize: '1.15rem', lineHeight: '1.75' }}
            >
              Développeur Full-Stack &amp; Designer Web. Je transforme vos idées en applications web modernes, rapides et élégantes.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div variants={itemVariants} className="d-flex flex-wrap align-items-center gap-3 mb-4">
              <button 
                onClick={() => onNavigate('projets')}
                className="btn btn-primary btn-lg rounded-pill px-4 py-2.5 d-inline-flex align-items-center gap-2 shadow-sm fw-semibold border-0"
              >
                <span>Explorer mes projets</span>
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => onNavigate('contact')}
                className="btn btn-outline-primary btn-lg rounded-pill px-4 py-2.5 d-inline-flex align-items-center gap-2 fw-medium"
              >
                <Send size={17} />
                <span>Contacter</span>
              </button>

              <button 
                onClick={() => onNavigate('a-propos')}
                className="btn btn-outline-secondary btn-lg rounded-pill px-4 py-2.5 d-inline-flex align-items-center gap-2 fw-medium"
              >
                <User size={18} />
                <span>À propos</span>
              </button>

              <a
                href={PORTFOLIO_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-success btn-lg rounded-pill px-3 py-2.5 d-inline-flex align-items-center gap-2 text-decoration-none fw-medium"
              >
                <MessageSquare size={17} />
                <span className="small">WhatsApp</span>
              </a>
            </motion.div>

            {/* Quick contact line with email copy */}
            <motion.div variants={itemVariants} className="d-flex flex-wrap align-items-center gap-3 text-muted small pt-1">
              <button
                onClick={onCopyEmail}
                className="btn btn-link p-0 text-decoration-none text-body-secondary d-inline-flex align-items-center gap-1.5"
                title="Copier l'email"
              >
                {emailCopied ? (
                  <>
                    <Check size={15} className="text-success" />
                    <span className="text-success small fw-medium font-mono-code">Email copié !</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} />
                    <span className="font-mono-code small">{PORTFOLIO_INFO.email}</span>
                  </>
                )}
              </button>
              <span className="text-muted">·</span>
              <a 
                href={`tel:${PORTFOLIO_INFO.phone}`} 
                className="text-body-secondary hover-text-primary text-decoration-none font-mono-code small"
              >
                {PORTFOLIO_INFO.phone}
              </a>
              <span className="text-muted">·</span>
              <a 
                href={PORTFOLIO_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-body-secondary hover-text-primary text-decoration-none d-flex align-items-center gap-1 small"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <span className="text-muted">·</span>
              <a 
                href={PORTFOLIO_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="text-body-secondary hover-text-primary text-decoration-none d-flex align-items-center gap-1 small"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            {/* Bootstrap Metric Stats Grid */}
            <motion.div variants={itemVariants} className="row g-3 mt-4 pt-2">
              {PORTFOLIO_INFO.stats.map((stat, idx) => (
                <div key={idx} className="col-6 col-sm-3">
                  <div className="card glass-card h-100 p-3 border-0 rounded-4 shadow-sm">
                    <span className="fs-3 fw-bolder text-primary mb-1 font-mono-code">
                      {stat.value}
                    </span>
                    <span className="text-muted small fw-medium lh-sm">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Visual de développement */}
          <div className="col-12 col-lg-5">
            <motion.div 
              variants={itemVariants}
              className="position-relative mx-auto"
              style={{ maxWidth: '420px' }}
              onMouseEnter={() => setIsHoveringAvatar(true)}
              onMouseLeave={() => setIsHoveringAvatar(false)}
            >
              <div 
                className="position-absolute w-100 h-100 rounded-5"
                style={{
                  background: 'linear-gradient(145deg, rgba(59, 130, 246, 0.28) 0%, rgba(239, 68, 68, 0.24) 100%)',
                  filter: 'blur(32px)',
                  transform: isHoveringAvatar ? 'scale(1.05)' : 'scale(0.97)',
                  transition: 'transform 0.5s ease',
                  zIndex: 0
                }}
              />

              <div 
                className="card glass-card rounded-5 overflow-hidden border p-2 position-relative z-1 shadow-2xl"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  background: 'rgba(15, 23, 42, 0.65)'
                }}
              >
                <div 
                  className="position-relative rounded-4 overflow-hidden" 
                  style={{ 
                    aspectRatio: '4/3', 
                    maxHeight: '500px'
                  }}
                >
                  <img
                    src={PORTFOLIO_INFO.heroImage}
                    alt="Table de travail de développement web"
                    className="w-100 h-100 object-fit-cover transition-transform"
                    style={{
                      transform: isHoveringAvatar ? 'scale(1.04)' : 'scale(1)',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                  
                  <div 
                    className="position-absolute bottom-0 start-0 end-0 p-4"
                    style={{
                      background: 'linear-gradient(to top, rgba(11, 15, 25, 0.96) 0%, rgba(11, 15, 25, 0.4) 65%, transparent 100%)',
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between text-white gap-3">
                      <div>
                        <div className="h5 fw-extrabold mb-0">{PORTFOLIO_INFO.name}</div>
                        <div className="font-mono-code text-white-50 small mt-0.5" style={{ fontSize: '0.78rem' }}>
                          Développement web &amp; interfaces modernes
                        </div>
                      </div>
                      <span className="badge bg-primary text-white rounded-pill px-3 py-1 font-mono-code text-xs">
                        Bénin
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="position-absolute card glass-card p-2 px-3 rounded-pill shadow-lg border d-flex align-items-center gap-2"
                style={{ top: '-14px', left: '-20px', zIndex: 2 }}
              >
                <div className="bg-primary text-white rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                  <Zap size={16} />
                </div>
                <div>
                  <div className="fw-bold text-body" style={{ fontSize: '0.8rem' }}>React &amp; Next.js</div>
                  <div className="text-muted" style={{ fontSize: '0.68rem' }}>Expertise Frontend</div>
                </div>
              </motion.div>

              <motion.div
                variants={floatingVariantsReverse}
                animate="animate"
                className="position-absolute card glass-card p-2 px-3 rounded-pill shadow-lg border d-flex align-items-center gap-2"
                style={{ top: '45%', right: '-25px', zIndex: 2 }}
              >
                <div className="bg-danger text-white rounded-circle p-1 d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                  <Layers size={16} />
                </div>
                <div>
                  <div className="fw-bold text-body" style={{ fontSize: '0.8rem' }}>PHP &amp; Laravel</div>
                  <div className="text-muted" style={{ fontSize: '0.68rem' }}>Backend &amp; SQL</div>
                </div>
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="position-absolute card glass-card p-2 px-3 rounded-4 shadow-lg border d-flex align-items-center gap-2"
                style={{ bottom: '-18px', left: '10px', zIndex: 2 }}
              >
                <ShieldCheck size={22} className="text-success" />
                <div>
                  <div className="fw-bold text-body" style={{ fontSize: '0.78rem' }}>50+ Projets Livrés</div>
                  <div className="text-success font-mono-code fw-semibold" style={{ fontSize: '0.68rem' }}>Qualité Garantie</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Featured Project Snapshot: SEGURO Hotel */}
        <div className="card glass-card rounded-5 border p-4 shadow-sm mt-2">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-5">
              <div className="rounded-4 overflow-hidden position-relative" style={{ aspectRatio: '16/10' }}>
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-100 h-100 object-fit-cover"
                />
                <span className="position-absolute top-0 start-0 m-3 badge bg-primary rounded-pill px-3 py-1 font-mono-code text-xs">
                  Projet Phare
                </span>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="d-flex align-items-center justify-content-between mb-1">
                <span className="text-primary small fw-semibold font-mono-code">{featuredProject.categoryLabel}</span>
                <span className="badge bg-body-tertiary text-muted font-mono-code text-xs">React · Node.js</span>
              </div>
              <h3 className="h4 fw-bold text-body mb-2">{featuredProject.title}</h3>
              <p className="text-body-secondary small mb-3">
                {featuredProject.description}
              </p>
              <div className="d-flex flex-wrap gap-1.5 mb-4">
                {featuredProject.tags.map((tag, idx) => (
                  <span key={idx} className="badge bg-body-secondary text-body-secondary border rounded-pill px-2.5 py-1 font-mono-code text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="d-flex align-items-center gap-3">
                <button
                  onClick={() => onNavigate('projets')}
                  className="btn btn-primary rounded-pill px-4 fw-medium d-flex align-items-center gap-2 shadow-sm"
                >
                  <span>Voir tous les projets</span>
                  <ChevronRight size={16} />
                </button>
                <a
                  href={featuredProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary rounded-pill px-3 fw-medium d-flex align-items-center gap-1.5"
                >
                  <span>Voir le projet</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
