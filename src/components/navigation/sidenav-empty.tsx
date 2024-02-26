import { Link, } from 'react-router-dom'
import { Button } from '../ui/button'

const SideNavEmpty = () => {

  return (
    <nav className="sidenav">
        <div className="flex flex-col justify-between h-full">
            <Link to="/" className="flex gap-3 items-center">
                <img
                    src="/assets/images/logo-white.svg"
                    alt="logo"
                    width={250}
                    height={36}
                />
            </Link>
        
            
        <Button 
          variant="ghost"
          className="shad-button_ghost"
          onClick={() => {}}
        >
          <img
            src="/assets/icons/logout.svg"
            alt="logout"
          />
          <p className="small-medium lg:base-medium">Logout</p>
        </Button>
        </div>
    </nav>
  )
}

export default SideNavEmpty