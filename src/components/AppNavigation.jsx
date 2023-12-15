import React from 'react';
import { Routes , Route,Navigate,useLocation} from 'react-router-dom';
// import { Suspense } from 'react';
import PageNotFound from '../pages/PageNotFound';

import HomePage from '../pages/HomePage/HomePage';
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage';
import ContactPage from '../pages/contactPage/ContactPage';
import SignUp from '../pages/signupPage/SignUp';
import Register from '../pages/registerPage/Register';
import Dashboard from '../pages/dashboardPage/Dashboard';
import VideoSupport from './../pages/dashboardPage/pages/videoSupports/VideoSupport';
import DocsSupport from './../pages/dashboardPage/pages/docsSupports/DocsSupport';


function AppNavigation (){
    return (
            <Routes>
                {/* <Route exact path='/' element={<Navigate to="/home" replace={true}/>}></Route> */}
                <Route path='/' exact element={<Navigate to={'/home'} replace={true}/>}></Route>
                <Route path='/home' element={<HomePage/>}></Route>
                <Route path='/about us' element={<AboutUsPage/>}></Route>
                <Route path='/contact' element={<ContactPage/>}></Route>
                <Route path='/sign up' element={<SignUp/>}></Route>
                <Route path='/register' element={<Register/>}>
                </Route>        
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/videos-supports' element={<VideoSupport/>}></Route>
                <Route path='/docs-supports' element={<DocsSupport/>}></Route>
                <Route path='/all-supports' element={<DocsSupport/>}></Route>
                <Route path='/*' element={<PageNotFound/>}></Route>
            </Routes>
    )
}

export default AppNavigation ;