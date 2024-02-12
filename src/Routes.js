import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import TestElement from './pages/TestElement'
import DashBoardPage from './pages/DashBoardPage'
import LoginPage from './pages/LoginPage'
import CoursePage from './pages/CoursePage'
import ContentPage from './pages/ContentPage'
import CommonErrorComponent from './components/common/CommonErrorComponent'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/testing" element={<TestElement />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/content/:url/:courseName" element={<ContentPage />} />
        <Route path="*" element={<CommonErrorComponent />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
