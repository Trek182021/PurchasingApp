import NotificationsForm from "@/components/forms/notifications"
import { Separator } from "@/components/ui/separator"

const NotificationsSettingsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-3 lg:max-w-2xl">
        <div>
            <h3 className="text-lg font-medium">Notifications</h3>
            <p className="text-sm text-muted-foreground">Configure how you receive notifications.</p>
        </div>
        <Separator className="my-4"/>
        <NotificationsForm />
    </div>
  )
}

export default NotificationsSettingsPage