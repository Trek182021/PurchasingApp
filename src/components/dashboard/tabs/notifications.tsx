import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LatestRequests from "../cards/latest-requests"

const NotificationsTab = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>
          <h3 className="body-medium">Latest Requests</h3>
        </CardTitle>
        <CardDescription>
          <p className="small-regular">Your team has made 4 requests in the following month.</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LatestRequests />
      </CardContent>
    </Card>
  )
}

export default NotificationsTab