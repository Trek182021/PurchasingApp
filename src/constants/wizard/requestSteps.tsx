import { stepsType } from "@/lib/types"
import ItemsForm, { submitItems } from "@/pages/new-request/items/items-form"
import ReviewForm, { submitRequest} from "@/pages/new-request/review/review-form"
import TeamInfoForm, { submitTeamInfo } from "@/pages/new-request/team-info/team-info-form"

export const requestSteps: stepsType[] = [
    {
        title: "Team Information",
        path: "/new",
        description: "Please provide the contact information of the reponsible team member.",
        component: <TeamInfoForm />,
        onSubmit: submitTeamInfo,
    },
    {
        title: "Items",
        path: "/new/items",
        description: "Please don't forget to attach all necessary documents and information.",
        component: <ItemsForm />,
        onSubmit: submitItems,
    },
    {
        title: "Review",
        path: "/new/review",
        description: "Please review the information you have provided before submitting.",
        component: <ReviewForm />,
        onSubmit: submitRequest,
    }
]