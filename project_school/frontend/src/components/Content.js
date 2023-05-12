import React from 'react';
import Specialities from '../pages/Specialities';
import Home from '../pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProfessionList from '../actions/ProfessionList';
import AddProfession from '../actions/AddProfession';

export default function Content() {
  return (
    <main className='flex-shrink-0'>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/speciality" element={<Specialities />} />
                {/* <Route path="/detail/:id" element={<DetailSpeciality />} /> */}
                <Route path="/profession" element={<ProfessionList />} />
                <Route path="/addprofession" element={<AddProfession />} />
            </Routes>
        </Router>
    </main>
  )
}
