import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const s = {
  page: {
    paddingTop: '84px',
    minHeight: '100vh',
    background: '#FFFFFF',
  },
  inner: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '32px 24px 48px',
  },
  pageTitle: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#1B3A5C',
    marginBottom: '6px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#888888',
    fontStyle: 'italic',
    marginBottom: '22px',
  },
  privacyBox: {
    background: '#FFF5E6',
    border: '1px solid #F5DDB3',
    borderLeft: '4px solid #D97220',
    borderRadius: '8px',
    padding: '16px 20px',
    fontSize: '14px',
    color: '#555',
    marginBottom: '28px',
    lineHeight: '1.6',
  },
  formCard: {
    background: '#FFFFFF',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    padding: '28px',
    border: '1px solid #E8ECF0',
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
    marginBottom: '18px',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    minHeight: '44px',
  },
  select: {
    width: '100%',
    padding: '11px 14px',
    border: '1.5px solid #E0E4EA',
    borderRadius: '7px',
    fontSize: '14px',
    background: '#F4F6F8',
    color: '#333333',
    outline: 'none',
    marginBottom: '18px',
    appearance: 'none',
    cursor: 'pointer',
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
    marginBottom: '18px',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    fontFamily: 'inherit',
  },
  budgetRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginBottom: '18px',
  },
  budgetInput: {
    width: '100%',
    padding: '11px 14px',
    border: '1.5px solid #E0E4EA',
    borderRadius: '7px',
    fontSize: '14px',
    background: '#F4F6F8',
    color: '#333333',
    outline: 'none',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    minHeight: '44px',
  },
  phoneRow: {
    display: 'flex',
    alignItems: 'stretch',
    marginBottom: '18px',
    border: '1.5px solid #E0E4EA',
    borderRadius: '7px',
    overflow: 'hidden',
    background: '#F4F6F8',
    transition: 'border-color 0.15s',
  },
  phonePrefix: {
    padding: '11px 12px',
    background: '#E8ECF0',
    color: '#888888',
    fontSize: '14px',
    fontWeight: '600',
    borderRight: '1px solid #E0E4EA',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
  },
  phoneInput: {
    flex: 1,
    padding: '11px 14px',
    border: 'none',
    background: 'transparent',
    fontSize: '14px',
    color: '#333333',
    outline: 'none',
  },
  divider: {
    height: '1px',
    background: '#E8ECF0',
    margin: '20px 0',
  },
  sectionSubtitle: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1B3A5C',
    marginBottom: '16px',
  },
  submitBtn: {
    width: '100%',
    padding: '14px',
    background: '#D97220',
    color: '#FFF',
    border: 'none',
    borderRadius: '7px',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: '4px',
    transition: 'background 0.15s',
  },
  footerNote: {
    textAlign: 'center',
    fontSize: '12px',
    color: '#888888',
    marginTop: '12px',
  },
};

export default function PostRequirementPage() {
  const navigate = useNavigate();
  const [focused, setFocused] = useState('');

  const focusStyles = (name) => focused === name
    ? { borderColor: '#D97220', borderWidth: '2px', boxShadow: '0 0 0 3px rgba(217,114,32,0.15)' }
    : { borderColor: '#E0E4EA', borderWidth: '1.5px', boxShadow: 'none' };

  const inputStyle = (name) => ({ ...s.input, ...focusStyles(name) });

  const selectStyle = (name) => ({ ...s.select, ...focusStyles(name) });

  const budgetInputStyle = (name) => ({ ...s.budgetInput, ...focusStyles(name) });

  const phoneRowStyle = () => ({
    ...s.phoneRow,
    borderColor: focused === 'whatsapp' ? '#D97220' : '#E0E4EA',
    borderWidth: focused === 'whatsapp' ? '2px' : '1.5px',
    boxShadow: focused === 'whatsapp' ? '0 0 0 3px rgba(217,114,32,0.15)' : 'none',
  });

  return (
    <div style={s.page}>
      <div style={s.inner}>
        <h1 style={s.pageTitle}>Post Your Requirement</h1>
        <p style={s.subtitle}>
          Tell verified suppliers what you need. They will contact you directly.
        </p>

        <div style={s.privacyBox}>
          🔒 Your contact details are only shared with verified KRATEX suppliers after you approve their response.
        </div>

        <div style={s.formCard}>
          <form onSubmit={(e) => { e.preventDefault(); navigate('/success'); }}>

            <label style={s.label}>Container Type</label>
            <select
              style={selectStyle('type')}
              onFocus={() => setFocused('type')}
              onBlur={() => setFocused('')}
            >
              <option>20ft Dry</option>
              <option>40ft Dry</option>
              <option>40ft HC</option>
              <option>Reefer</option>
            </select>

            <label style={s.label}>Quantity Needed</label>
            <input
              type="number"
              placeholder="e.g. 25"
              style={inputStyle('qty')}
              onFocus={() => setFocused('qty')}
              onBlur={() => setFocused('')}
            />

            <label style={s.label}>Required at Port</label>
            <select
              style={selectStyle('port')}
              onFocus={() => setFocused('port')}
              onBlur={() => setFocused('')}
            >
              <option>JNPT Mumbai</option>
              <option>Mundra</option>
              <option>Chennai</option>
              <option>Hazira</option>
              <option>Pipavav</option>
              <option>Vishakhapatnam</option>
              <option>Kolkata</option>
            </select>

            <label style={s.label}>Need By Date</label>
            <input
              type="date"
              style={inputStyle('date')}
              onFocus={() => setFocused('date')}
              onBlur={() => setFocused('')}
            />

            <label style={s.label}>Budget Range</label>
            <div style={s.budgetRow}>
              <input
                type="number"
                placeholder="Min INR"
                style={budgetInputStyle('minbudget')}
                onFocus={() => setFocused('minbudget')}
                onBlur={() => setFocused('')}
              />
              <input
                type="number"
                placeholder="Max INR"
                style={budgetInputStyle('maxbudget')}
                onFocus={() => setFocused('maxbudget')}
                onBlur={() => setFocused('')}
              />
            </div>

            <label style={s.label}>Additional Notes</label>
            <textarea
              rows={3}
              placeholder="Any special requirements, pickup preferences, or additional details..."
              style={{ ...s.textarea, ...focusStyles('notes') }}
              onFocus={() => setFocused('notes')}
              onBlur={() => setFocused('')}
            />

            <div style={s.divider} />
            <div style={s.sectionSubtitle}>Your Contact Details</div>

            <label style={s.label}>Your Full Name</label>
            <input
              type="text"
              placeholder="Rajesh Sharma"
              style={inputStyle('fullname')}
              onFocus={() => setFocused('fullname')}
              onBlur={() => setFocused('')}
            />

            <label style={s.label}>Company Name</label>
            <input
              type="text"
              placeholder="Your Company Pvt Ltd"
              style={inputStyle('company')}
              onFocus={() => setFocused('company')}
              onBlur={() => setFocused('')}
            />

            <label style={s.label}>WhatsApp Number</label>
            <div style={phoneRowStyle()}>
              <span style={s.phonePrefix}>+91</span>
              <input
                type="tel"
                placeholder="98XXX XXXXX"
                style={s.phoneInput}
                onFocus={() => setFocused('whatsapp')}
                onBlur={() => setFocused('')}
              />
            </div>

            <button
              type="submit"
              style={s.submitBtn}
              onMouseEnter={e => e.target.style.background = '#C4631A'}
              onMouseLeave={e => e.target.style.background = '#D97220'}
            >
              Post Requirement →
            </button>
          </form>

          <p style={s.footerNote}>
            Only verified KRATEX suppliers can view and respond to your requirement.
          </p>
        </div>
      </div>
    </div>
  );
}
