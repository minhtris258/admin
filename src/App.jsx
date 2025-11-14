import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from './pages/admin/AdminLayout'

import './App.css'
import Dashboard from './pages/admin/Dashboard'

function App() {
  return (
     <Router>
      <Routes>
        {/* Admin routes with layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
