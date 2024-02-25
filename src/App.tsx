import { Route, Routes } from 'react-router-dom'
import V1Layout from './pages/V1Layout'
import "./index.css"
import NewRequestPage from './pages/new-request/Page'
import DashboardPage from './pages/dashboard/Page'

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
            </Route>
        </Routes>

        
    </main>
  )
}

export default App