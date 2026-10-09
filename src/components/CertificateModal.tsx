import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Award, CheckCircle2, ExternalLink } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({ isOpen, onClose }: CertificateModalProps) {
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
    window.print();
  };

  return (
    <AnimatePresence>
      <div 
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3 p-md-4 z-50"
        style={{ zIndex: 1070 }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ 
            backgroundColor: 'rgba(5, 8, 15, 0.88)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)'
          }}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="card glass-card rounded-5 border position-relative overflow-hidden w-100 shadow-2xl z-1"
          style={{ maxWidth: '880px', maxHeight: '92vh', display: 'flex', flexDirection: 'column' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="card-header border-bottom d-flex align-items-center justify-content-between p-3.5 px-4 bg-body-tertiary">
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-danger text-white rounded-pill px-3 py-1 font-mono-code text-xs">
                Certificat Officiel
              </span>
              <h3 className="h6 fw-bold mb-0 text-body">Domestika · Digital Marketing 101</h3>
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

          {/* Body: High Fidelity Replica of Domestika Certificate */}
          <div className="card-body p-3 p-md-4 overflow-y-auto bg-body-tertiary">
            <div 
              className="bg-white text-dark p-4 p-md-5 rounded-4 shadow position-relative mx-auto"
              style={{
                maxWidth: '780px',
                border: '14px solid #b91c1c',
                outline: '2px dashed #dc2626',
                outlineOffset: '-7px',
                fontFamily: 'serif'
              }}
            >
              {/* Header dates and brand */}
              <div className="d-flex justify-content-between align-items-center mb-4 text-uppercase font-sans" style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
                <span className="fw-semibold">AUGUST 1, 2026</span>
                <span className="fw-semibold">Domestika. Create. Share. Learn.</span>
              </div>

              {/* DOMESTIKA logo */}
              <div className="mb-4">
                <span 
                  className="fw-black text-danger tracking-wider" 
                  style={{ 
                    fontSize: '2rem', 
                    fontWeight: 900, 
                    fontFamily: 'system-ui, sans-serif',
                    letterSpacing: '1px'
                  }}
                >
                  DOMĒSTIKA
                </span>
              </div>

              {/* Certificate confirmation statement */}
              <div className="my-5" style={{ lineHeight: '1.9' }}>
                <p className="fs-5 mb-0" style={{ color: '#1e293b' }}>
                  — This certificate confirms that <strong className="text-danger fw-bold" style={{ fontSize: '1.25rem' }}>ehouanfernand</strong> has taken the Domestika online course <em className="fw-bold text-dark" style={{ fontStyle: 'italic', fontSize: '1.25rem' }}>Digital Marketing 101 for Entrepreneurs and Freelancers</em> taught by <strong className="text-dark fw-bold">Gabriel Perelman</strong>.
                </p>
              </div>

              {/* Bottom section with stamp and signature */}
              <div className="pt-4 mt-5 border-top d-flex justify-content-between align-items-end flex-wrap gap-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
                {/* Left: Organization & ID */}
                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                  <div className="fw-bold text-dark">Domestika Inc.</div>
                  <div>2001 Addison St.</div>
                  <div>Berkeley, CA 94704</div>
                  <div>USA</div>
                  <div className="mt-2 font-mono-code text-muted" style={{ fontSize: '0.68rem' }}>
                    ID: 67f824777ea5ad7f5e0683c92d27ff5e
                  </div>
                </div>

                {/* Center: Stamp Seal */}
                <div 
                  className="rounded-circle border border-2 border-danger d-flex flex-column align-items-center justify-content-center p-2 text-center text-danger"
                  style={{ width: '68px', height: '68px', opacity: 0.85, fontSize: '0.55rem', fontWeight: 700 }}
                >
                  <span>CERTIFIED</span>
                  <span style={{ fontSize: '0.7rem' }}>★</span>
                  <span>DOMESTIKA</span>
                </div>

                {/* Right: Signature */}
                <div className="text-end">
                  <div 
                    className="fst-italic text-dark fw-bold mb-1" 
                    style={{ 
                      fontFamily: 'cursive, "Brush Script MT", Georgia, serif', 
                      fontSize: '1.5rem',
                      letterSpacing: '1px'
                    }}
                  >
                    Gabriel Perelman
                  </div>
                  <div className="border-top pt-1 text-muted" style={{ fontSize: '0.75rem', minWidth: '150px' }}>
                    Gabriel Perelman
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="card-footer border-top p-3 px-4 bg-body-tertiary d-flex align-items-center justify-content-between">
            <button onClick={onClose} className="btn btn-outline-secondary rounded-pill px-4 btn-sm">
              Fermer
            </button>
            <button
              onClick={handleDownload}
              className="btn btn-primary rounded-pill px-4 btn-sm d-flex align-items-center gap-2 shadow-sm"
            >
              <Download size={15} />
              <span>Imprimer / Sauvegarder PDF</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
