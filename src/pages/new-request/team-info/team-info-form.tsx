import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'

// const teamInfoFormSchema = z.object({
//   teamNumber: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   orderNumber: z.string().min(2).max(10),
//   contactNo: z.string()
//     .min(10, { message: "Must be a valid phone number ie. 5555551234" })
//     .max(10, { message: "Must be a valid phone number ie. 5555551234" }),
//   contactEmail: z.string()
//   .min(1, { message: "Please enter a valid uc merced email address." })
//   .email("This is not a valid email")
//   // Check if email is valid in the future.
// })

const TeamInfoForm = ({ isStatic = false}: { isStatic?: boolean }) => {
  // const form = useForm<z.infer<typeof teamInfoFormSchema>>({
  //   resolver: zodResolver(teamInfoFormSchema),
  //   defaultValues: {
  //     teamNumber: "",
  //     orderNumber: "",
  //     contactNo: "",
  //     contactEmail: "",
  //   },
  // })
 
  // // 2. Define a submit handler.
  // function onSubmit(values: z.infer<typeof teamInfoFormSchema>) {
  //   // Do something with the form values.
  //   // ✅ This will be type-safe and validated.
  //   console.log(values)
  // }
  return (
      // <Form {...form} >
      //   <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col lg:max-w-xl mb-6 gap-6 mt-2">
      //   <div className="grid w-full max-w-sm items-center gap-1.5">
      //     <Label htmlFor="email">Email</Label>
      //     <Input type="email" id="email" placeholder="Email" />
      //   </div>
      //     <FormField
      //       control={form.control}
      //       name="teamNumber"
      //       render={({ field }) => (
      //         <FormItem>
      //           <FormLabel>Team Name</FormLabel>
      //           <FormControl>
      //             <Input placeholder="CSE-001" {...field} />
      //           </FormControl>
      //           <FormDescription>
      //             This is your unique team name (department + number).
      //           </FormDescription>
      //           <FormMessage />
      //         </FormItem>
      //       )}
      //     />
      //     <FormField
      //       control={form.control}
      //       name="orderNumber"
      //       render={({ field }) => (
      //         <FormItem>
      //           <FormLabel>Order Number</FormLabel>
      //           <FormControl>
      //             <Input placeholder="4D" {...field} />
      //           </FormControl>
      //           <FormDescription>
      //             This is your unique team name (department + number).
      //           </FormDescription>
      //           <FormMessage />
      //         </FormItem>
      //       )}
      //     />
      //     <FormField
      //       control={form.control}
      //       name="contactNo"
      //       render={({ field }) => (
      //         <FormItem>
      //           <FormLabel>Contact No</FormLabel>
      //           <FormControl>
      //             <Input placeholder="865-409-1021" {...field} />
      //           </FormControl>
      //           <FormDescription>
      //             If any question or issue arises, we will contact you at this number.
      //           </FormDescription>
      //           <FormMessage />
      //         </FormItem>
      //       )}
      //     />
      //     <FormField
      //       control={form.control}
      //       name="contactEmail"
      //       render={({ field }) => (
      //         <FormItem>
      //           <FormLabel>Contact Email</FormLabel>
      //           <FormControl>
      //             <Input placeholder="soe@ucmerced.edu" {...field} />
      //           </FormControl>
      //           <FormDescription>
      //             If any question arises, we will contact you at this number. It's recommended to use your UC Merced email.
      //           </FormDescription>
      //           <FormMessage />
      //         </FormItem>
      //       )}
      //     />
      //   </form>
      // </Form>
      <div className="flex flex-col lg:max-w-2xl my-6 gap-6">
        <div className="grid w-full items-center gap-3">
            <Label htmlFor="team_name">Team Name</Label>
            <Input type="text" id="team_name" placeholder="CSE-108" disabled={isStatic}/>
            <p className="small-regular text-muted-foreground -mt-2">
              This is your unique team name (department + number).
            </p>
        </div>
        <div className="grid grid-cols-2 items-center gap-3">
          <div className="grid gap-3">
            <Label htmlFor="order_no">Order Number</Label>
            <Input type="text" id="order_no" placeholder="1E24D" disabled={isStatic}/>
            <p className="small-regular text-muted-foreground -mt-2">
              This is automatically generated.
            </p>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Team Budget*</Label>
            <Input type="number" id="team_budget" placeholder="$4,000" disabled/>
            <p className="small-regular text-muted-foreground -mt-2">
              Please verify before continuing.
            </p>
          </div>
        </div>
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="contact_no">Contact No</Label>
          <Input type="email" id="contact_no" placeholder="865-409-1021" disabled={isStatic}/>
          <p className="small-regular text-muted-foreground -mt-2">
            If any question or issue arises, we will contact you at this number.
          </p>
        </div>
        <div className="grid w-full items-center gap-3">
            <Label htmlFor="email">Contact Email</Label>
            <Input type="email" id="email" placeholder="soe@ucmerced.edu" disabled={isStatic}/>
            <p className="small-regular text-muted-foreground -mt-2">
              If any question arises, we will contact you at this number. It's recommended to use your UC Merced email.
              </p>
        </div>
      </div>
  )
}

export default TeamInfoForm