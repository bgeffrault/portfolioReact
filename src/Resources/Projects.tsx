import Sleeping from "./Images/Sleeping.jpg";
import Africa from "./Images/Africa.jpg";
import Feet from "./Images/Feet.jpg";
import ServicePublic from "./Images/ServicePublic.jpg";
import MedicalStaff from "./Images/MedicalStaff.jpg";
import Manufacturing from "./Images/Manufacturing.jpg";
import Portfolio from "./Images/Portfolio.jpg";

import { SiteReference } from "../Components";

export type Project = {
    title: string;
    description: string | JSX.Element;
    imgSrc: string;
    technologies: string[];
    author?: JSX.Element | string;
};

export const projects: Project[] = [
    {
        title: "Liggo",
        description: (<>
            <div>
                <SiteReference url="https://liggo.com/en" content="Liggo" /> works within the Industrial IoT (<b>IIoT</b>) and offers a platform to optimize the
                manufacturing productions process (monitoring, measurements, quality control,
                …). The solution optimizes the interactions between users and machines and aim
                to improve existing processes while promoting best practices.
            </div>
            <ul>
                <li>
                    <b>Design</b> and <b>develop</b> FrontEnd from scratch
                </li>
                <li>Implement product with industry <b>best practices</b></li>
                <li>Integrate <b>BI solution</b> (PowerBI) with multi tenancy, dynamic dataset binding and Row Level Security (RLS)</li>
                <li>Train teammates to start with <b>React</b></li>
            </ul>
        </>),
        technologies: ["React", "Material UI", "ASP .Net Core", "C#", "Postgresql", "Power BI", "DevOps", "Figma", "Git workflow"],
        imgSrc: Manufacturing,
        author: (<>Photo by <a href="https://unsplash.com/@ig_joshabeech?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Josh Beech</a> on <a href="https://unsplash.com/s/photos/manufacturing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </>),
    },
    {
        title: "Portfolio",
        description: (<>
            <div>
                Since I can not share my professional React code with you, I decided to rebuild my portfolio with <b>React</b> and <b>Typescript</b> and share it with you,
                the source code is available on my <SiteReference url="https://github.com/bgeffrault/portfolioReact" content="github" />.
                <br />
                <br />
                For my portfolio I wanted to be creative, so I created the design first in <SiteReference url="https://www.figma.com/file/DjOlGmD27YlBTO7HX6ZtZe/Portfolio?node-id=208%3A33" content="Figma" /> before implemented it.
                <br />
                <br />
                The time spend on it:
                <ul>
                    <li>A few days for the design and being satisfying enough</li>
                    <li>1 day for the layout and responsiveness</li>
                    <li>2-3 days for the animations (several tests and the final solution)</li>
                    <li>1 day for the text content</li>
                </ul>
            </div>
        </>),
        technologies: ["React", "Sass", "Typescript", "Firebase", "Github", "Figma"],
        imgSrc: Portfolio,
        author: (<>Photo by <a href="https://unsplash.com/@goshua13?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joshua Aragon</a> on <a href="https://unsplash.com/s/photos/portfolio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </>),
    },
    {
        title: "Sommeil profond",
        description: (<>
            <div>
                <SiteReference url="https://sommeilprofond.fr/" content="Sommeil Profond" /> is a blog to help people who wants to recover their energy better sleep.
                It is develop with <b>SEO</b> (Search engine optimization).
            </div>
            <ul>
                <li>Develop and create features</li>
                <li>Create animation</li>
                <li>Project Advisor</li>
            </ul>
        </>),
        technologies: ["Angular", "Sass", "Github"],
        imgSrc: Sleeping,
        author: (<>Photo by <a href="https://unsplash.com/@jakeacharles?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jake Charles</a> on <a href="https://unsplash.com/s/photos/sleep?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </>),
    },
    {
        title: "ShoeTimes",
        description: (<>
            <div>
                <SiteReference url="https://www.fontys.nl/nieuws/nl/32-studentgroepen-van-fontys-hogescholen-presenteren-hun-uitdagende-projecten-tijdens-het-engineering-in-practice-symposium/" content="ShoeTimes" /> is a firm's project given to a student group at Fontys. The main goal was to measure the sheerforce and deliver readable data for chiropodist.
                <br />
                <br />
                While it has never been created before, we (a team of multidisciplinary students) were able to deliver a <b>POC</b> and received a the first student prize for that.
                <br />
                <br />
                Why does this project mater ? Because it will help people with diabetes that can't feel any problem with their feet therefore if they have an infection it can result in disastrous ends ... So the importance to create a well designed insole.
            </div>
            <ul>
                <li>
                    <b>Design</b> and <b>develop</b> User Interface
                </li>
                <li>Multidisciplinary team</li>
                <li>Research & Development</li>
            </ul>
        </>),
        technologies: ["C++", "QT", "Arduino"],
        imgSrc: Feet,
        author: (<>Photo by <a href="https://unsplash.com/@jwwhitt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jordan Whitt</a> on <a href="https://unsplash.com/s/photos/feet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </>),
    },
    {
        title: "Service Public",
        description: (<>
            <div>
                <SiteReference url="https://www.service-public.fr/" content="Service Public" /> is the French reference to inform and guide people to essential services and information.
                It has a big Information System, it is managed by several teams in order to be maintain and deliver new features.
            </div>
            <ul>
                <li>Application management</li>
                <li>Keeping operational condition</li>
                <li>Diary management</li>
                <li>Functional analysis</li>
                <li>Business analysis</li>
                <li>Research & Development</li>
            </ul>
        </>),
        technologies: ["Scrum", "SI"],
        imgSrc: ServicePublic,
        author: (<>Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/service-public?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </>),
    },
    {
        title: "CertDC",
        description: (<>
            <div>
                <SiteReference url="http://www.certdc.inserm.fr/accueil_public.php" content="CertDC" /> is the French app used by medical staff to fill-in new death.
                <br />
                <br />
                It's a very old app and thus hard to maintain, but nevertheless it's a critical app inside a big <b>Information System</b>
                that is under the direction of several entities (INSERM, Ministère de la Santé and Cépidc).
                The data collected is then used for medical study and french people census.
                <br />
                <br />
                Overall I helped maintain the project and made a plan to redesign the application by identifying the needs and restrictions of each decision makers.
            </div>
            <ul>
                <li>Functional analysis: Draft functional specifications</li>
                <li>Business analysis: Workshop facilitation, Needs analysis, Draft specifications</li>
                <li>Quality insurance</li>
            </ul>
        </>),
        technologies: ["Html", "CSS", "SI"],
        imgSrc: MedicalStaff,
        author: (<>Photo by <a href="https://unsplash.com/@gpiron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Piron Guillaume</a> on <a href="https://unsplash.com/s/photos/medical-staff?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </>),
    },
    {
        title: "Mission Moustagbal",
        description: (<>
            <div>
                <SiteReference url="https://www.missionmoustagbal.com/" content="Mission Moustagbal" /> is blog about a French Engineer going to discover and relate the life in Chad.
                <br />
                <br />
                I advised him on which tech to use and I set up the project in order to make it works.
            </div>
            <ul>
                <li>Improve visuals</li>
                <li>Set up project</li>
                <li>Tech advisor</li>
            </ul>
        </>),
        technologies: ["Wordpress", "Php", "Infra"],
        imgSrc: Africa,
        author: (<>Photo by <a href="https://unsplash.com/@dmitrii_zhodzishskii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dmitrii Zhodzishskii</a> on <a href="https://unsplash.com/s/photos/africa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </>),
    },
];