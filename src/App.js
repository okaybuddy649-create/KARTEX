import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import ListingPage from './pages/ListingPage';
import PostRequirementPage from './pages/PostRequirementPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  const location = useLocation();
  const showNav = location.pathname !== '/';

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      {showNav && <NavBar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route path="/post-requirement" element={<PostRequirementPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
