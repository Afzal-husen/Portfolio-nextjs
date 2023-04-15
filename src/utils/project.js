import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiMui, SiNextdotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const projects = [
  {
    id: 1,
    imgUrl: "/images/yt-clone.png",
    heading: "Youtube clone",
    siteUrl: "https://afzaldiwan.netlify.app/",
    codeUrl: "https://github.com/Afzal-husen/yt-clone",
    desc: [
      "made using mui, react",
      "data fetched from third party API",
      "resused the components",
    ],
    icons: [
      {
        id: 1,
        icon: <FaHtml5 style={{ color: "#e34c26" }} />,
        iconName:"Html5",
      },
      {
        id: 2,
        icon: <FaCss3 style={{ color: "#264de4" }} />,
        iconName: "Css3",
      },
      {
        id: 3,
        icon: <FaReact style={{ color: "#007fff" }} />,
        iconName: "ReactJS",
      },
      {
        id: 4,
        icon: <SiMui style={{ color: "#007fff" }} />,
        iconName: "MUI 5",
      },
      {
        id: 5,
        icon: <TbApi style={{ color: "gray" }} />,
        iconName: "API Call",
      },
    ],
  },
  {
    id: 2,
    imgUrl: "/images/portfolio.png",
    heading: "PortFolio website",
    siteUrl: "https://afzal-diwan-portfolio.vercel.app/Home",
    codeUrl: "https://github.com/Afzal-husen/Portfolio-nextjs",
    desc: [
      "made using html, css, react, nextjs",
      "resused the components",
      "learned SSG and SSR",
    ],
    icons: [
      {
        id: 1,
        icon: <FaHtml5 style={{ color: "#e34c26" }} />,
        iconName: "Html5",
      },
      {
        id: 2,
        icon: <FaCss3 style={{ color: "#264de4" }} />,
        iconName: "Css3",
      },
      {
        id: 3,
        icon: <FaReact style={{ color: "#007fff" }} />,
        iconName: "ReactJS",
      },
      {
        id: 4,
        icon: <SiNextdotjs style={{ color: "gray" }} />,
        iconName: "NextJs",
      },
    ],
  },
  {
    id: 3,
    imgUrl: "/images/keeper.png",
    heading: "Keeper app",
    siteUrl: "https://keeper-app-fawn.vercel.app/",
    codeUrl: "https://github.com/Afzal-husen/keeper-app",
    desc: [
      "made using html, css, react",
      "resused the components",
      "learned state management",
    ],
    icons: [
      {
        id: 1,
        icon: <FaHtml5 style={{ color: "#e34c26" }} />,
        iconName: "Html5",
      },
      {
        id: 2,
        icon: <FaCss3 style={{ color: "#264de4" }} />,
        iconName: "Css3",
      },
      {
        id: 3,
        icon: <FaReact style={{ color: "#007fff" }} />,
        iconName: "ReactJS",
      },
    ],
  },
];
