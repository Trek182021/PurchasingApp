import { Link, NavLink, useLocation } from 'react-router-dom'
import { sidenavLinks } from '../../constants'
import { Button } from '../ui/button'

const SideNav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="sidenav">
        <div className="flex flex-col gap-11">
            <Link to="/" className="flex gap-3 items-center">
                <img
                    src="/assets/images/logo-white.svg"
                    alt="logo"
                    width={250}
                    height={36}
                />
            </Link>
        
            <Link to="/settings" className="flex gap-3 items-center">
                <img
                    src="/assets/icons/profile-placeholder.svg"
                    alt="dashboard"
                    className="h-14 w-14 rounded-full"
                />
                <div>
                  <p className="body-bold">Testing</p>
                  <p className="small-regular text-light-3">testing@gmail.com</p>
                </div>
            </Link>
            
            <ul className='flex flex-col gap-6'>
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
                    className="flex gap-4 items-center p-4"
                  >
                    <img
                      src={link.imgUrl}
                      alt={link.name}
                      width={24}
                      height={24}
                      className={`group-hover:invert-white ${
                        isActive && "invert-white"
                      }`}
                    />
                    {link.name}
                  </NavLink>
                </li>
              )})
            }
            </ul>
          
        </div>
        <Button 
          variant="ghost"
          className="shad-button_ghost"
          onClick={() => {}}
        >
          <img
            src="assets/icons/logout.svg"
            alt="logout"
          />
          <p className="small-medium lg:base-medium">Logout</p>
        </Button>
    </nav>
  )
}

export default SideNav