import { FaFreeCodeCamp, FaReact, FaNodeJs,  } from "react-icons/fa"
import { SiUdemy, SiMongodb, SiExpress,  } from "react-icons/si"


export const certificates = [
    {
        id: 1,
        nameOfOrg: "TheAppBrewery",
        title: "The Complete Web Development Bootcamp 2022",
        logo: <SiUdemy style={{color: "#b70ab7"}} />,
        bgColor: "#B2A4FF",

    },
    {
        id: 2,
        nameOfOrg: "freeCodeCamp",
        title: "responsive web design certification",
        logo: <FaFreeCodeCamp />,
        bgColor: "#ff9a9a",

    },
    {
        id: 3,
        nameOfOrg: "freeCodeCamp",
        title: "Frontend developement library certification",
        logo: <FaFreeCodeCamp />,
        bgColor: "#FFCE44",

    },
    {
        id: 4,
        nameOfOrg: "freeCodeCamp",
        title: "Back End Development and APIs",
        logo: <FaFreeCodeCamp />,
        bgColor: "#FE6244",

    },
    {
        id: 5,
        nameOfOrg: "freeCodeCamp",
        title: "Information Security",
        logo: <FaFreeCodeCamp />,
        bgColor: "#009FBD",

    },
    {
        id: 6,
        nameOfOrg: "TheOdinProjetcs",
        title: "full MERN stack developement",
        logo: <div style={{fontSize: "1rem"}}>
            <SiMongodb style={{fontSize: "2rem", color:" #589636"}}/>
            <SiExpress style={{fontSize: "2rem", color:""}}/>
            <FaReact style={{fontSize: "2rem", color: "#7cc5d9"}}/>
            <FaNodeJs style={{fontSize: "2rem", color:"#44883e"}}/>
        </div>,
        bgColor: "#ADE792",

    },
]