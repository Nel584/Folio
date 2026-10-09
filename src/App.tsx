import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PORTFOLIO_INFO, Project } from './data/portfolioData';
import { PageId } from './types/navigation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CVModal from './components/CVModal';
import CertificateModal from './components/CertificateModal';
import { Check, ArrowUp } from 'lucide-react';

const VALID_PAGES: PageId[] = [
  'accueil', 
  'a-propos',
  'projets', 
  'competences', 
  'experiences', 
  'temoignages', 
  'contact'
];

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    return VALID_PAGES.includes(hash) ? hash : 'accueil';
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync theme with HTML data-bs-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    if (theme === 'dark') {
      document.body.className = 'bg-dark text-light';
    } else {
      document.body.className = 'bg-light text-dark';
    }
  }, [theme]);

  // Sync URL hash for multi-page routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Track scroll for floating back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email);
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 3000);
  };

  return (
    <div className="position-relative min-vh-100 d-flex flex-column selection-bg-primary">
      {/* Top Navbar with multi-page navigation */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenCVModal={() => setIsCVModalOpen(true)} 
      />

      {/* Main Multi-Page Content with Framer Motion Page Transitions */}
      <main className="flex-grow-1 position-relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4"
          >
            {/* Page 1: Accueil */}
            {currentPage === 'accueil' && (
              <Hero 
                onCopyEmail={handleCopyEmail} 
                emailCopied={emailCopied} 
                onNavigate={handleNavigate}
              />
            )}

            {/* Page 2: À Propos */}
            {currentPage === 'a-propos' && (
              <div className="pt-4">
                <AboutSection 
                  onNavigate={handleNavigate}
                  onOpenCVModal={() => setIsCVModalOpen(true)}
                  onOpenCertificateModal={() => setIsCertificateModalOpen(true)}
                />
              </div>
            )}

            {/* Page 3: Projets */}
            {currentPage === 'projets' && (
              <div className="pt-4">
                <ProjectsSection 
                  onSelectProject={(project) => setSelectedProject(project)} 
                />
              </div>
            )}

            {/* Page 4: Mes compétences */}
            {currentPage === 'competences' && (
              <div className="pt-4">
                <SkillsSection />
              </div>
            )}

            {/* Page 5: Expériences */}
            {currentPage === 'experiences' && (
              <div className="pt-4">
                <ExperienceTimeline />
              </div>
            )}

            {/* Page 6: Témoignages */}
            {currentPage === 'temoignages' && (
              <div className="pt-4">
                <Testimonials />
              </div>
            )}

            {/* Page 7: Contacter */}
            {currentPage === 'contact' && (
              <div className="pt-4">
                <ContactSection 
                  onCopyEmail={handleCopyEmail} 
                  emailCopied={emailCopied} 
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer with page links and back to top */}
      <Footer onNavigate={handleNavigate} />

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* CV Modal (Sylas Ehouan Official CV) */}
      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />

      {/* Certificate Modal (Domestika Digital Marketing 101) */}
      <CertificateModal 
        isOpen={isCertificateModalOpen} 
        onClose={() => setIsCertificateModalOpen(false)} 
      />

      {/* Global Copy Toast Alert */}
      <AnimatePresence>
        {emailCopied && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="position-fixed bottom-0 start-50 translate-middle-x mb-4 z-50"
            style={{ zIndex: 1100 }}
          >
            <div className="card glass-card px-4 py-2.5 rounded-pill shadow-lg border border-success border-opacity-50 d-flex flex-row align-items-center gap-2 bg-body">
              <div className="rounded-circle bg-success text-white p-1 d-flex align-items-center justify-content-center">
                <Check size={14} />
              </div>
              <span className="small fw-semibold text-body">
                Email copié : {PORTFOLIO_INFO.email}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn btn-primary rounded-circle shadow-lg position-fixed d-flex align-items-center justify-content-center p-3"
            style={{ bottom: '24px', right: '24px', zIndex: 900, width: '46px', height: '46px' }}
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
