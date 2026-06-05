import { Link, useNavigate } from 'react-router-dom';

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '60px',
    background: '#FFFFFF',
    borderBottom: '1px solid #E8ECF0',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
  },
  inner: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#1B3A5C',
    letterSpacing: '-0.5px',
  },
  logoAccent: {
    color: '#D97220',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  navLink: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333333',
    cursor: 'pointer',
    padding: '4px 0',
    borderBottom: '2px solid transparent',
    transition: 'color 0.15s',
  },
  listBtn: {
    border: '1.5px solid #1B3A5C',
    borderRadius: '6px',
    padding: '7px 16px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#1B3A5C',
    background: 'transparent',
    cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s',
  },
};

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        <div style={styles.logo}>
          KRAT<span style={styles.logoAccent}>EX</span>
        </div>
        <div style={styles.links}>
          <Link to="/search" style={styles.navLink}>Search</Link>
          <Link to="/post-requirement" style={styles.navLink}>Post Requirement</Link>
          <Link to="/search" style={styles.navLink}>My Account</Link>
          <button
            style={styles.listBtn}
            onClick={() => navigate('/post-requirement')}
            onMouseEnter={e => { e.target.style.background = '#1B3A5C'; e.target.style.color = '#FFF'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#1B3A5C'; }}
          >
            List Your Containers
          </button>
        </div>
      </div>
    </nav>
  );
}
