import SideNavEmpty from '@/components/navigation/sidenav-empty'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="w-full lg:flex">
        <SideNavEmpty/>
        
        <section className="flex flex-1 h-full">
            <div className="flex flex-col items-center justify-center p-10 gap-3 w-full">
                <h1 className="h1-bold">Oops, Page Not Found!</h1>
                <p className="body-medium">Looks like this page went on a vacation. Please contact the system administrator.</p>
                    <Link to="/">
                        <Button>
                            Click here to return home.
                        </Button>
                    </Link>
            </div>
        </section>
    </div>
    
  )
}

export default NotFoundPage