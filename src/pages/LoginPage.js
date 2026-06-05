import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const s = {
  page: {
    minHeight: '100vh',
    background: '#F4F6F8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },
  card: {
    background: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
    padding: '48px 40px 36px',
    width: '100%',
    maxWidth: '440px',
  },
  logo: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#1B3A5C',
    textAlign: 'center',
    letterSpacing: '-0.5px',
  },
  logoAccent: { color: '#D97220' },
  subtitle: {
    textAlign: 'center',
    color: '#888888',
    fontSize: '14px',
    marginTop: '6px',
    marginBottom: '32px',
  },
  label: {
    display: 'block',
    fontSize: '13px',
    fontWeight: '600',
    color: '#333333',
    marginBottom: '6px',
  },
  input: {
    width: '100%',
    padding: '11px 14px',
    border: '1.5px solid #E0E4EA',
    borderRadius: '7px',
    fontSize: '14px',
    background: '#F4F6F8',
    color: '#333333',
    outline: 'none',
    transition: 'border-color 0.15s',
    marginBottom: '18px',
  },
  submitBtn: {
    width: '100%',
    padding: '13px',
    background: '#D97220',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '7px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '4px',
    transition: 'background 0.15s',
  },
  registerText: {
    textAlign: 'center',
    fontSize: '13px',
    color: '#888888',
    marginTop: '14px',
  },
  statsStrip: {
    display: 'flex',
    justifyContent: 'space-around',
    borderTop: '1px solid #E8ECF0',
    marginTop: '32px',
    paddingTop: '24px',
  },
  statItem: { textAlign: 'center' },
  statNum: { fontSize: '18px', fontWeight: '800', color: '#D97220', display: 'block' },
  statLabel: { fontSize: '12px', color: '#888888', marginTop: '2px' },
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [focused, setFocused] = useState('');

  const inputStyle = (name) => ({
    ...s.input,
    borderColor: focused === name ? '#1B3A5C' : '#E0E4EA',
  });

  return (
    <div style={s.page}>
      <div style={s.card}>
        <div style={s.logo}>KRAT<span style={s.logoAccent}>EX</span></div>
        <p style={s.subtitle}>India's Empty Container Exchange</p>

        <form onSubmit={(e) => { e.preventDefault(); navigate('/search'); }}>
          <label style={s.label}>Email Address</label>
          <input
            type="email"
            placeholder="you@company.com"
            style={inputStyle('email')}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused('')}
          />

          <label style={s.label}>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            style={inputStyle('password')}
            onFocus={() => setFocused('password')}
            onBlur={() => setFocused('')}
          />

          <button
            type="submit"
            style={s.submitBtn}
            onMouseEnter={e => e.target.style.background = '#C4631A'}
            onMouseLeave={e => e.target.style.background = '#D97220'}
          >
            Sign In to KRATEX
          </button>
        </form>

        <p style={s.registerText}>
          Don't have an account?&nbsp;
          <span style={{ color: '#D97220', fontWeight: '600', cursor: 'pointer' }}>
            Register as Buyer or Supplier
          </span>
        </p>

        <div style={s.statsStrip}>
          <div style={s.statItem}>
            <span style={s.statNum}>2,400+</span>
            <span style={s.statLabel}>Listings</span>
          </div>
          <div style={s.statItem}>
            <span style={s.statNum}>15</span>
            <span style={s.statLabel}>Major Ports</span>
          </div>
          <div style={s.statItem}>
            <span style={s.statNum}>800+</span>
            <span style={s.statLabel}>Verified Suppliers</span>
          </div>
        </div>
      </div>
    </div>
  );
}
