import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DollarSign, UsersRound, Package } from "lucide-react"

const Analytics = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
        <Card>
            <CardHeader className="flex flex-row justify-between pt-4 pb-2">
                <CardTitle className="small-medium">
                    Team Information
                </CardTitle>
                <UsersRound className="h-4 w-4 stroke-muted-foreground"/>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col">
                    <div className="h3-bold">CSE 140-01</div>
                    <p className="text-xs text-muted-foreground">4 active members</p>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row justify-between pt-4 pb-2">
                <CardTitle className="small-medium">
                    Remaining Budget
                </CardTitle>
                <DollarSign className="h-4 w-4 stroke-muted-foreground"/>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col">
                    <div className="h3-bold">$2,536.00</div>
                    <p className="text-xs text-muted-foreground">-16.4% from last month</p>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row justify-between pt-4 pb-2">
                <CardTitle className="small-medium">
                    Open Purchase Requests
                </CardTitle>
                <Package className="h-4 w-4 stroke-muted-foreground"/>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col">
                    <div className="h3-bold">+3</div>
                    <p className="text-xs text-muted-foreground">Draft and Submitted</p>
                </div>
            </CardContent>
        </Card>

        
    </div>
  )
}

export default Analytics