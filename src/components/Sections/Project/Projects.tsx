import React from "react";
import Section from "../Section";
import ProjectCard from "@/components/ProjectCard";
import RoundedTag from "@/components/RoundedTag";
import { SiLaravel, SiMongodb, SiMysql, SiNodedotjs, SiReact, SiWordpress } from "react-icons/si";
import Image from "next/image";
import imgSerode from "/public/just_drink.svg";
import imgRamblas from "/public/ramblas.svg";

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
              
              key={index}
            />
          );
        })}
      </div>
    </Section>
  );
}

export default Projects;
