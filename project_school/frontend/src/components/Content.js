import React from 'react';
import Specialities from '../pages/Specialities';
import Home from '../pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function Content() {
  return (
    <main className='flex-shrink-0'>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/speciality" element={<Specialities />} />
            </Routes>
        </Router>
    </main>
  )
}
