import React from 'react'

const NavBar = ({ brand }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container justify-content-center">
                <a className="navbar-brand text-uppercase" href="/">
                    {brand}
                </a>
            </div>

        </nav>
    )
}

export default NavBar