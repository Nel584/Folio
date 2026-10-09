import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Sliders, 
  RotateCcw, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Server, 
  Zap, 
  ArrowRight,
  Code
} from 'lucide-react';

export default function NextLab() {
  const [activeTab, setActiveTab] = useState<'motion' | 'serverActions' | 'appRouter'>('motion');

  // Framer Motion Playground States
  const [stiffness, setStiffness] = useState(260);
  const [damping, setDamping] = useState(20);
  const [mass, setMass] = useState(1);
  const [triggerKey, setTriggerKey] = useState(0);

  // Server Action Simulation States
  const [itemInput, setItemInput] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Pré-rendu Server Components', status: 'done', latency: '0ms' },
    { id: 2, text: 'Revalidation du cache avec revalidateTag()', status: 'done', latency: '12ms' },
    { id: 3, text: 'Streaming HTML avec React Suspense', status: 'done', latency: '24ms' },
  ]);
  const [isPending, setIsPending] = useState(false);
  const [optimisticCount, setOptimisticCount] = useState(tasks.length);

  const handleSimulateServerAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemInput.trim()) return;

    const newText = itemInput.trim();
    setItemInput('');
    setIsPending(true);
    setOptimisticCount(prev => prev + 1);

    // Simulate Server Action call latency
    setTimeout(() => {
      setTasks(prev => [
        ...prev,
        { id: Date.now(), text: newText, status: 'done', latency: '38ms' }
      ]);
      setIsPending(false);
    }, 450);
  };

  return (
    <section id="lab" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary-subtle text-primary fw-medium small mb-2">
            <Sparkles size={15} />
            <span>Démonstration Interactive</span>
          </div>
          <h2 className="display-6 fw-bold tracking-tight mb-2">
            Laboratoire Next.js &amp; Framer Motion
          </h2>
          <p className="text-body-secondary lead fs-6">
            Explorez en direct le comportement des Server Actions, les optimisations de l'App Router et la physique des ressorts Framer Motion.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="d-flex justify-content-center mb-4">
          <div className="card glass-card p-1.5 rounded-pill flex-row border shadow-sm">
            <button
              onClick={() => setActiveTab('motion')}
              className={`btn btn-sm rounded-pill px-3 py-2 fw-medium d-flex align-items-center gap-2 transition-all ${
                activeTab === 'motion'
                  ? 'btn-primary shadow-sm'
                  : 'btn-link text-body-secondary text-decoration-none'
              }`}
            >
              <Sliders size={16} />
              <span>Physique Framer Motion</span>
            </button>

            <button
              onClick={() => setActiveTab('serverActions')}
              className={`btn btn-sm rounded-pill px-3 py-2 fw-medium d-flex align-items-center gap-2 transition-all ${
                activeTab === 'serverActions'
                  ? 'btn-primary shadow-sm'
                  : 'btn-link text-body-secondary text-decoration-none'
              }`}
            >
              <Server size={16} />
              <span>Next.js Server Actions</span>
            </button>

            <button
              onClick={() => setActiveTab('appRouter')}
              className={`btn btn-sm rounded-pill px-3 py-2 fw-medium d-flex align-items-center gap-2 transition-all ${
                activeTab === 'appRouter'
                  ? 'btn-primary shadow-sm'
                  : 'btn-link text-body-secondary text-decoration-none'
              }`}
            >
              <Layers size={16} />
              <span>App Router vs Pages</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Framer Motion Physics Sandbox */}
        {activeTab === 'motion' && (
          <div className="row g-4 align-items-stretch">
            {/* Controls Column */}
            <div className="col-12 col-lg-5">
              <div className="card glass-card h-100 p-4 border rounded-4 shadow-sm">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h3 className="h5 fw-bold mb-0 d-flex align-items-center gap-2">
                    <Sliders size={18} className="text-primary" />
                    <span>Paramètres du Ressort</span>
                  </h3>
                  <button
                    onClick={() => {
                      setStiffness(260);
                      setDamping(20);
                      setMass(1);
                      setTriggerKey(prev => prev + 1);
                    }}
                    className="btn btn-outline-secondary btn-sm rounded-pill py-1 px-2.5 d-flex align-items-center gap-1"
                    title="Réinitialiser les paramètres"
                  >
                    <RotateCcw size={14} />
                    <span className="small">Réinitialiser</span>
                  </button>
                </div>

                <p className="text-muted small mb-4">
                  Ajustez les forces en temps réel. Glissez ensuite la carte de droite ou cliquez pour relancer l'animation.
                </p>

                {/* Slider: Stiffness */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <label className="form-label small fw-semibold mb-0">Rigidité (Stiffness)</label>
                    <span className="font-mono-code small text-primary fw-bold">{stiffness}</span>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    min="50"
                    max="600"
                    step="10"
                    value={stiffness}
                    onChange={(e) => {
                      setStiffness(Number(e.target.value));
                      setTriggerKey(k => k + 1);
                    }}
                  />
                  <div className="text-muted" style={{ fontSize: '0.72rem' }}>Plus c'est élevé, plus le retour élastique est nerveux.</div>
                </div>

                {/* Slider: Damping */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <label className="form-label small fw-semibold mb-0">Amortissement (Damping)</label>
                    <span className="font-mono-code small text-primary fw-bold">{damping}</span>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    min="5"
                    max="50"
                    step="1"
                    value={damping}
                    onChange={(e) => {
                      setDamping(Number(e.target.value));
                      setTriggerKey(k => k + 1);
                    }}
                  />
                  <div className="text-muted" style={{ fontSize: '0.72rem' }}>Contrôle la friction et la durée des oscillations.</div>
                </div>

                {/* Slider: Mass */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <label className="form-label small fw-semibold mb-0">Masse (Mass)</label>
                    <span className="font-mono-code small text-primary fw-bold">{mass}</span>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    min="0.2"
                    max="3"
                    step="0.1"
                    value={mass}
                    onChange={(e) => {
                      setMass(Number(e.target.value));
                      setTriggerKey(k => k + 1);
                    }}
                  />
                  <div className="text-muted" style={{ fontSize: '0.72rem' }}>Détermine l'inertie et le poids perçu du composant.</div>
                </div>

                {/* Live generated code */}
                <div className="mt-auto bg-dark p-3 rounded-3 border border-secondary border-opacity-25 text-white">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="font-mono-code text-muted small" style={{ fontSize: '0.75rem' }}>// Code Motion généré</span>
                    <Code size={14} className="text-primary" />
                  </div>
                  <pre className="font-mono-code m-0 text-info small" style={{ fontSize: '0.78rem' }}>
{`transition: {
  type: "spring",
  stiffness: ${stiffness},
  damping: ${damping},
  mass: ${mass}
}`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Interactive Target Canvas Column */}
            <div className="col-12 col-lg-7">
              <div 
                className="card glass-card h-100 p-4 border rounded-4 d-flex flex-column align-items-center justify-content-center text-center position-relative overflow-hidden shadow-sm"
                style={{ minHeight: '380px' }}
              >
                <div className="position-absolute top-0 start-0 p-3 text-muted small font-mono-code">
                  Zone de test interactive · Glissez la carte
                </div>

                {/* Draggable and Springing Motion Box */}
                <motion.div
                  key={triggerKey}
                  drag
                  dragConstraints={{ left: -140, right: 140, top: -70, bottom: 70 }}
                  dragElastic={0.2}
                  whileDrag={{ scale: 1.08, cursor: 'grabbing' }}
                  whileHover={{ scale: 1.03 }}
                  initial={{ scale: 0.8, y: -40, opacity: 0 }}
                  animate={{ scale: 1, y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: stiffness,
                    damping: damping,
                    mass: mass
                  }}
                  className="card p-4 rounded-4 shadow-lg border-primary border-opacity-50 text-start cursor-grab"
                  style={{
                    maxWidth: '320px',
                    background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))',
                    cursor: 'grab'
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge bg-primary rounded-pill px-2.5 py-1 text-xs">
                      Framer Motion
                    </span>
                    <span className="font-mono-code text-muted small">60 FPS</span>
                  </div>
                  <h4 className="h6 text-white fw-bold mb-2">Composant Dynamique</h4>
                  <p className="text-secondary small mb-3">
                    Cette carte est animée par le moteur physique de Framer Motion. Glissez-la avec la souris ou sur mobile !
                  </p>
                  <div className="d-flex gap-2">
                    <button
                      onClick={() => setTriggerKey(k => k + 1)}
                      className="btn btn-primary btn-sm rounded-pill w-100 fw-medium"
                    >
                      Rejouer le rebond
                    </button>
                  </div>
                </motion.div>

                <div className="mt-4 text-muted small">
                  Astuce : Déplacez la carte vers les bords pour observer le rappel élastique naturel.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Next.js Server Actions Simulation */}
        {activeTab === 'serverActions' && (
          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-6">
              <div className="card glass-card h-100 p-4 border rounded-4 shadow-sm">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="p-2 bg-primary rounded-3 text-white">
                    <Server size={18} />
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-0">Mutation côté Serveur (Server Action)</h3>
                    <div className="text-muted small">Exécution RPC native sans endpoint API intermédiaire</div>
                  </div>
                </div>

                <p className="text-body-secondary small mb-4">
                  Dans Next.js 15, les <strong>Server Actions</strong> s'exécutent directement sur le serveur avec sécurité des cookies, revalidation atomique du cache (<code>revalidatePath</code>) et feedback optimiste immédiat.
                </p>

                {/* Form to submit a simulated server action */}
                <form onSubmit={handleSimulateServerAction} className="mb-4">
                  <label className="form-label fw-semibold small">Ajouter une opération serveur</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control rounded-start-pill border-secondary border-opacity-25"
                      placeholder="Ex: Synchronisation base Postgres..."
                      value={itemInput}
                      onChange={(e) => setItemInput(e.target.value)}
                    />
                    <button
                      type="submit"
                      disabled={isPending || !itemInput.trim()}
                      className="btn btn-primary rounded-end-pill px-4 fw-medium d-flex align-items-center gap-2"
                    >
                      {isPending ? (
                        <>
                          <div className="spinner-border spinner-border-sm" role="status" />
                          <span>Exécution...</span>
                        </>
                      ) : (
                        <>
                          <Zap size={16} />
                          <span>Exécuter</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="p-3 bg-body-tertiary rounded-3 border">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="small fw-bold">État Optimiste (useOptimistic)</span>
                    <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill">
                      {optimisticCount} éléments en file
                    </span>
                  </div>
                  <div className="text-muted small">
                    L'interface se met à jour immédiatement avant même la réponse du serveur pour une latence perçue nulle.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="card glass-card h-100 p-4 border rounded-4 shadow-sm">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h4 className="h6 fw-bold mb-0 text-body">Journal d'exécution Serveur</h4>
                  <span className="badge bg-dark font-mono-code text-white">Edge Runtime</span>
                </div>

                <div className="d-flex flex-column gap-2 overflow-auto" style={{ maxHeight: '280px' }}>
                  {tasks.map((task) => (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-3 rounded-3 border bg-body d-flex align-items-center justify-content-between"
                    >
                      <div className="d-flex align-items-center gap-2">
                        <CheckCircle2 size={16} className="text-success flex-shrink-0" />
                        <span className="small fw-medium text-body">{task.text}</span>
                      </div>
                      <span className="badge bg-body-secondary text-body-secondary font-mono-code small">
                        {task.latency}
                      </span>
                    </motion.div>
                  ))}
                  {isPending && (
                    <div className="p-3 rounded-3 border border-primary border-opacity-50 bg-primary-subtle d-flex align-items-center gap-2">
                      <div className="spinner-border spinner-border-sm text-primary" role="status" />
                      <span className="small fw-semibold text-primary">Mutation serveur en cours d'écriture...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: App Router vs Pages Router */}
        {activeTab === 'appRouter' && (
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="card glass-card p-4 rounded-4 border border-primary border-opacity-50 h-100 shadow-sm position-relative overflow-hidden">
                <div className="position-absolute top-0 end-0 p-3">
                  <span className="badge bg-primary text-white rounded-pill px-3 py-1">Recommandé</span>
                </div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Zap size={22} className="text-primary" />
                  <h3 className="h5 fw-bold mb-0">Next.js App Router (15+)</h3>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 text-body-secondary small mb-4">
                  <li className="d-flex align-items-start gap-2">
                    <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Server Components par défaut :</strong> Zéro JavaScript envoyé au client pour les éléments statiques.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Streaming SSR :</strong> L'interface s'affiche instantanément grâce à <code>Suspense</code> et les squelettes de chargement.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Server Actions :</strong> Mutations de données directes avec validation de formulaire type-safe.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span><strong>Layouts imbriqués :</strong> Maintien de l'état sans rechargement complet de la hiérarchie.</span>
                  </li>
                </ul>

                <div className="mt-auto p-3 bg-body-tertiary rounded-3 border">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="font-mono-code small">Bundle JS Client</span>
                    <span className="font-mono-code text-success fw-bold">-65% par rapport à Pages</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="card glass-card p-4 rounded-4 border h-100 shadow-sm text-body-secondary">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Layers size={22} className="text-muted" />
                  <h3 className="h5 fw-bold mb-0 text-body">Ancien Pages Router (Legacy)</h3>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 small mb-4">
                  <li className="d-flex align-items-start gap-2 text-muted">
                    <span className="text-warning">⚠️</span>
                    <span>Nécessite l'hydratation de la totalité de la page par le client.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2 text-muted">
                    <span className="text-warning">⚠️</span>
                    <span>Gestion des données via <code>getServerSideProps</code> et <code>getStaticProps</code> distinctes.</span>
                  </li>
                  <li className="d-flex align-items-start gap-2 text-muted">
                    <span className="text-warning">⚠️</span>
                    <span>Rechargement de l'arbre de composants complet lors des transitions de route.</span>
                  </li>
                </ul>

                <div className="mt-auto p-3 bg-body-tertiary rounded-3 border">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="font-mono-code small">Recommandation</span>
                    <span className="text-primary fw-medium small">Migration vers App Router</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
