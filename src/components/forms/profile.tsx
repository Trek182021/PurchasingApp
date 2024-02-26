import { profileFormSchema } from "@/constants/schemas/settings-schema"
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



const ProfileForm = () => {
    const form = useForm<z.infer<typeof profileFormSchema>>({
        resolver: zodResolver(profileFormSchema),
        defaultValues: {
          username: "",
          email: "",
          team_name: "",
          name: "",
        },
    })
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof profileFormSchema>) {
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
                                <Input placeholder="tester4xy" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Tester Test" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the name that will be displayed on your profile and in emails.
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
                                <Input type="email" placeholder="soe@ucmerced.edu" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your UC Merced email. If you need to change it, please contact the administrator.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Team Name</FormLabel>
                            <FormControl>
                                <Input placeholder="CSE-140" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your team name. It should include your department and number.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                )}
                />
                <Button type="submit">Update profile</Button>
            </form>
        </Form>
    )
}

export default ProfileForm