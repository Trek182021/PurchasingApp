import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const signUpFormSchema = z.object({
    username: z.string().min(8, {
        message: "Username must be at least 8 characters.",
    }),
    email: z.string().min(2, {
        message: "Email must be a valid uc merced email.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters."
    })
})
 
const SignUpForm = () => {
    const form = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        }
    })

    function onSubmit(values: z.infer<typeof signUpFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter username here..." {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display name. It can be your real name or a pseudonym. 
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter email here..." {...field} />
                        </FormControl>
                        <FormDescription>
                            Please use a valid uc merced email, i.e `soe@ucmerced.edu`
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter password here..." {...field} />
                        </FormControl>
                        <FormDescription>
                            Use a mix of uppercase, numbers and special characters to create a strong password.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit" className="w-full">Sign Up</Button>
        </form>
    </Form>
  )
}

export default SignUpForm