import { LuHome, LuUser, LuMessageSquare, LuBriefcase } from "react-icons/lu"

const navData = [
    {
        name: "Home",
        url: "/",
        img: <LuHome />
    },
    // {
    //     name: "About",
    //     url: "/about",
    //     img: <LuUser />
    // },
    {
        name: "Portfolio",
        url: "/portfolio",
        img: <LuBriefcase />
    },
    {
        name: "Contact",
        url: "/contact",
        img: <LuMessageSquare />
    }
]

export default navData;