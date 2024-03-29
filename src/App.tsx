import { Navigate, Route, Routes } from 'react-router-dom'
import V1Layout from './pages/V1Layout'
import "./index.css"
import NewRequestPage from './pages/new-request/Page'
import DashboardPage from './pages/dashboard/Page'
import RequestsPage from './pages/all-requests/Page'
import SettingsPage from './pages/settings/Page'
import NotFoundPage from './pages/not-found/Page'
import ProfileSettingsPage from './pages/settings/profile/Page'
import NotificationsSettingsPage from './pages/settings/notifications/Page'
import PublicLayout from './pages/PublicLayout'
import SignUpPage from './pages/public/sign-up'
import SignInPage from './pages/public/sign-in'

const App = () => {
  return (
    <main className="flex h-screen">
        
        <Routes>
            {/* public routes */}
            <Route element={<PublicLayout />}>
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
            </Route>

            {/* private routes */}
            <Route element={<V1Layout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/new" element={<NewRequestPage />} />
                <Route path="/new/:step" element={<NewRequestPage />} />
                <Route path="/requests" element={<RequestsPage />} />
                <Route path="/settings" element={<SettingsPage />}>
                    <Route path="/settings/" element={<ProfileSettingsPage />} />
                    <Route path="/settings/notifications" element={<NotificationsSettingsPage />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>

        
    </main>
  )
}

export default App