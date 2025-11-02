import React from "react";
import Section from "../Section";
import Timeline from "@/components/Timeline/Timeline";

function Studies() {
  const estudios = [
    {
      cargo: "Sistemas Microinformáticos y Redes",
      empresa: "IES Poeta Pacó Mollá",
      tiempo: "2019-2021",
      funciones: [],
    },
    {
      cargo: "Desarrollo de Aplicaciones Web",
      empresa: "IES Poeta Pacó Mollá",
      tiempo: "2021-2023",
      funciones: [],
    },
  ];

  return (
    <Section title="Estudios">
      {estudios.map((item, index) => (
        <Timeline
          key={index}
          cargo={item.cargo}
          empresa={item.empresa}
          tiempo={item.tiempo}
          funciones={item.funciones}
          ultima={index === estudios.length - 1}
        />
      ))}
    </Section>
  );
}

export default Studies;
