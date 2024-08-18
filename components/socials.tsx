import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export const socialMedia = [
    {
        id: "LinkedIn",
        icon: <FaLinkedinIn className="w-6 h-6" />,
        url: "https://www.linkedin.com/in/logically-nerd/"
    },
    {
        id: "Github",
        icon: <FaGithub className="w-6 h-6"/>,
        url: "https://github.com/logically-nerd"
    },
    {
        id: "LeetCode",
        icon: <SiLeetcode className="w-5 h-5" />,
        url:"https://leetcode.com/u/logically_nerd/"
    }
]