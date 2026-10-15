import { Link } from 'react-router-dom';

const features = [
  {
    emoji: '🐕',
    name: 'Find Your Companion',
    description: 'Explore adorable pets and find a friend who fits your lifestyle.',
    link: '/pets',
    linkText: 'Meet the pets →',
  },
  {
    emoji: '🏡',
    name: 'Give Them a Home',
    description: 'Take the first step towards giving a pet a safe and loving home.',
    link: '/adoption',
    linkText: 'Start adoption →',
  },
  {
    emoji: '🩺',
    name: 'Care for Your Pet',
    description: 'Explore helpful services designed to support your pet’s wellbeing.',
    link: '/services',
    linkText: 'Explore services →',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">A little care changes everything</p>

          <h1>
            Find a friend.
            <br />
            Give love a home.
          </h1>

          <p className="muted">
            PawCare brings pet adoption and pet-care services together
            in one welcoming place. Every little paw deserves love.
          </p>

          <div className="hero-actions">
            <Link className="button" to="/pets">
              Meet the pets
            </Link>

            <Link className="button secondary" to="/services">
              Explore services
            </Link>
          </div>
        </div>

        <div className="hero-art" aria-label="Dog and cat">
          🐶 🐱
        </div>
      </section>

      <section className="features-section">
        <div className="section-intro">
          <p className="eyebrow">Everything in one place</p>
          <h2 className="section-heading">A simpler way to care</h2>
          <p className="muted">
            From finding your new best friend to caring for them,
            PawCare is here to help.
          </p>
        </div>

        <div className="grid">
          {features.map((feature) => (
            <article className="card feature-card" key={feature.name}>
              <div className="pet-emoji" aria-hidden="true">
                {feature.emoji}
              </div>

              <h3>{feature.name}</h3>

              <p className="muted">{feature.description}</p>

              <Link to={feature.link}>{feature.linkText}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="adoption-cta">
        <div>
          <p className="eyebrow">A new beginning awaits</p>
          <h2>Someone is waiting for a loving home.</h2>
          <p>
            Your next best friend could be just one click away.
            Explore the pets and take the first step.
          </p>
        </div>

        <Link className="button cta-button" to="/pets">
          Find your new friend →
        </Link>
      </section>
    </>
  );
}