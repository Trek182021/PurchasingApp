import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import NotificationsTab from "./tabs/notifications"
import OverviewTab from "./tabs/overview"


const DashboardTabs = () => {
  return (
    <Tabs defaultValue="overview">
        <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
            <OverviewTab />
        </TabsContent>
        <TabsContent value="notifications">
            <NotificationsTab />
        </TabsContent>
    </Tabs>
  )
}

export default DashboardTabs