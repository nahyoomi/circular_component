
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoanPage from './pages/LoanPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/loanPage.html" element={<LoanPage />} />
        <Route path="*" element={<Navigate to="/loanPage.html" />} />
      </Routes>
    </Router>
  );
};

export default App;