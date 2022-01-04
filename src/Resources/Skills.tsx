import React from "./Images/React.jpg";
import Chart from "./Images/Chart.jpg";
import Report from "./Images/Report.jpg";
import SoftSkills from "./Images/SoftSkills.jpg";

import texture1 from "./Textures/texture1.png";
import texture2 from "./Textures/texture2.png";
import texture3 from "./Textures/texture3.png";
import texture4 from "./Textures/texture4.png";

export type Skill = {
    skill: string;
    description: string | JSX.Element;
    imgSrc: string;
    texture: string;
    projects: string[];
    author?: JSX.Element | string;
};

export const skills: Skill[] = [
    {
        skill: "React",
        description: (<>
            <div>
                <b>React</b> is my favorite Frontend tech for now ... I build Liggo UI from scratch with it. While I did use <b>Angular</b> to learn web development, I really enjoy React <b>Functional Component</b> technology and the simplicity of it.
                <br />
                <br />
                Besides, I regularly use React with <b>Create React App</b>(CRA) to start new projects and made some fast POC. By the way, this portfolio was made with React.
            </div>
        </>),
        texture: texture1,
        imgSrc: React,
        author: (<>
            Photo by <a href="https://unsplash.com/@lautaroandreani?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lautaro Andreani</a> on <a href="https://unsplash.com/s/photos/react?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </>),
        projects: ["Liggo", "Portfolio"],
    },
    {
        skill: "BI",
        description: (<>
            <div>
                Business Intelligence, a very wide domain it is ... I was introduced to the BI domain when my team and I at Liggo decided to integrated <b>Power BI </b> report in our App. The journey was fantastic.
                <br />
                <br />
                I did the Power BI report's integration in a frontend application. Based on our multi tenancy database, we created a workspace reference for generic reports that we then linked with <b>dynamic dataset bindings</b> for each tenant, then we added the <b>RLS (Row Level Security)</b> to prevent data leaks between tenants.
                <br />
                <br />
                Unlike Git workflow, Power BI does not have a version control system... Nevertheless, our set up was easy to use and allowed to work on different version of the same report.
                <br />
                <br />
                Also I made some simple reports that were deployed in Liggo production.
            </div>
        </>),
        texture: texture2,
        imgSrc: Report,
        projects: ["Liggo"],
        author: (<>Photo by <a href="https://unsplash.com/@lukechesser?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luke Chesser</a> on <a href="https://unsplash.com/s/photos/reports?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </>)
    },
    {
        skill: "D3.js",
        description: (<>
            <div>
                As my journey with <b>Power BI</b> and web development continue, I decided to become an expert in D3 js technology. The charts speed and responsiveness combined with <b>React</b> component is very pleasant to use.
                <br />
                <br />
                This tech is a pedestal tool for building custom visualization in front end and creating Power BI widget (I will deliver one on Power BI market place soon).
            </div>
        </>),
        texture: texture3,
        imgSrc: Chart,
        projects: ["Liggo"],
        author: (<>Photo by <a href="https://unsplash.com/@claybanks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Clay Banks</a> on <a href="https://unsplash.com/s/photos/charts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </>),
    },
    {
        skill: "Soft Skills",
        description: (<>
            <div>
                Whereas Tech skills are essential to build a project, <b>soft skills</b> are essential to make the project successful !
                <br />
                <br />
                I have the ability to <b>communicate</b> and work with different kind of teams (and thus personalities) making it easy to start on new projects.
                I always see and share the <b>positive</b> aspect of something, it's always appreciated for the team mood.
                Also, I like to share my mind with my managers when there is an organizational problem that can be solved, the fastest it's identified the fastest it's solved !
            </div>
        </>),
        texture: texture4,
        imgSrc: SoftSkills,
        projects: ["Liggo", "Portfolio"],
        author: (<>Photo by <a href="https://unsplash.com/@priscilladupreez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Priscilla Du Preez</a> on <a href="https://unsplash.com/s/photos/soft-skills?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </>)
    },
];