import './index.css'

function App() {
  return (
    <>
      {/* NAVEGACIÓN */}
      <header>
        <div className="container">
          <nav>
            <div className="logo">DEV<span>STRIKER</span></div>
            <ul className="nav-links">
              <li><a href="#stats">Stats</a></li>
              <li><a href="#projects">Game Log</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#contact" className="btn">Hire Me</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h4>Full Stack Developer</h4>
            <h1>DOMINATING THE <br /><span>REACT</span> LEAGUE</h1>
            <p>Construyendo interfaces de alto rendimiento con la precisión de un atleta de élite. Especialista en componentes modulares y estado global.</p>
            <a href="#projects" className="btn">Ver Jugadas</a>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section id="stats" className="stats-section">
        <div className="container">
          <h2 className="section-title">Player Profile</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">40+</div>
              <div className="stat-label">Proyectos Finalizados</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">99%</div>
              <div className="stat-label">Win Rate (Client Sat)</div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '40px 0', textAlign: 'center', color: '#a0a0a0' }}>
        <p>&copy; 2026 DevStriker - Dominando el Código</p>
      </footer>
    </>
  )
}

export default App