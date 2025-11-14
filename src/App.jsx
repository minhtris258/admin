import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from './pages/admin/AdminLayout'

import './App.css'
import Dashboard from './pages/admin/Dashboard'
import UsersPage from './pages/admin/Users' // Tên component trong file là Users
import CalendarPage from './pages/admin/Calendar' // Tên component trong file là Calendar



const App = () => {
    return <AdminLayout />;
};

export default App;