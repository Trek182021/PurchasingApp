import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';

interface WizardStepProps {
    steps: {
        title: string;
        path: string;
        description: string;
    }[];
    goToStep: (step: number) => void;
}

const WizardStep = ({ steps, goToStep }: WizardStepProps) => {
    const { pathname } = useLocation();
    return (    
        <nav
            className="grid grid-cols-3"
        >
            {steps.map((step, index) => {
                const isActive = pathname === step.path;
                return (
                    <Button
                        key={step.title}
                        variant="ghost"
                        className={`flex gap-4 justify-start hover:invert ${isActive && 'pointer-events-none'}`}
                        onClick={() => goToStep(index)}
                    >
                        <div
                            className={`rounded-full w-8 h-8 flex items-center justify-center ${isActive ? `bg-active text-white` : `bg-light-2`}`}
                        >
                            <p className="base-medium">{index + 1}</p> 
                        </div>
                        <p className={`base-medium ${isActive && `text-active base-semibold`}`}>{step.title}</p>
                    </Button>
                )
            })}
        </nav>
    )
}

export default WizardStep