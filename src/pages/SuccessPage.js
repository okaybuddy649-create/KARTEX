import { useNavigate } from 'react-router-dom';

const STEPS = [
  {
    num: 1,
    title: 'Supplier Reviews Your Inquiry',
    desc: 'They check your quantity, dates, and requirements within 2–4 hours.',
  },
  {
    num: 2,
    title: 'Supplier Contacts You Directly',
    desc: 'Expect a WhatsApp message or phone call from their team.',
  },
  {
    num: 3,
    title: 'Finalise the Deal',
    desc: 'Confirm container availability, pricing, and pickup logistics.',
  },
];

const s = {
  page: {
    paddingTop: '84px',
    minHeight: '100vh',
    background: '#FFFFFF',
  },
  inner: {
    maxWidth: '680px',
    margin: '0 auto',
    padding: '48px 24px 32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  checkCircle: {
    width: '80px',
    height: '80px',
    background: '#D97220',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    flexShrink: 0,
  },
  checkMark: {
    fontSize: '40px',
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 1,
    userSelect: 'none',
  },
  heading: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#1B3A5C',
    textAlign: 'center',
    marginBottom: '14px',
  },
  subtext: {
    fontSize: '15px',
    color: '#555',
    textAlign: 'center',
    lineHeight: '1.6',
    maxWidth: '480px',
    marginBottom: '40px',
  },
  nextSection: {
    width: '100%',
    marginBottom: '32px',
  },
  nextTitle: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#1B3A5C',
    marginBottom: '16px',
    textAlign: 'left',
  },
  stepsRow: {
    display: 'flex',
    gap: '14px',
    flexWrap: 'wrap',
  },
  stepCard: {
    flex: '1 1 180px',
    background: '#FFFFFF',
    border: '1px solid #E0E4EA',
    borderRadius: '10px',
    padding: '18px 16px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  stepNumCircle: {
    width: '32px',
    height: '32px',
    background: '#D97220',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF',
    fontWeight: '800',
    fontSize: '14px',
    flexShrink: 0,
  },
  stepContent: {},
  stepTitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1B3A5C',
    marginBottom: '5px',
    lineHeight: '1.3',
  },
  stepDesc: {
    fontSize: '13px',
    color: '#888888',
    lineHeight: '1.5',
  },
  buttonsWrap: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  primaryBtn: {
    width: '100%',
    padding: '14px',
    background: '#D97220',
    color: '#FFF',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'background 0.15s',
  },
  outlineBtn: {
    width: '100%',
    padding: '14px',
    background: 'transparent',
    color: '#1B3A5C',
    border: '2px solid #1B3A5C',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s',
  },
};

export default function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div style={s.page}>
      <div style={s.inner}>
        <div style={s.checkCircle}>
          <span style={s.checkMark}>✓</span>
        </div>

        <h1 style={s.heading}>Inquiry Sent Successfully!</h1>
        <p style={s.subtext}>
          Your message has been sent to Mundra Container Depot Pvt Ltd. They will contact you within 24 hours via WhatsApp or phone.
        </p>

        <div style={s.nextSection}>
          <div style={s.nextTitle}>What Happens Next</div>
          <div style={s.stepsRow}>
            {STEPS.map(step => (
              <div key={step.num} style={s.stepCard}>
                <div style={s.stepNumCircle}>{step.num}</div>
                <div style={s.stepContent}>
                  <div style={s.stepTitle}>{step.title}</div>
                  <div style={s.stepDesc}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={s.buttonsWrap}>
          <button
            style={s.primaryBtn}
            onClick={() => navigate('/search')}
            onMouseEnter={e => e.target.style.background = '#C4631A'}
            onMouseLeave={e => e.target.style.background = '#D97220'}
          >
            Search More Containers
          </button>
          <button
            style={s.outlineBtn}
            onClick={() => navigate('/post-requirement')}
            onMouseEnter={e => { e.target.style.background = '#1B3A5C'; e.target.style.color = '#FFF'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#1B3A5C'; }}
          >
            Post Another Requirement
          </button>
        </div>
      </div>
    </div>
  );
}
