import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import PetList from './pages/Pets/PetList.jsx';
import ServiceList from './pages/Services/ServiceList.jsx';
import AdoptionForm from './pages/Adoption/AdoptionForm.jsx';

export default function App() {
  return (
    <div className="shell">
      <header className="navbar">
        <Link className="brand" to="/">
          🐾 PawCare
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pets">Adopt a Pet</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/adoption">Adoption Form</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<PetList />} />
          <Route path="/services" element={<ServiceList />} />
          <Route path="/adoption" element={<AdoptionForm />} />
          <Route
            path="*"
            element={
              <section className="panel">
                <h1>Page not found</h1>
                <Link to="/">Go Home</Link>
              </section>
            }
          />
        </Routes>
      </main>

      <footer className="footer">
        <p>🐾 PawCare — Helping pets find caring homes.</p>
        <p>Made with love for our furry friends ❤️</p>
      </footer>
    </div>
  );
}