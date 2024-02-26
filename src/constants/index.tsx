import {
    Timer,
    CheckCircle2,
    UserRoundCheck,
    UserRoundX,
    PackageCheck,
    TimerIcon,
    CheckCircle2Icon,
    UserRoundCheckIcon,
    UserRoundXIcon,
    PackageCheckIcon
} from "lucide-react";

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

export const settingsSideLinks = [
    {
        title: "Profile",
        path: "/settings",
    },
    {
        title: "Notifications",
        path: "/settings/notifications",
    },
    {
        title: "Reset Password",
        path: "/settings/reset-password",
    }
]

export const requestStatuses = [
    {
        value: "draft",
        label: "Draft",
        icon: TimerIcon,
    },
    {
        value: "submitted",
        label: "Submitted",
        icon: CheckCircle2Icon,
    },
    {
        value: "approved",
        label: "Approved",
        icon: UserRoundCheckIcon
    },
    {
        value: "denied",
        label: "Denied",
        icon: UserRoundXIcon
    },
    {
        value: "purchased",
        label: "Purchased",
        icon: PackageCheckIcon
    },
]