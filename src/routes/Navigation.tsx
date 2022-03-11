import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';



import logo from '../logo.svg';

export const Navigation = () => {

    

  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={ logo } alt="React Logo"/>
                <ul>
                    <li>
                        <NavLink to="/Home" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Users" className={ ({ isActive }) => isActive ? 'nav-active' : '' } >Users</NavLink>
                    </li>
                </ul>
            </nav>


            <Routes>
                <Route path="/Home" element={ <h1>Home</h1> }/>
                <Route path="/About" element={ <h1>About</h1> }/>
                <Route path="/Users" element={ <h1>Users</h1> }/>

                <Route path="/*" element={ <h1>Home</h1> } />
            </Routes>

        </div>
    </BrowserRouter>
  )
}
