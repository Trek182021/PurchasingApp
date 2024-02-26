import { notificationsFormSchema, profileFormSchema } from "@/constants/schemas/settings-schema"
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
import { Switch } from "../ui/switch"



const NotificationsForm = () => {
    const form = useForm<z.infer<typeof notificationsFormSchema>>({
        resolver: zodResolver(notificationsFormSchema),
        defaultValues: {
          purchased_emails: true,
          approved_emails: true,
          denied_emails: false,
        },
    })
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof notificationsFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="flex flex-col gap-3 !mt-2">
                    <FormField
                        control={form.control}
                        name="purchased_emails"
                        render={({ field }) => (
                            <FormItem className="flex justify-between rounded-lg border p-4">
                                <div className="">
                                <FormLabel>Request Purchased emails</FormLabel>
                                <FormDescription>
                                    Receive emails when your team's purchase request is marked as purchased.
                                </FormDescription>
                                </div>
                                <FormControl>
                                    <Switch 
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="approved_emails"
                        render={({ field }) => (
                            <FormItem className="flex justify-between rounded-lg border p-4">
                                <div className="">
                                <FormLabel>Approved Request emails</FormLabel>
                                <FormDescription>
                                    Receive emails when your team's purchase request is reviewed and approved.
                                </FormDescription>
                                </div>
                                <FormControl>
                                    <Switch 
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="denied_emails"
                        render={({ field }) => (
                            <FormItem className="flex justify-between rounded-lg border p-4">
                                <div className="">
                                <FormLabel>Denied Request emails</FormLabel>
                                <FormDescription>
                                    Receive emails when your team's purchase request is reviewed and denied.
                                </FormDescription>
                                </div>
                                <FormControl>
                                    <Switch 
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit">Update notifications</Button>
            </form>
        </Form>
    )
}

export default NotificationsForm