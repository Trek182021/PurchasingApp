import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';

interface WizardStepProps {
    items: {
        title: string;
        path: string;
        description: string;
    }[];
    goToStep: (step: number) => void;
}

const WizardStep = ({ items, goToStep }: WizardStepProps) => {
    const { pathname } = useLocation();
    return (    
        <nav
            className="grid grid-cols-3"
        >
            {items.map((item, index) => {
                const isActive = pathname === item.path;
                return (
                    <Button
                        key={item.title}
                        variant="ghost"
                        className={`flex gap-4 justify-start hover:invert ${isActive && 'pointer-events-none'}`}
                        onClick={() => goToStep(index)}
                    >
                        <div
                            className={`rounded-full w-8 h-8 flex items-center justify-center ${isActive ? `bg-active text-white` : `bg-light-2`}`}
                        >
                            <p className="base-medium">{items.indexOf(item) + 1}</p> 
                        </div>
                        <p className={`base-medium ${isActive && `text-active base-semibold`}`}>{item.title}</p>
                    </Button>
                )
            })}
        </nav>
    )
}

export default WizardStep