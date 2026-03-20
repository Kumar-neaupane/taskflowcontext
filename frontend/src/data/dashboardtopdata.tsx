import { ChartSpline, ClockArrowDown, FolderCheck, SquareCheckBig } from "lucide-react";

export const dashboardtopcarddata=[
    {
        firstline:"Total Projects",
        secondline:"150",
        thirdline:"4 Active",
        icons:<FolderCheck />,
        iconscolor:"text-indigo-500",
        textcolor:"text-green-500",
    },
     {
        firstline:"Total Tasks",
        secondline:"12",
        thirdline:"All tasks",
        icons:<SquareCheckBig />,
        iconscolor:"text-blue-500",
        textcolor:"text-blue-500",
    },
     {
        firstline:"Completed Tasks",
        secondline:"12",
        thirdline:"25% completion",
        icons:<ChartSpline />,
        iconscolor:"text-green-500",
        textcolor:"text-green-500",
    },
     {
        firstline:"Pending Tasks",
        secondline:"5",
        thirdline:"4 in progress",
        icons:<ClockArrowDown />,
        iconscolor:"text-orange-500",
        textcolor:"text-orange-500",
    },
]
//  deexportfault dashboardtopcarddata;