import React from 'react';
import Specialities from '../pages/Specialities';
import Home from '../pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProfessionList from '../actions/ProfessionList';
import AddProfession from '../actions/AddProfession';
import DetailSpeciality from '../pages/DetailSpeciality';
import EditProfession from '../actions/EditProfession';

import DepartmentList from '../actions/DepartmentList';
import AddDepartment from '../actions/AddDepartment';
import EditDepartment from '../actions/EditDepartment';

import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Logout from './Logout';

export default function Content() {
  return (
    <main className='flex-shrink-0'>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/speciality" element={<Specialities />} />
                <Route path="/detail/:id" element={<DetailSpeciality />} />
                <Route path="/profession" element={<ProfessionList />} />
                <Route path="/addprofession" element={<AddProfession />} />
                <Route path="/editprofession/:id" element={<EditProfession />} />
                <Route path="/department" element={<DepartmentList />} />
                <Route path="/adddepartment" element={<AddDepartment />} />
                <Route path="/editdepartment/:id" element={<EditDepartment />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    </main>
  )
}
