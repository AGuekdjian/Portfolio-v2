import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import ProjectsAndAchievements from '../pages/projectsAndAchievements/ProjectsAndAchievements'
import About from '../pages/about/About'
import Error404 from '../pages/error404/Error404'

export default function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="home" element={<Home />} />
                </Route>
                <Route path='/about' element={<About />} />
                <Route path='/projects&achievements' element={<ProjectsAndAchievements />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Error404 />} />
                {/* <Route path='' element={} /> */}
            </Routes>
        </>
    )
}