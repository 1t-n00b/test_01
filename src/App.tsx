import React from 'react';
import './App.css';
import SortContainer from './components/Sort/SortContainer';
import UsersListContainer from './components/Users/UsersListContainer';
import {Route, Routes} from 'react-router-dom';
import UserContainer from './components/Users/User/UserContainer';

function App() {

    return (
        <div className="App">
            <SortContainer/>
            <Routes>
                <Route path="/" element={<UsersListContainer/>}/>
                <Route path="/:userID" element={<UserContainer/>}/>
            </Routes>
        </div>
    );
}

export default App;
