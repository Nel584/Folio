import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  Github, 
  Linkedin, 
  Instagram,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface ContactSectionProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
}

export default function ContactSection({ onCopyEmail, emailCopied }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'web',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Veuillez saisir votre nom.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Veuillez renseigner une adresse email valide.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 8) {
      errs.message = 'Veuillez rédiger un message d\'au moins 8 caractères.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({
        name: '',
        email: '',
        service: 'web',
        message: ''
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-5 position-relative">
      <div className="container py-4">
        {/* Refined Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-body-tertiary border text-body-secondary small fw-medium mb-3">
            <span className="position-relative d-flex" style={{ width: '8px', height: '8px' }}>
              <span className="position-absolute w-100 h-100 rounded-circle bg-success opacity-75 animate-ping" />
              <span className="position-relative w-100 h-100 rounded-circle bg-success" />
            </span>
            <span>Disponible pour de nouveaux projets</span>
          </div>

          <h2 className="display-6 fw-bold tracking-tight text-body mb-3">
            Contacter
          </h2>
          <p className="text-body-secondary lead fs-6 max-w-lg mx-auto">
            Un projet web, mobile ou e-commerce en tête ? Échangeons dès aujourd'hui pour transformer vos objectifs en réalité.
          </p>
        </div>

        {/* Refined Luxury-Tech Split Layout */}
        <div className="row g-4 align-items-stretch justify-content-center">
          {/* Left Column: Direct channels */}
          <div className="col-12 col-lg-5">
            <div className="card glass-card rounded-5 border p-4 p-md-5 h-100 d-flex flex-column justify-content-between shadow-sm">
              <div>
                <h3 className="h5 fw-bold text-body mb-1">Parlons de votre projet</h3>
                <p className="text-body-secondary small mb-4">
                  Je suis joignable directement par WhatsApp, appel ou email. Réponse garantie sous 24h.
                </p>

                {/* Direct Channel Items */}
                <div className="d-flex flex-column gap-3 mb-4">
                  {/* WhatsApp Direct */}
                  <a
                    href={PORTFOLIO_INFO.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-4 border bg-body-tertiary text-decoration-none d-flex align-items-center justify-content-between transition-all hover-border-success"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div 
                        className="rounded-circle bg-success text-white d-flex align-items-center justify-content-center"
                        style={{ width: '42px', height: '42px' }}
                      >
                        <MessageSquare size={18} />
                      </div>
                      <div>
                        <div className="text-body fw-semibold small">WhatsApp Direct</div>
                        <div className="font-mono-code text-muted" style={{ fontSize: '0.8rem' }}>
                          {PORTFOLIO_INFO.whatsapp}
                        </div>
                      </div>
                    </div>
                    <span className="btn btn-sm btn-outline-success rounded-pill px-3 py-1 font-mono-code text-xs">
                      Discuter
                    </span>
                  </a>

                  {/* Email with copy */}
                  <div className="p-3 rounded-4 border bg-body-tertiary d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <div 
                        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                        style={{ width: '42px', height: '42px' }}
                      >
                        <Mail size={18} />
                      </div>
                      <div>
                        <div className="text-body fw-semibold small">Email Professionnel</div>
                        <div className="font-mono-code text-muted" style={{ fontSize: '0.8rem' }}>
                          {PORTFOLIO_INFO.email}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={onCopyEmail}
                      className="btn btn-sm btn-outline-primary rounded-pill px-3 py-1 font-mono-code text-xs d-flex align-items-center gap-1"
                      title="Copier l'adresse email"
                    >
                      {emailCopied ? (
                        <>
                          <Check size={12} className="text-success" />
                          <span>Copié</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copier</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Phone Call */}
                  <a
                    href={`tel:${PORTFOLIO_INFO.phone}`}
                    className="p-3 rounded-4 border bg-body-tertiary text-decoration-none d-flex align-items-center justify-content-between"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div 
                        className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
                        style={{ width: '42px', height: '42px' }}
                      >
                        <Phone size={18} />
                      </div>
                      <div>
                        <div className="text-body fw-semibold small">Téléphone</div>
                        <div className="font-mono-code text-muted" style={{ fontSize: '0.8rem' }}>
                          {PORTFOLIO_INFO.phone}
                        </div>
                      </div>
                    </div>
                    <span className="text-muted small">Appeler</span>
                  </a>

                  {/* Location */}
                  <div className="p-3 rounded-4 border bg-body-tertiary d-flex align-items-center gap-3">
                    <div 
                      className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center"
                      style={{ width: '42px', height: '42px' }}
                    >
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-body fw-semibold small">Localisation</div>
                      <div className="text-muted small">{PORTFOLIO_INFO.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-3 border-top">
                <div className="text-muted small font-mono-code mb-2">Réseaux :</div>
                <div className="d-flex gap-2">
                  <a
                    href={PORTFOLIO_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-secondary btn-sm rounded-pill px-3 d-flex align-items-center gap-2"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PORTFOLIO_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary btn-sm rounded-pill px-3 d-flex align-items-center gap-2"
                  >
                    <Linkedin size={15} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={PORTFOLIO_INFO.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-danger btn-sm rounded-pill px-3 d-flex align-items-center gap-2"
                  >
                    <Instagram size={15} />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Elegant Contact Form */}
          <div className="col-12 col-lg-7">
            <div className="card glass-card rounded-5 border p-4 p-md-5 h-100 shadow-sm d-flex flex-column justify-content-center">
              <div className="mb-4">
                <h3 className="h5 fw-bold text-body mb-1">Envoyer un message</h3>
                <p className="text-body-secondary small mb-0">
                  Remplissez ce formulaire pour me décrire les grandes lignes de votre besoin.
                </p>
              </div>

              <AnimatePresence>
                {isSent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-5 rounded-4 bg-success bg-opacity-10 border border-success border-opacity-25 text-center my-auto"
                  >
                    <div className="d-inline-flex p-3 bg-success text-white rounded-circle mb-3">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="h5 fw-bold text-success mb-2">Message bien reçu !</h4>
                    <p className="text-body-secondary small mb-4">
                      Merci pour votre confiance. Je vous recontacterai très rapidement pour échanger sur les détails de votre projet.
                    </p>
                    <button
                      onClick={() => setIsSent(false)}
                      className="btn btn-outline-success btn-sm rounded-pill px-4"
                    >
                      Écrire un nouveau message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="d-flex flex-column gap-3.5">
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <label className="form-label small fw-semibold text-body mb-1">
                          Votre Nom
                        </label>
                        <input
                          type="text"
                          className={`form-control rounded-3 py-2 px-3 ${errors.name ? 'is-invalid' : ''}`}
                          placeholder="Ex: Jean Koffi"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        {errors.name && <div className="invalid-feedback small">{errors.name}</div>}
                      </div>

                      <div className="col-12 col-md-6">
                        <label className="form-label small fw-semibold text-body mb-1">
                          Adresse Email
                        </label>
                        <input
                          type="email"
                          className={`form-control rounded-3 py-2 px-3 ${errors.email ? 'is-invalid' : ''}`}
                          placeholder="jean@exemple.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <div className="invalid-feedback small">{errors.email}</div>}
                      </div>
                    </div>

                    <div>
                      <label className="form-label small fw-semibold text-body mb-1">
                        Type de service souhaité
                      </label>
                      <select
                        className="form-select rounded-3 py-2 px-3"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="web">Développement Web (React / Next.js / Laravel)</option>
                        <option value="ecommerce">Site E-commerce &amp; Paiement en ligne</option>
                        <option value="mobile">Application Mobile (React Native)</option>
                        <option value="design">UI/UX Design &amp; Prototype Figma</option>
                        <option value="autre">Autre collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label small fw-semibold text-body mb-1">
                        Détails de votre projet
                      </label>
                      <textarea
                        rows={4}
                        className={`form-control rounded-3 py-2 px-3 ${errors.message ? 'is-invalid' : ''}`}
                        placeholder="Présentez brièvement vos attentes, vos délais ou toute information utile..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                      {errors.message && <div className="invalid-feedback small">{errors.message}</div>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary rounded-pill py-2.5 px-4 fw-semibold d-flex align-items-center justify-content-center gap-2 shadow-sm mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="spinner-border spinner-border-sm" role="status" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
