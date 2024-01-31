import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import TestElement from './pages/TestElement'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/testing" element={<TestElement />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
