import { motion } from 'motion/react';
import { PORTFOLIO_INFO, FORMATIONS, CERTIFICATS, SERVICES, WORK_METHOD, CORE_VALUES } from '../data/portfolioData';
import { PageId } from '../types/navigation';
import { 
  User, 
  GraduationCap, 
  Award, 
  MapPin, 
  Languages, 
  Heart, 
  Briefcase, 
  Code2, 
  Send, 
  FileText,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Smartphone,
  Palette,
  Server,
  Rocket
} from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenCVModal: () => void;
  onOpenCertificateModal: () => void;
}

export default function AboutSection({ onNavigate, onOpenCVModal, onOpenCertificateModal }: AboutSectionProps) {
  return (
    <section id="a-propos" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary-subtle text-primary fw-medium small mb-2">
            <User size={14} />
            <span>Profil &amp; Expertise</span>
          </div>
          <h2 className="display-6 fw-bold tracking-tight mb-2">
            À propos
          </h2>
          <p className="text-body-secondary lead fs-6">
            Découvrez mon parcours, mes compétences de développeur full-stack et ma méthodologie de travail.
          </p>
        </div>

        {/* Top Profile Summary */}
        <div className="row g-4 align-items-stretch mb-5">
          {/* Left Column: New Vertical Portrait Photo & Info */}
          <div className="col-12 col-lg-5">
            <div className="card glass-card rounded-5 border p-4 shadow-sm h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="position-relative mx-auto mb-4 text-center" style={{ maxWidth: '320px' }}>
                  <div 
                    className="rounded-5 overflow-hidden shadow-lg border border-2 border-primary mx-auto position-relative"
                    style={{ aspectRatio: '3/4', maxHeight: '420px' }}
                  >
                    <img
                      src={PORTFOLIO_INFO.avatar}
                      alt={PORTFOLIO_INFO.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                    <div 
                      className="position-absolute bottom-0 start-0 end-0 p-3"
                      style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.95), transparent)' }}
                    >
                      <div className="text-white fw-bold">{PORTFOLIO_INFO.name}</div>
                      <div className="font-mono-code text-white-50 small" style={{ fontSize: '0.78rem' }}>
                        {PORTFOLIO_INFO.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-3">
                  <h3 className="h5 fw-bold text-body mb-1">{PORTFOLIO_INFO.name}</h3>
                  <div className="text-primary font-mono-code fw-semibold small mb-2">
                    {PORTFOLIO_INFO.title}
                  </div>
                </div>

                {/* Key attributes */}
                <div className="p-3 bg-body-tertiary rounded-4 border d-flex flex-column gap-2 mb-3">
                  <div className="d-flex align-items-center justify-content-between small">
                    <span className="text-muted">Établissement :</span>
                    <strong className="text-body">EIG Bénin</strong>
                  </div>
                  <div className="d-flex align-items-center justify-content-between small">
                    <span className="text-muted">Expérience :</span>
                    <strong className="text-body">5 ans de pratique</strong>
                  </div>
                  <div className="d-flex align-items-center justify-content-between small">
                    <span className="text-muted">Disponibilité :</span>
                    <strong className="text-success">{PORTFOLIO_INFO.status}</strong>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="d-flex flex-column gap-2 pt-2">
                <button
                  onClick={onOpenCVModal}
                  className="btn btn-outline-primary rounded-pill py-2.5 fw-medium d-flex align-items-center justify-content-center gap-2"
                >
                  <FileText size={16} />
                  <span>Consulter mon CV complet</span>
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn btn-primary rounded-pill py-2.5 fw-semibold d-flex align-items-center justify-content-center gap-2 shadow-sm"
                >
                  <Send size={16} />
                  <span>Contacter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Soft skills & Method */}
          <div className="col-12 col-lg-7">
            <div className="d-flex flex-column gap-4">
              {/* Bio Card */}
              <div className="card glass-card p-4 rounded-4 border shadow-sm">
                <h4 className="h6 fw-bold text-body mb-3 d-flex align-items-center gap-2">
                  <Sparkles size={18} className="text-primary" />
                  <span>Mon Histoire &amp; Ma Vision</span>
                </h4>
                <p className="text-body-secondary small mb-3" style={{ lineHeight: '1.75' }}>
                  Curieux, motivé et animé par l'envie constante de progresser, je me suis formé au développement web en partant des bases (<strong>HTML, CSS, JavaScript</strong>) jusqu'à des technologies plus avancées comme <strong>PHP, Laravel et React</strong>. Cette formation initiale, complétée par des certifications en développement web et en cloud computing, m'a permis de construire une base technique solide.
                </p>
                <p className="text-body-secondary small mb-3" style={{ lineHeight: '1.75' }}>
                  Avec le temps, cette progression s'est traduite par une expérience concrète : j'ai accompagné plus de <strong>30 clients</strong> — du freelance à la PME — dans la réalisation de leurs projets digitaux, qu'il s'agisse de sites web ou d'applications mobiles.
                </p>
                <p className="text-body-secondary small mb-3" style={{ lineHeight: '1.75' }}>
                  Mon parcours dans la vente et le conseil client m'a appris à écouter attentivement les besoins et à comprendre les attentes avant de proposer une solution. J'applique aujourd'hui cette même approche au développement web : comprendre un besoin avant de concevoir une solution simple, utile et adaptée. Cette rigueur technique s'allie à un sens du design et à une écoute réelle du client, pour livrer des produits qui répondent à de vrais besoins.
                </p>
                <p className="text-body-secondary small mb-0" style={{ lineHeight: '1.75' }}>
                  Je travaille principalement avec <strong>React, TypeScript, Node.js, Laravel et Supabase</strong>, tout en restant capable de m'adapter rapidement à toute nouvelle technologie. Ma priorité : des applications rapides, accessibles et faciles à maintenir.
                </p>
              </div>

              {/* Work Method Steps */}
              <div className="card glass-card p-4 rounded-4 border shadow-sm">
                <h4 className="h6 fw-bold text-body mb-3 font-mono-code text-uppercase">
                  Ma Méthode de Travail
                </h4>
                <div className="row g-3">
                  {WORK_METHOD.map((m) => (
                    <div key={m.num} className="col-6 col-md-3">
                      <div className="p-3 bg-body-tertiary rounded-3 border h-100">
                        <span className="fs-4 fw-bolder text-primary font-mono-code">{m.num}</span>
                        <div className="fw-bold small text-body mt-1">{m.title}</div>
                        <p className="text-muted small mb-0 mt-1" style={{ fontSize: '0.75rem' }}>{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Values */}
              <div className="row g-3">
                {CORE_VALUES.map((cv, i) => (
                  <div key={i} className="col-12 col-md-4">
                    <div className="card glass-card p-3 rounded-4 border h-100 shadow-sm">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <CheckCircle2 size={16} className="text-success" />
                        <h5 className="small fw-bold text-body mb-0">{cv.title}</h5>
                      </div>
                      <p className="text-body-secondary small mb-0" style={{ fontSize: '0.78rem' }}>
                        {cv.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Formations & Certifications */}
              <div className="card glass-card p-4 rounded-4 border shadow-sm">
                <h4 className="h6 fw-bold text-body mb-3 d-flex align-items-center gap-2">
                  <GraduationCap size={18} className="text-primary" />
                  <span>Formations et certifications</span>
                </h4>
                <div className="d-flex flex-column gap-3">
                  {FORMATIONS.map((f) => (
                    <div key={f.id} className="p-3 bg-body-tertiary rounded-3 border">
                      <div className="d-flex justify-content-between align-items-baseline mb-1">
                        <div className="fw-bold text-body small">{f.degree}</div>
                        <span className="badge bg-primary-subtle text-primary border border-primary-subtle font-mono-code text-xs">
                          {f.period}
                        </span>
                      </div>
                      <div className="text-primary small font-mono-code mb-1">{f.school}</div>
                      <p className="text-body-secondary small mb-0">{f.description}</p>
                    </div>
                  ))}

                  {CERTIFICATS.map((c) => (
                    <div key={c.id} className="p-3 bg-body-tertiary rounded-3 border d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <div>
                        <div className="fw-bold text-body small">{c.title}</div>
                        <div className="text-success small font-mono-code">
                          {c.organization} · {c.date} (Instructeur : {c.instructor})
                        </div>
                        <p className="text-body-secondary small mb-0 mt-1">{c.description}</p>
                      </div>
                      <button
                        onClick={onOpenCertificateModal}
                        className="btn btn-outline-success btn-sm rounded-pill px-3 py-1 font-mono-code text-xs d-flex align-items-center gap-1.5"
                      >
                        <span>Voir PDF</span>
                        <ExternalLink size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Showcase Grid */}
        <div className="mt-5">
          <div className="text-center mb-4">
            <h3 className="h4 fw-bold text-body mb-2">Mes services</h3>
            <p className="text-muted small">Des prestations complètes adaptées aux exigences actuelles du web</p>
          </div>
          <div className="row g-4">
            {SERVICES.map((s, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div className="card glass-card rounded-4 border p-4 h-100 shadow-sm d-flex flex-column">
                  <div className="d-flex align-items-center gap-2.5 mb-3">
                    <div className="p-2.5 bg-primary bg-opacity-10 text-primary rounded-3">
                      {idx === 0 && <Code2 size={20} />}
                      {idx === 1 && <Smartphone size={20} />}
                      {idx === 2 && <Palette size={20} />}
                      {idx === 3 && <Server size={20} />}
                      {idx === 4 && <Rocket size={20} />}
                    </div>
                    <h4 className="h6 fw-bold text-body mb-0">{s.title}</h4>
                  </div>
                  <p className="text-body-secondary small mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>
                    {s.description}
                  </p>
                  <ul className="list-unstyled d-flex flex-column gap-1.5 pt-2 border-top mb-0 small text-body-secondary">
                    {s.features.map((feat, fIdx) => (
                      <li key={fIdx} className="d-flex align-items-center gap-2">
                        <span className="text-primary fw-bold">✓</span>
                        <span style={{ fontSize: '0.8rem' }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
