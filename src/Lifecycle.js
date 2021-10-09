import React from 'react';
import { NavLink } from "react-router-dom";
import './Lifecycle.css'

const Lifecycle = () => {
    return (
        <>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container'>
                    <h1>Component Life Cycle </h1>


                    <NavLink exact activeClassName="active-class" to='/'>Mounting</NavLink>
                    <NavLink exact activeClassName="active-class" to="/unmounting">Unmounting</NavLink>
                    <NavLink exact activeClassName="active-class" to="/updating"> Updating</NavLink>

                </div>
            </div>


        </>


    )
};

export default Lifecycle;
