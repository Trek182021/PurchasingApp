import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'

const LatestRequests = () => {
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
        <div className="flex flex-col gap-6">
          <Link 
            to={`/request/${1}`}
            className="flex justify-between"
          >
            <div className="flex flex-col">
              <p className="base-semibold">Phase 1 Materials</p>
              <p className="tiny-medium"><Badge>Approved</Badge></p>
              
            </div>
            <p className="h3-bold text-rose-500">-$1,499.00</p>
          </Link>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="base-semibold">Phase 1 Materials</p>
              <p className="tiny-medium"><Badge className="error">Denied</Badge></p>
            </div>
            <p className="h3-bold text-emerald-500">+$1,000.00</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="base-semibold">Phase 1 Materials</p>
              <p className="tiny-medium"><Badge variant="secondary">Submitted</Badge></p>
            </div>
            <p className="h3-bold text-stone-500">*$1,000.00</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default LatestRequests