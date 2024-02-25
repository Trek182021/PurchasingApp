import { requestStepsType } from "@/lib/types"
import ItemsForm from "@/pages/new-request/items/items-form"
import ReviewForm from "@/pages/new-request/review/review-form"
import TeamInfoForm from "@/pages/new-request/team-info/team-info-form"

export const sidenavLinks = [
    {
        imgUrl: 'assets/icons/home.svg',
        route: '/',
        name: 'Dashboard',
    },
    {
        imgUrl: 'assets/icons/wallpaper.svg',
        route: '/requests',
        name: 'All Requests',
    },
    {
        imgUrl: 'assets/icons/vec2.svg',
        route: '/settings',
        name: 'Settings',
    },
    {
        imgUrl: 'assets/icons/gallery-add.svg',
        route: '/new',
        name: 'Create New Request',
    },
]

export const requestSteps: requestStepsType[] = [
    {
        title: "Team Information",
        path: "/new",
        description: "Please provide the contact information of the reponsible team member.",
        component: <TeamInfoForm />,
    },
    {
        title: "Items",
        path: "/new/items",
        description: "Please don't forget to attach all necessary documents and information.",
        component: <ItemsForm />,
    },
    {
        title: "Review",
        path: "/new/review",
        description: "Please review the information you have provided before submitting.",
        component: <ReviewForm />,
    }
]