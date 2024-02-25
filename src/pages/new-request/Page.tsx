import Wizard from '@/components/wizard'
import { requestSteps } from '@/constants/wizard/requestSteps'
import { Separator } from '@/components/ui/separator';



const NewRequestPage = () => {

    return (
        <div className="flex flex-col w-full">
            <div className="header">
                <h1 className="h1-semibold">New Request</h1>
                <p className="text-muted-foreground">Create new purchase request for your team.</p>
            </div>
            <Separator className="my-6 bg-neutral-200" />
            <Wizard _steps={requestSteps}/>
        </div>
    )
}

export default NewRequestPage