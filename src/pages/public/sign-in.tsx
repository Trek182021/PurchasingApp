import SignInForm from '@/components/forms/sign-in'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

const SignInPage = () => {
  return (
    <>
        <div>
            <h3 className="text-2xl">Sign In</h3>
            <p className="text-medium text-muted-foreground">Enter your information below to  sign in</p>
        </div>
        <SignInForm />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Link 
            to="/"
            className={cn(buttonVariants({ variant: "secondary"}))}
        >
            Sign in with SSO
        </Link>
        <div className="justify-center flex gap-2">
            Don't have an account? 
            <Link 
                to="/sign-up"
                className="text-active"
            >
                Create an account
            </Link>
        </div>
    </>
  )
}

export default SignInPage