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
      funciones: [{ descripcion: "Desarrollé y mantuve procesos de base de datos utilizando SQL y Oracle OFSAA para optimizar la gestión financiera." } ],
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
        { descripcion: "Desarrollo de nuevas funcionalidades y mejoras en interfaces de usuario con Angular" },
        { descripcion: "Análisis y mejora de la calidad del código utilizando Kiuwan, corrigiendo vulnerabilidades y errores" },
        { descripcion: "Gestión de versiones con Git, creación y fusión de ramas, y resolución de conflictos." },
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
        { descripcion: "Desarrollé evolutivos bancarios con herramientas internas, agilizando procesos de negocio." },
        { descripcion: "Colaboración activa con el equipo para optimizar procesos y prevenir incidencias futuras." },
        { descripcion: "Creación de procesos Batch en Java para automatización de tareas." },
        { descripcion: "Implementación y mantenimiento de APIs RESTful con Java y Spring Boot" },
      ],
      iconos: (
        <>
          <Tag text="JavaScript" className="dark:bg-l_orange bg-d_orange" />
          <Tag text="HTML" className="dark:bg-l_red bg-d_red" />
          <Tag text="Git" className="dark:bg-l_green bg-d_green" />
          <Tag text="Java" className="dark:bg-l_green bg-d_green" />
          <Tag text="Spring Boot" className="dark:bg-l_blue bg-d_blue" />
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
