import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { PageId, NAV_ITEMS } from '../types/navigation';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Sparkles, 
  FileText, 
  Send,
  Code2
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  onOpenCVModal?: () => void;
}

export default function Navbar({ 
  currentPage, 
  onNavigate, 
  theme, 
  toggleTheme, 
  onOpenCVModal 
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="position-sticky top-0 start-0 w-100 px-3 py-2 z-50">
      <nav 
        className={`navbar navbar-expand-lg glass-navbar rounded-4 shadow-sm mx-auto transition-all border ${
          isScrolled ? 'py-2 px-3' : 'py-2.5 px-4'
        }`}
        style={{ maxWidth: '1240px' }}
      >
        <div className="container-fluid p-0 d-flex align-items-center justify-content-between">
          {/* Logo brand */}
          <button 
            onClick={() => handleNavClick('accueil')}
            className="navbar-brand d-flex align-items-center gap-2 text-decoration-none border-0 bg-transparent text-start p-0"
          >
            <div 
              className="d-flex align-items-center justify-content-center rounded-3 bg-primary text-white shadow-sm"
              style={{ width: '38px', height: '38px' }}
            >
              <Code2 size={20} />
            </div>
            <div className="d-flex flex-column">
              <span className="fs-6 fw-bold tracking-tight text-body mb-0">
                {PORTFOLIO_INFO.name}
              </span>
              <span className="font-mono-code text-muted" style={{ fontSize: '0.62rem', lineHeight: 1.15, maxWidth: '190px', whiteSpace: 'normal' }}>
                École Internationale du Graphisme du Bénin · Développeur Web
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="d-none d-lg-flex align-items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`btn btn-link nav-link px-3 py-2 rounded-3 text-sm fw-medium transition-colors position-relative text-decoration-none border-0 ${
                    isActive ? 'text-primary fw-semibold' : 'text-body-secondary hover-text-primary'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="position-absolute bottom-0 start-50 translate-middle-x bg-primary rounded-pill"
                      style={{ height: '3px', width: '22px' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action buttons */}
          <div className="d-flex align-items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="btn btn-outline-secondary border-0 rounded-circle p-2 d-flex align-items-center justify-content-center shadow-none"
              title={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
              aria-label="Basculer le thème"
              style={{ width: '38px', height: '38px' }}
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-warning" />
              ) : (
                <Moon size={18} className="text-primary" />
              )}
            </button>

            {/* CV Download / View Button */}
            <button
              onClick={onOpenCVModal}
              className="btn btn-outline-primary btn-sm d-none d-sm-inline-flex align-items-center gap-2 rounded-pill px-3 py-1.5 fw-medium"
            >
              <FileText size={15} />
              <span>CV</span>
            </button>

            {/* Direct Contact Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="btn btn-primary btn-sm d-inline-flex align-items-center gap-2 rounded-pill px-3 py-1.5 fw-medium shadow-sm"
            >
              <Send size={14} />
              <span>Contacter</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-outline-secondary border-0 d-lg-none p-2 rounded-3"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="d-lg-none w-100 overflow-hidden pt-3 border-top mt-3"
            >
              <div className="d-flex flex-column gap-2 pb-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`btn text-start px-3 py-2 rounded-3 text-decoration-none fw-medium d-flex align-items-center justify-content-between border-0 ${
                      currentPage === item.id
                        ? 'bg-primary text-white'
                        : 'text-body hover-bg-light'
                    }`}
                  >
                    <span>{item.label}</span>
                    {currentPage === item.id && <Sparkles size={16} />}
                  </button>
                ))}
                <div className="d-flex gap-2 pt-2 border-top mt-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenCVModal) onOpenCVModal();
                    }}
                    className="btn btn-outline-primary btn-sm w-50 d-flex align-items-center justify-content-center gap-2 py-2 rounded-pill"
                  >
                    <FileText size={16} />
                    <span>Voir le CV</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="btn btn-primary btn-sm w-50 d-flex align-items-center justify-content-center gap-2 py-2 rounded-pill"
                  >
                    <Send size={16} />
                    <span>Contacter</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
