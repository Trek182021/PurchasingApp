import SignUpForm from '@/components/forms/sign-up'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  return (
    <>
        <div>
            <h3 className="text-2xl">Create an account</h3>
            <p className="text-medium text-muted-foreground">Enter your information below to create your account</p>
        </div>
        <SignUpForm />
        <div className="justify-center flex gap-2">
            Already have an account? 
            <Link 
                to="/sign-in"
                className="text-active"
            >
                Sign In
            </Link>
        </div>
    </>
  )
}

export default SignUpPage