import React, { ReactNode } from "react";

function ProjectCard(props: {
  title: string;
  description: string;
  icons: ReactNode;
  image: ReactNode;
  link?: string;
}) {
  return (
    <div className="w-full">
      <a href={props.link} target="_blank">
        {/* Parte arriba del header */}
        <div className="w-full flex gap-2 bg-l_bg4 dark:bg-d_bg2 p-3 rounded-t-xl">
          <span className="w-4 h-4 rounded-full dark:bg-l_red bg-d_red"></span>
          <span className="w-4 h-4 rounded-full dark:bg-l_yellow bg-d_yellow"></span>
          <span className="w-4 h-4 rounded-full dark:bg-l_green bg-d_green"></span>
        </div>

        {/* Contenido principal */}
        <div className="w-full bg-l_bg1 dark:bg-d_bg3 p-5 rounded-b-xl flex flex-wrap justify-between items-center gap-4 min-h-40">
          <div className="max-w-72">
            <h2 className="font-bold text-xl">{props.title}</h2>
            <p>{props.description}</p>
            <div className="flex flex-wrap my-6 gap-4 text-xl">
              {props.icons}
            </div>
          </div>
          <div>{props.image}</div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
