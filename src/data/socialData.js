import { FaXTwitter } from "react-icons/fa6";
import { LuGithub, LuLinkedin, LuAtSign } from "react-icons/lu";
import { TbBrandLeetcode } from "react-icons/tb";


const socialData = [
    {
        name: "Github",
        url: "https://github.com/logically-nerd",
        icon: <LuGithub />
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/logically-nerd/",
        icon: <LuLinkedin />
    }, {
        name: "Mail",
        url: "mailto:adnansh2804@gmail.com",
        icon: <LuAtSign />
    }, {
        name: "LeetCode",
        url: "https://leetcode.com/logically_nerd/",
        icon: <TbBrandLeetcode />
    },
    {
        name: "X",
        url: "https://twitter.com/logically_nerd",
        icon: <FaXTwitter />
    }
]
export default socialData;