import React, { useContext } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useCOntext } from '../../App';

function Header1() {
    const navigate = useNavigate();
    const value = useContext(useCOntext);

    let location = useLocation();

    const show1 = () => {
        localStorage.setItem("LoginKey", "false");
        value.setLoginVal("false");
        navigate("/");
    }

    const MapArr = [
        {
            link: "Home",
            to: "/home",
        },
        {
            link: "About",
            to: "/about",
        },
        {
            link: "Contact",
            to: "/contact",
        },
        {
            link: "Gallery",
            to: "/gallery",
        },
        {
            link: "Information",
            to: "/information",
        },
        {
            link: "Form",
            to: "/form",
        },
        {
            link: "Table",
            to: "/table",
        },
        {
            link: "Classform",
            to: "/classform",
        },
        {
            link: "Classtable",
            to: "/classtable",
        },
    ]

    return (
        <>
            <nav className="navbar bg-dark navbar-expand-lg p-0 " data-bs-theme="dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                        <ul className="navbar-nav">

                            {   MapArr.map((x,i)=> {
                                  return   <li className="nav-item p-0 m-0" key={i}>
                                     <NavLink className={`nav-link`} to={x.to}>{x.link}</NavLink>
                                 </li>
                            })
                            // {   MapArr.map((x,i)=> {
                            //       return   <li className="nav-item active p-0 m-0" key={i}>
                            //          <Link className={`nav-link m-0 ${location.pathname == x.to ? "ActiveLink" : ""} `} to={x.to}>{x.link}</Link>
                            //      </li>
                            // })
                               
                            }
                            {/* <li className="nav-item">
                                    <Link className="nav-link active" to={"/home"}>Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/about"}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/contact"}>Contant</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/gallery"}>Gallary</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/information"}>Information</Link>
                                </li>
                               
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/form"}>Form</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/table"}>Table</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/classform"}>ClassForm</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"/classtable"}>ClassTable</Link>
                                </li> */}
                            <li className="nav-item">
                                <span className="nav-link " style={{ cursor: "pointer" }} aria-current="page" onClick={show1}>Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header1