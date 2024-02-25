import { Navigate, Route, Routes } from 'react-router-dom'
import V1Layout from './pages/V1Layout'
import "./index.css"
import NewRequestPage from './pages/new-request/Page'
import DashboardPage from './pages/dashboard/Page'
import RequestsPage from './pages/all-requests/Page'
import SettingsPage from './pages/settings/Page'
import NotFoundPage from './pages/not-found/Page'

const App = () => {
  return (
    <main className="flex h-screen">
        
        <Routes>
            {/* public routes */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}

            {/* private routes */}
            <Route element={<V1Layout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/new" element={<NewRequestPage />} />
                <Route path="/new/:step" element={<NewRequestPage />} />
                <Route path="/requests" element={<RequestsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>

        
    </main>
  )
}

export default App