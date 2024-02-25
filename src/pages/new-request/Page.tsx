import Wizard from '@/components/wizard'
import { Button } from '@/components/ui/button';
import { requestSteps } from '@/constants'
import { requestStepsType } from '@/lib/types';
import { Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';



const NewRequestPage = () => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(0);
    const [steps, setSteps] = useState<requestStepsType[]>();
    const [currentStep, setCurrentStep] = useState<requestStepsType>();

    function goToStep(step: number) {
        setCounter(step);
        navigate(steps![counter].path);

    }

    function goToNextStep() {
        setCounter(counter + 1);
        navigate(steps![counter].path);
    }

    function goBack() {
        setCounter(counter - 1);
        navigate(steps![counter].path);
    }

    useEffect(() => {
        setSteps(requestSteps.map((step) => {
            return { ...step, component: React.cloneElement(step.component) }
        }))
    },[])

    useEffect(() => {
        if (steps) {
            setCurrentStep(steps[counter]);   
            navigate(steps![counter].path);
        }
    }, [steps, counter]);

    if (steps === undefined || currentStep === undefined) {
        return (
            <div className="flex items-center">
                <Loader />
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full">
            <div className="header">
                <h1 className="h1-semibold">New Request</h1>
                <p className="text-muted-foreground">Create new purchase request for your team.</p>
            </div>
            <Separator className="my-6 bg-neutral-200" />
            <Wizard goToStep={goToStep}>
                <div className="flex flex-1 flex-col justify-between mb-10">
                    <div>
                        <h3 className="body-medium">{currentStep!.title}</h3>
                        <p className="small-regular text-muted-foreground">{currentStep!.description}</p>
                    </div>
                    {currentStep!.component}
                    <div className={`flex justify-between ${currentStep.title === "Team Information" && `lg:max-w-xl`}`}>
                        <div className="flex gap-4">
                            <Button 
                                variant="secondary" 
                                onClick={() => goToStep(0)}
                            >
                                Cancel
                            </Button>
                            {counter > 0 && 
                                <Button
                                    variant="default"
                                    onClick={() => goBack()}
                                >
                                    Back
                                </Button>}
                        </div>
                        {counter < steps.length - 1 ? 
                            <Button 
                                variant="default" 
                                className="bg-active hover:scale-110 hover:bg-active"
                                onClick={() => goToNextStep()}
                            >
                                Next
                            </Button>
                            :   <Button 
                                    variant="default" 
                                    className="bg-active hover:opacity-75"
                                >
                                    Submit
                            </Button>
                        }   
                    </div>
                </div>
            </Wizard>
        </div>
    )
}

export default NewRequestPage