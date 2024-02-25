import { sidenavLinks } from '@/constants'
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const TopNav = () => {
    const { pathname } = useLocation();
    return (
        <section className="topnav">
            <div className="flex justify-between p-2">
                <div className="flex items-center gap-6">
                    <Link to="/" className="flex gap-3 items-center">
                        <img
                            src="/assets/images/logo-white-icon.svg"
                            alt="logo"
                            className="h-8 w-8"
                        />
                    </Link>

                    <div>
                    <ul className='flex gap-3'>
                    {
                    sidenavLinks.map((link) => {
                        let isActive = pathname === link.route || (link.route === '/new' && pathname.startsWith('/new'))

                        return (
                        <li
                        key={link.name}
                        className={`sidenav-link group ${isActive && `bg-primary-test`}`}
                        >
                        <NavLink 
                            to={link.route}
                            className=" p-4"
                        >
                            {link.name}
                        </NavLink>
                        </li>
                    )})
                    }
                    </ul>
                    </div>
                </div>

                <div>
                    
                </div>
            </div>
        </section>
    )
}

export default TopNav