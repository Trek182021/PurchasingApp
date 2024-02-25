import { Button } from '@/components/ui/button';
import { requestSteps } from '@/constants'
import { stepsType } from '@/lib/types';
import { Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WizardStep from './wizard-step';

interface WizardProps {
  _steps: stepsType[];
  _formWidth?: string;
}

const Wizard = ({ _steps, _formWidth }: WizardProps) => {
  const navigate = useNavigate();
    const [counter, setCounter] = useState(0);
    const [steps, setSteps] = useState<stepsType[]>();
    const [currentStep, setCurrentStep] = useState<stepsType>();

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
        setSteps(_steps.map((step) => {
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
    <div className="flex flex-col gap-6">
        <aside className="w-full -mt-2 -ml-4">
            <WizardStep steps={requestSteps} goToStep={goToStep}/>
        </aside>
        <div className="flex flex-1 flex-col justify-between mb-10">
            <div>
                <h3 className="body-medium">{currentStep!.title}</h3>
                <p className="small-regular text-muted-foreground">{currentStep!.description}</p>
            </div>
            {currentStep!.component}
            <div className={`flex justify-between`}>
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
    </div>
  )
}

export default Wizard