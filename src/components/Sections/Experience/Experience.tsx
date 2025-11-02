import React from "react";
import Section from "../Section";
import Timeline from "@/components/Timeline/Timeline";
import Tag from "@/components/Tag";

function Experience() {
  const trabajo = [
    {
      cargo: "Backend Developer",
      empresa: "NTT Data",
      tiempo: "06/2022 - 07/2022",
      funciones: [],
      iconos: (
        <>
          <Tag text="SQL" className="dark:bg-l_orange bg-d_orange" />
          <Tag text="Oracle OFSAA" className="dark:bg-l_blue bg-d_blue" />
        </>
      ),
    },
    {
      cargo: "Frontend Developer ",
      empresa: "NTT Data",
      tiempo: "03/2023 - 06/2023",
      funciones: [
        { descripcion: "Impulsé la evolución de aplicaciones, implementando nuevas funcionalidades y mejoras en las interfaces de usuario mediante Angular." },
        { descripcion: "Utilicé Kiuwan para analizar y mejorar el código, abordando vulnerabilidades y errores, fortaleciendo la seguridad y eficiencia de las aplicaciones." },
        { descripcion: "Utilicé Git para rastrear cambios en el código, creando y fusionando ramas para implementar funcionalidades y corregir errores, gestionando conflictos durante el proceso de fusión." },
      ],
      iconos: (
        <>
          <Tag text="Angular" className="dark:bg-l_orange bg-d_orange" />
          <Tag text="Kiuwan" className="dark:bg-l_red bg-d_red" />
          <Tag text="Git" className="dark:bg-l_green bg-d_green" />
        </>
      ),
    },
    {
      cargo: "Full Stack Developer ",
      empresa: "NTT Data",
      tiempo: "07/2023 - 09/2024",
      funciones: [
        { descripcion: "Creación de evolutivos utilizando una herramienta exclusiva proporcionada por el banco." },
        { descripcion: "Competencia sólida en el desarrollo web con un enfoque particular en JavaScript." },
        { descripcion: "Creación de Batch para la automatización de programas con el lenguaje Java." },
        { descripcion: "Desarrollo e implementacion de APIs RESTful utilizando Java." },
      ],
      iconos: (
        <>
          <Tag text="JavaScript" className="dark:bg-l_orange bg-d_orange" />
          <Tag text="HTML" className="dark:bg-l_red bg-d_red" />
          <Tag text="Git" className="dark:bg-l_green bg-d_green" />
          <Tag text="Java" className="dark:bg-l_green bg-d_green" />
        </>
      ),
    }
  ];
  return (
    <Section title="Experiencia">
      {trabajo.map((item, index) => (
        <Timeline
          key={index}
          cargo={item.cargo}
          empresa={item.empresa}
          tiempo={item.tiempo}
          funciones={item.funciones}
          ultima={index === trabajo.length - 1}
        >
          {item.iconos}
        </Timeline>
      ))}
    </Section>
  );
}

export default Experience;
