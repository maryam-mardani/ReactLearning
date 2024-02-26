import React, { Component } from 'react';
import Users from './components/users';
import Navbar from './components/navbar';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import User from './components/user';
import NotFound from './components/notfound';
import Dashboard from './components/dashboard';
import axios from 'axios';


class App extends Component {
    state = { User: null } 

    componentDidMount(){
        const token = localStorage.getItem('token');
        if(!token){
            this.setState({user: null});
            return;
        }

    }
    render() { 
        return (
           <>
            <Navbar />
            <div className='container mt-3'>
                <Routes>
                    <Route path='/' Component={Home}/>
                    <Route path='/user/:id' Component={User}/>
                    <Route path='/users' Component={Users}/>
                    <Route path='/login' Component={Login}/>
                    <Route path='/register' Component={Register}/>
                    <Route path='/dashboard' Component={Dashboard} />

                    <Route path='/not-found' Component={NotFound}/>
                    <Route path='*' element={<Navigate to="/not-found" />} />
                </Routes>
            </div>
           </>
        );
    }
}
 
export default App;