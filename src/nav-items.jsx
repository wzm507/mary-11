import { HomeIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import MaryProjects from "@/components/MaryProjects";
import MyStory from "@/components/MyStory";
import CareerDetail from "@/pages/CareerDetail";
import PropertyDetail from "@/pages/PropertyDetail";
import DeveloperProjects from "@/components/DeveloperProjects";

/**
* Central place for defining the navigation items. Used for navigation components and routing.
*/
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Mary项目",
    to: "/mary-projects",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <MaryProjects />,
  },
  {
    title: "我的故事",
    to: "/my-story",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <MyStory />,
  },
  {
    title: "职业详情",
    to: "/career/:id",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <CareerDetail />,
  },
  {
    title: "房产详情",
    to: "/property/:id",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <PropertyDetail />,
  },
  {
    title: "开发商项目",
    to: "/developer-projects",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <DeveloperProjects />,
  },
];
