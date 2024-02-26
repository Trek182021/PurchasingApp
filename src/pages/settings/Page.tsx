import SideNavSettings from "@/components/navigation/sidenav-settings"
import { Separator } from "@/components/ui/separator"
import { settingsSideLinks } from "@/constants"
import { Outlet } from "react-router-dom"

const SettingsPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="header">
          <h1 className="h1-semibold">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
      </div>
      <Separator className="my-6"/>
      <div className="flex flex-col lg:flex-row gap-6 w-full mb-6">
        <aside className="-ml-4 lg:w-1/5">
          <SideNavSettings sidelinks={settingsSideLinks}/>
        </aside>
        <Outlet/>
      </div>
    </div>
  )
}

export default SettingsPage