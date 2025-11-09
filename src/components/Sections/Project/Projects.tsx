import React from "react";
import Section from "../Section";
import ProjectCard from "@/components/ProjectCard";
import RoundedTag from "@/components/RoundedTag";
import { SiLaravel, SiMongodb, SiMysql, SiNodedotjs, SiReact, SiRender, SiWordpress } from "react-icons/si";
import Image from "next/image";
import imgSerode from "/public/just_drink.svg";
import imgRamblas from "/public/ulises.svg";
import { link } from "fs";

function Projects() {
  const projects = [
    
    {
      title: "JustDrink",
      description: "El gestor de discotecas",
      icons: (
        <>
          <RoundedTag icon={<SiReact />} />
          <RoundedTag icon={<SiLaravel />} />
          <RoundedTag icon={<SiMysql />} />
        </>
      ),
      image: (
        <Image
          src={imgSerode}
          alt="Foto de Cristobal Amat"
          className="max-w-72 filter sepia grayscale"
        />
      ),
    },
    {
      title: "SbCars",
      description: "Venta de vehiculos de segunda mano",
      icons: (
        <>
          <RoundedTag icon={<SiReact />} />
          <RoundedTag icon={<SiNodedotjs />} />
          <RoundedTag icon={<SiMysql />} />
        </>
      ),
      
    },
    {
      title: "Team Ulises",
      description: "Pagina web de club de boxeo",
      icons: (
        <>
          <RoundedTag icon={<SiReact />} />
          <RoundedTag icon={<SiRender />} />
        </>
      ),
      image: (
        <Image
          src={imgRamblas}
          alt="Foto de Team Ulises"
          className="max-w-72 filter sepia grayscale"
        />
      ),
      link: "https://team-ulises.com",
      
    },
  ];
  return (
    <Section title="Proyectos">
      <div className="flex flex-wrap gap-6">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              title={project.title}
              description={project.description}
              icons={project.icons}
              image={project.image}
              link={project.link}
              key={index}
            />
          );
        })}
      </div>
    </Section>
  );
}

export default Projects;
