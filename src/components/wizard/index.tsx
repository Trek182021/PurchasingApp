import WizardStep from './wizard-step'
import { requestSteps } from '@/constants'

interface WizardProps {
    children: React.ReactNode;
    goToStep: (step: number) => void;
}
const Wizard = ({ children, goToStep }: WizardProps) => {
  return (
    <div className="flex flex-col gap-6">
        <aside className="w-full -mt-2 -ml-4">
            <WizardStep items={requestSteps} goToStep={goToStep}/>
        </aside>
        {children}
    </div>
  )
}

export default Wizard