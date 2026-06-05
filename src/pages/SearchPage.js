import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LISTINGS = [
  { id: 1, name: 'Mundra Container Depot Pvt Ltd', location: 'Mundra Port, Gujarat', units: 50, price: 32000, condition: 'Good', type: '20ft Dry' },
  { id: 2, name: 'Pioneer Logistics Containers', location: 'JNPT Mumbai, Maharashtra', units: 30, price: 34500, condition: 'Good', type: '20ft Dry' },
  { id: 3, name: 'Adani Container Solutions', location: 'Mundra Port, Gujarat', units: 120, price: 29800, condition: 'Used', type: '20ft Dry' },
  { id: 4, name: 'Gateway Port Containers', location: 'Chennai Port, Tamil Nadu', units: 25, price: 35000, condition: 'Refurbished', type: '20ft Dry' },
  { id: 5, name: 'Bharat Shipping Depot', location: 'Hazira Port, Gujarat', units: 80, price: 28500, condition: 'Good', type: '20ft Dry' },
  { id: 6, name: 'IndoTrans Container Hub', location: 'Pipavav Port, Gujarat', units: 45, price: 31200, condition: 'Used', type: '20ft Dry' },
];

const conditionColor = { Good: '#27AE60', Used: '#888888', Refurbished: '#D97220' };

const s = {
  page: { paddingTop: '84px', minHeight: '100vh', background: '#FFFFFF' },
  inner: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px',
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
  },
  sidebar: {
    width: '240px',
    flexShrink: 0,
    background: '#F4F6F8',
    border: '1px solid #E0E4EA',
    borderRadius: '10px',
    padding: '20px',
    position: 'sticky',
    top: '84px',
  },
  sidebarTitle: { fontSize: '16px', fontWeight: '700', color: '#1B3A5C', marginBottom: '20px' },
  filterSection: { marginBottom: '20px' },
  filterLabel: {
    fontSize: '12px', fontWeight: '700', color: '#888888',
    textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px', display: 'block',
  },
  checkRow: {
    display: 'flex', alignItems: 'center', gap: '8px',
    marginBottom: '8px', fontSize: '14px', color: '#333333', cursor: 'pointer',
  },
  select: {
    width: '100%', padding: '8px 10px', border: '1.5px solid #E0E4EA',
    borderRadius: '6px', background: '#FFFFFF', fontSize: '13px', color: '#333333', outline: 'none',
  },
  numberInput: {
    width: '100%', padding: '8px 10px', border: '1.5px solid #E0E4EA',
    borderRadius: '6px', background: '#FFFFFF', fontSize: '13px', color: '#333333', outline: 'none',
  },
  priceRow: { display: 'flex', gap: '8px' },
  priceInput: {
    flex: 1, padding: '8px 8px', border: '1.5px solid #E0E4EA', borderRadius: '6px',
    background: '#FFFFFF', fontSize: '12px', color: '#333333', outline: 'none', width: '100%',
  },
  applyBtn: {
    width: '100%', padding: '10px', background: '#D97220', color: '#FFF',
    border: 'none', borderRadius: '7px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', marginTop: '4px',
  },
  resetLink: {
    display: 'block', textAlign: 'center', fontSize: '12px', color: '#888888',
    marginTop: '10px', cursor: 'pointer', textDecoration: 'underline',
  },
  main: { flex: 1, minWidth: 0 },
  searchRow: { display: 'flex', gap: '10px', marginBottom: '10px' },
  searchInput: {
    flex: 1, padding: '11px 16px', border: '1.5px solid #E0E4EA', borderRadius: '7px',
    fontSize: '14px', background: '#FFFFFF', color: '#333333', outline: 'none',
    transition: 'border-color 0.15s, box-shadow 0.15s',
  },
  searchBtn: {
    padding: '11px 22px', background: '#D97220', color: '#FFF',
    border: 'none', borderRadius: '7px', fontSize: '14px', fontWeight: '700', cursor: 'pointer',
  },
  tagsRow: { display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px', minHeight: '0' },
  filterTag: {
    display: 'inline-flex', alignItems: 'center', gap: '6px',
    background: '#FFF5E6', border: '1px solid #D97220', borderRadius: '20px',
    padding: '4px 10px 4px 12px', fontSize: '12px', fontWeight: '600', color: '#1B3A5C',
  },
  tagX: {
    cursor: 'pointer', color: '#D97220', fontWeight: '700', fontSize: '14px',
    lineHeight: 1, display: 'flex', alignItems: 'center', padding: '0 2px',
    background: 'none', border: 'none',
  },
  metaRow: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px',
  },
  metaText: { fontSize: '13px', color: '#888888' },
  sortSelect: {
    padding: '6px 10px', border: '1.5px solid #E0E4EA', borderRadius: '6px',
    fontSize: '13px', color: '#333333', background: '#FFF', outline: 'none',
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' },
  card: {
    background: '#FFFFFF', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px',
    border: '1px solid #F0F2F5', borderLeft: '4px solid #D97220',
  },
  typeBadge: {
    display: 'inline-block', background: '#D97220', color: '#FFF', fontSize: '11px',
    fontWeight: '700', padding: '3px 10px', borderRadius: '20px', alignSelf: 'flex-start',
  },
  supplierName: { fontSize: '16px', fontWeight: '700', color: '#1B3A5C', lineHeight: '1.3' },
  locationText: { fontSize: '13px', color: '#888888', marginBottom: '4px' },
  unitsText: { fontSize: '13px', color: '#888888' },
  price: { fontSize: '22px', fontWeight: '800', color: '#1B3A5C' },
  perUnit: { fontSize: '13px', color: '#888888', fontWeight: '400', marginLeft: '4px' },
  condBadge: { fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px', border: '1.5px solid' },
  viewBtn: {
    width: '100%', padding: '9px 16px', background: '#D97220', color: '#FFF',
    border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', marginTop: '4px',
  },
  divider: { height: '1px', background: '#F0F2F5', margin: '4px 0' },
  emptyState: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', padding: '64px 24px', textAlign: 'center',
  },
  emptyIcon: { fontSize: '40px', marginBottom: '16px', lineHeight: 1 },
  emptyTitle: { fontSize: '18px', fontWeight: '700', color: '#1B3A5C', marginBottom: '8px' },
  emptySub: { fontSize: '14px', color: '#888888', marginBottom: '22px' },
  clearBtn: {
    border: '1.5px solid #D97220', borderRadius: '7px', padding: '8px 22px',
    fontSize: '13px', fontWeight: '600', color: '#D97220', background: 'transparent', cursor: 'pointer',
    transition: 'background 0.15s, color 0.15s',
  },
};

function buildTags(checked, location, condition) {
  const tags = [];
  Object.entries(checked).forEach(([type, on]) => {
    if (on) tags.push({ id: `type-${type}`, label: type, kind: 'type', value: type });
  });
  tags.push({ id: `loc-${location}`, label: location, kind: 'location', value: location });
  if (condition !== 'Any') {
    tags.push({ id: `cond-${condition}`, label: `${condition} Condition`, kind: 'condition', value: condition });
  }
  return tags;
}

function applyTagFilter(listings, tags) {
  if (tags.length === 0) return listings;
  return listings.filter(l =>
    tags.every(tag => {
      if (tag.kind === 'type') return l.type === tag.value;
      if (tag.kind === 'location') return l.location.toLowerCase().includes(tag.value.toLowerCase());
      if (tag.kind === 'condition') return l.condition === tag.value;
      return true;
    })
  );
}

export default function SearchPage() {
  const navigate = useNavigate();

  const [checked, setChecked] = useState({ '20ft Dry': true, '40ft Dry': false, '40ft HC': false, 'Reefer': false });
  const [location, setLocation] = useState('Mundra');
  const [condition, setCondition] = useState('Any');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTags, setActiveTags] = useState([]);

  const toggleCheck = (key) => setChecked(prev => ({ ...prev, [key]: !prev[key] }));

  const handleApply = () => {
    setActiveTags(buildTags(checked, location, condition));
  };

  const removeTag = (id) => setActiveTags(prev => prev.filter(t => t.id !== id));

  const handleReset = () => {
    setChecked({ '20ft Dry': true, '40ft Dry': false, '40ft HC': false, 'Reefer': false });
    setLocation('Mundra');
    setCondition('Any');
    setSearchQuery('');
    setActiveTags([]);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  // Apply search query filter
  const afterSearch = searchQuery.trim()
    ? LISTINGS.filter(l => {
        const q = searchQuery.toLowerCase();
        return l.name.toLowerCase().includes(q) || l.location.toLowerCase().includes(q);
      })
    : LISTINGS;

  // Apply tag filters on top
  const visible = applyTagFilter(afterSearch, activeTags);

  const isFiltered = searchQuery.trim() !== '' || activeTags.length > 0;

  return (
    <div style={s.page}>
      <div style={s.inner}>

        {/* Sidebar */}
        <aside style={s.sidebar}>
          <div style={s.sidebarTitle}>Filter Containers</div>

          <div style={s.filterSection}>
            <span style={s.filterLabel}>Container Type</span>
            {Object.keys(checked).map(type => (
              <label key={type} style={s.checkRow}>
                <input
                  type="checkbox"
                  checked={checked[type]}
                  onChange={() => toggleCheck(type)}
                  style={{ accentColor: '#D97220', width: '15px', height: '15px' }}
                />
                {type}
              </label>
            ))}
          </div>

          <div style={s.filterSection}>
            <span style={s.filterLabel}>Location</span>
            <select
              style={s.select}
              value={location}
              onChange={e => setLocation(e.target.value)}
            >
              <option>JNPT Mumbai</option>
              <option>Mundra</option>
              <option>Chennai</option>
              <option>Hazira</option>
              <option>Pipavav</option>
            </select>
          </div>

          <div style={s.filterSection}>
            <span style={s.filterLabel}>Condition</span>
            {['Any', 'Good', 'Used', 'Refurbished'].map(cond => (
              <label key={cond} style={s.checkRow}>
                <input
                  type="radio"
                  name="condition"
                  checked={condition === cond}
                  onChange={() => setCondition(cond)}
                  style={{ accentColor: '#D97220', width: '15px', height: '15px' }}
                />
                {cond}
              </label>
            ))}
          </div>

          <div style={s.filterSection}>
            <span style={s.filterLabel}>Min Quantity</span>
            <input type="number" placeholder="e.g. 10" style={s.numberInput} />
          </div>

          <div style={s.filterSection}>
            <span style={s.filterLabel}>Price Range</span>
            <div style={s.priceRow}>
              <input type="number" placeholder="Min INR" style={s.priceInput} />
              <input type="number" placeholder="Max INR" style={s.priceInput} />
            </div>
          </div>

          <button
            style={s.applyBtn}
            onClick={handleApply}
            onMouseEnter={e => e.target.style.background = '#C4631A'}
            onMouseLeave={e => e.target.style.background = '#D97220'}
          >
            Apply Filters
          </button>
          <span style={s.resetLink} onClick={handleReset}>Reset Filters</span>
        </aside>

        {/* Main */}
        <main style={s.main}>

          {/* Search bar */}
          <div style={s.searchRow}>
            <input
              type="text"
              placeholder="Search by port, city, depot name..."
              style={s.searchInput}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onFocus={e => {
                e.target.style.borderColor = '#D97220';
                e.target.style.boxShadow = '0 0 0 3px rgba(217,114,32,0.15)';
              }}
              onBlur={e => {
                e.target.style.borderColor = '#E0E4EA';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button
              style={s.searchBtn}
              onMouseEnter={e => e.target.style.background = '#C4631A'}
              onMouseLeave={e => e.target.style.background = '#D97220'}
            >
              Search
            </button>
          </div>

          {/* Active filter tags */}
          {activeTags.length > 0 && (
            <div style={s.tagsRow}>
              {activeTags.map(tag => (
                <span key={tag.id} style={s.filterTag}>
                  {tag.label}
                  <button
                    style={s.tagX}
                    onClick={() => removeTag(tag.id)}
                    title={`Remove ${tag.label} filter`}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Results meta row */}
          <div style={s.metaRow}>
            <span style={s.metaText}>
              Showing <strong>{isFiltered ? visible.length : 47}</strong>
              {isFiltered ? (visible.length !== 1 ? ' results' : ' result') : ' results · 20ft Dry · Mundra'}
            </span>
            <select style={s.sortSelect}>
              <option>Sort by: Price Low–High</option>
              <option>Sort by: Price High–Low</option>
              <option>Sort by: Units Available</option>
              <option>Sort by: Most Recent</option>
            </select>
          </div>

          {/* Empty state */}
          {visible.length === 0 ? (
            <div style={s.emptyState}>
              <div style={s.emptyIcon}>🔍</div>
              <div style={s.emptyTitle}>No listings found</div>
              <div style={s.emptySub}>Try a different port name or supplier</div>
              <button
                style={s.clearBtn}
                onClick={clearSearch}
                onMouseEnter={e => { e.target.style.background = '#D97220'; e.target.style.color = '#FFF'; }}
                onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#D97220'; }}
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div style={s.grid}>
              {visible.map(listing => (
                <div key={listing.id} style={s.card}>
                  <span style={s.typeBadge}>{listing.type}</span>
                  <div style={s.supplierName}>{listing.name}</div>
                  <div style={s.locationText}>📍 {listing.location}</div>
                  <div style={s.unitsText}>{listing.units} units available</div>
                  <div style={s.divider} />
                  <div>
                    <span style={s.price}>INR {listing.price.toLocaleString('en-IN')}</span>
                    <span style={s.perUnit}>/unit</span>
                  </div>
                  <span style={{
                    ...s.condBadge,
                    color: conditionColor[listing.condition],
                    borderColor: conditionColor[listing.condition],
                    alignSelf: 'flex-start',
                  }}>
                    {listing.condition === 'Good' ? '✓ ' : ''}{listing.condition} Condition
                  </span>
                  <button
                    style={s.viewBtn}
                    onClick={() => navigate('/listing')}
                    onMouseEnter={e => e.target.style.background = '#C4631A'}
                    onMouseLeave={e => e.target.style.background = '#D97220'}
                  >
                    View Listing →
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
