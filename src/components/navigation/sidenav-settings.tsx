import { settingsSideLinks } from '@/lib/types'
import { Link, useLocation } from 'react-router-dom'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

const SideNavSettings = ({ sidelinks }: { sidelinks: settingsSideLinks[]} ) => {
    const { pathname } = useLocation();

    return (
        <nav className="flex lg:flex-col gap-2">
            {sidelinks.map((sidelink) => (
                <Link
                    key={sidelink.title}
                    to={sidelink.path}
                    className={cn(buttonVariants({variant: "ghost"}),
                        pathname === sidelink.path ? "bg-muted hover:bg:muted" : "hover:bg-transparent hover:underline",
                        "justify-start"
                    )}
                >
                    {sidelink.title}
                </Link>
            ))}
        </nav>
    )
}

export default SideNavSettings