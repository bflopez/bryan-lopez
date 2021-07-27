import React from "react";
import { Link, withRouter } from "react-router-dom";


function toggleNav(event:any){
    console.log('event', event)
    document.getElementById('navbarBasicExample')!.classList.toggle('is-active')
}
function Navigation(props: { location: { pathname: string; }; }) {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    {/*<Link className="navbar-item" to="/">*/}
                    {/*    React Multi-Page Website*/}
                    {/*</Link>*/}
                    <button role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                            data-target="navbarBasicExample" onClick={($event) =>toggleNav($event)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div id="nav-menu" className="navbar-menu">
                    {/*<div className="navbar-start">*/}
                    {/*    <Link className="navbar-item" to="/">*/}
                    {/*        Home*/}
                    {/*    </Link>*/}
                    {/*    <Link className="navbar-item" to="/about">*/}
                    {/*        About*/}
                    {/*    </Link>*/}
                    {/*    <Link className="navbar-item" to="/contact">*/}
                    {/*        Contact*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Navigation);
// <nav className="navbar" role="navigation">
//     <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <div className="container">
//             <Link className="navbar-brand" to="/">
//                 React Multi-Page Website
//             </Link>
//             <div>
//                 <ul className="navbar-nav ml-auto">
//                     <li
//                         className={`nav-item  ${
//                             props.location.pathname === "/" ? "active" : ""
//                         }`}
//                     >
//                         <Link className="nav-link" to="/">
//                             Home
//                             <span className="sr-only">(current)</span>
//                         </Link>
//                     </li>
//                     <li
//                         className={`nav-item  ${
//                             props.location.pathname === "/about" ? "active" : ""
//                         }`}
//                     >
//                         <Link className="nav-link" to="/about">
//                             About
//                         </Link>
//                     </li>
//                     <li
//                         className={`nav-item  ${
//                             props.location.pathname === "/contact" ? "active" : ""
//                         }`}
//                     >
//                         <Link className="nav-link" to="/contact">
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
// </nav>
