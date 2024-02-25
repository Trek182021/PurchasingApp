import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DollarSign } from "lucide-react"

const Analytics = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
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
    </div>
  )
}

export default Analytics