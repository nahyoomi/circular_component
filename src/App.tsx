
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoanPage from './pages/LoanPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/prestamo.html" element={<LoanPage />} />
        <Route path="*" element={<Navigate to="/prestamo.html" />} />
      </Routes>
    </Router>
  );
};

export default App;