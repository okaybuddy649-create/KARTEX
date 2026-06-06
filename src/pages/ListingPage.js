import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SPECS = [
  ['Container Type', '20ft Dry Standard'],
  ['Quantity Available', '50 Units'],
  ['Condition', 'Good — Grade A'],
  ['Available From', '15 May 2026'],
  ['Price Per Unit', 'INR 32,000 (negotiable)'],
  ['Depot Address', 'Gate 4, Mundra Port ICD, Gujarat 370421'],
];

const s = {
  page: {
    paddingTop: '84px',
    minHeight: '100vh',
    background: '#FFFFFF',
  },
  inner: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '24px',
  },
  backLink: {
    fontSize: '14px',
    color: '#888888',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '20px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color 0.15s',
  },
  headerCard: {
    background: '#FFF5E6',
    borderRadius: '10px',
    padding: '28px',
    marginBottom: '20px',
    border: '1px solid #F5DDB3',
    borderLeft: '3px solid #D97220',
  },
  supplierName: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#1B3A5C',
    marginBottom: '10px',
  },
  verifiedBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    background: '#E8F8EF',
    color: '#27AE60',
    border: '1.5px solid #27AE60',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    padding: '3px 12px',
    marginBottom: '12px',
  },
  metaRow: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  metaItem: {
    fontSize: '13px',
    color: '#888888',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  specsCard: {
    background: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    marginBottom: '20px',
    border: '1px solid #E8ECF0',
  },
  specRow: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
    borderBottom: '1px solid #E8ECF0',
  },
  specKey: {
    padding: '14px 20px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#555555',
    background: '#F4F6F8',
  },
  specVal: {
    padding: '14px 20px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#1B3A5C',
    background: '#FFFFFF',
  },
  specValAlt: {
    padding: '14px 20px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#1B3A5C',
    background: '#F4F6F8',
  },
  mapBox: {
    background: '#E8ECF0',
    borderRadius: '10px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '28px',
    border: '1px solid #D0D6DE',
  },
  mapTitle: {
    fontSize: '16px',
    color: '#555',
    fontWeight: '600',
    marginBottom: '6px',
  },
  mapCoords: {
    fontSize: '12px',
    color: '#888888',
  },
  inquirySection: {
    background: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    padding: '28px',
    border: '1px solid #E8ECF0',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1B3A5C',
    marginBottom: '22px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
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
    marginBottom: '16px',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    minHeight: '44px',
  },
  textarea: {
    width: '100%',
    padding: '11px 14px',
    border: '1.5px solid #E0E4EA',
    borderRadius: '7px',
    fontSize: '14px',
    background: '#F4F6F8',
    color: '#333333',
    outline: 'none',
    resize: 'vertical',
    marginBottom: '20px',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    fontFamily: 'inherit',
  },
  sendBtn: {
    width: '100%',
    padding: '13px',
    background: '#D97220',
    color: '#FFF',
    border: 'none',
    borderRadius: '7px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    marginBottom: '10px',
    transition: 'background 0.15s',
  },
  waBtn: {
    width: '100%',
    padding: '13px',
    background: '#25D366',
    color: '#FFF',
    border: 'none',
    borderRadius: '7px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'background 0.15s',
  },
};

export default function ListingPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSendInquiry = async () => {
    setSubmitting(true);
    try {
      await fetch('https://karte-backend.onrender.com/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          container_type: '20ft Standard Dry',
          quantity: 1,
          destination_port: 'Mundra Port',
          required_date: '2026-07-01',
          budget_range: 'INR 32000',
        }),
      });
    } catch(e) { console.error(e); }
    setSubmitting(false);
    navigate('/success');
  };

  const navigate = useNavigate();
  const [focused, setFocused] = useState('');

  const inputStyle = (name) => ({
    ...s.input,
    borderColor: focused === name ? '#D97220' : '#E0E4EA',
    borderWidth: focused === name ? '2px' : '1.5px',
    boxShadow: focused === name ? '0 0 0 3px rgba(217,114,32,0.15)' : 'none',
  });

  const textareaStyle = () => ({
    ...s.textarea,
    borderColor: focused === 'msg' ? '#D97220' : '#E0E4EA',
    borderWidth: focused === 'msg' ? '2px' : '1.5px',
    boxShadow: focused === 'msg' ? '0 0 0 3px rgba(217,114,32,0.15)' : 'none',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/success');
  };

  return (
    <div style={s.page}>
      <div style={s.inner}>
        <Link to="/search" style={s.backLink}>← Back to Search Results</Link>

        {/* Header Card */}
        <div style={s.headerCard}>
          <div style={s.supplierName}>Mundra Container Depot Pvt Ltd</div>
          <div>
            <span style={s.verifiedBadge}>✓ Verified Supplier</span>
          </div>
          <div style={s.metaRow}>
            <span style={s.metaItem}>📍 Mundra Port, Gujarat</span>
            <span style={s.metaItem}>🕐 Listed 2 days ago</span>
          </div>
        </div>

        {/* Specs Table */}
        <div style={s.specsCard}>
          {SPECS.map(([key, val], i) => (
            <div key={key} style={{ ...s.specRow, borderBottom: i === SPECS.length - 1 ? 'none' : '1px solid #E8ECF0' }}>
              <div style={s.specKey}>{key}</div>
              <div style={i % 2 === 0 ? s.specVal : s.specValAlt}>{val}</div>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div style={s.mapBox}>
          <div style={s.mapTitle}>📍 Mundra Port, Gujarat</div>
          <div style={s.mapCoords}>23.0225° N, 70.2037° E</div>
        </div>

        {/* Inquiry Form */}
        <div style={s.inquirySection}>
          <div style={s.sectionTitle}>Send an Inquiry</div>

          <form onSubmit={handleSubmit}>
            <label style={s.label}>Your Full Name</label>
            <input
              type="text"
              style={inputStyle('name')}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused('')}
              placeholder="Rajesh Sharma"
            />

            <label style={s.label}>Company Name</label>
            <input
              type="text"
              style={inputStyle('company')}
              onFocus={() => setFocused('company')}
              onBlur={() => setFocused('')}
              placeholder="Your Company Pvt Ltd"
            />

            <label style={s.label}>Phone / WhatsApp Number</label>
            <input
              type="tel"
              style={inputStyle('phone')}
              onFocus={() => setFocused('phone')}
              onBlur={() => setFocused('')}
              placeholder="+91 98XXX XXXXX"
            />

            <label style={s.label}>Units Required</label>
            <input
              type="number"
              style={inputStyle('units')}
              onFocus={() => setFocused('units')}
              onBlur={() => setFocused('')}
              placeholder="e.g. 20"
            />

            <label style={s.label}>Message</label>
            <textarea
              rows={4}
              style={textareaStyle()}
              onFocus={() => setFocused('msg')}
              onBlur={() => setFocused('')}
              placeholder="Describe your requirement, timeline, and any special conditions..."
            />

            <button
              type="submit"
              style={s.sendBtn}
              onMouseEnter={e => e.target.style.background = '#C4631A'}
              onMouseLeave={e => e.target.style.background = '#D97220'}
            >
              Send Inquiry
            </button>
            <button
              type="button"
              style={s.waBtn}
              onClick={handleSendInquiry}
              onMouseEnter={e => e.currentTarget.style.background = '#1EAE52'}
              onMouseLeave={e => e.currentTarget.style.background = '#25D366'}
            >
              💬 WhatsApp Supplier
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
