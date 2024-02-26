import ProfileForm from "@/components/forms/profile"
import { Separator } from "@/components/ui/separator"

const ProfileSettingsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-3 lg:max-w-2xl">
        <div>
            <h3 className="text-lg font-medium">Profile</h3>
            <p className="text-sm text-muted-foreground">Please verify your information and contact the administrator if there's any errors.</p>
        </div>
        <Separator className="my-6"/>
        <ProfileForm />
    </div>
  )
}

export default ProfileSettingsPage