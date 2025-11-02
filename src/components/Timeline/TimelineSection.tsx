import React, { ReactNode } from "react";

function TimelineSection(props: {
  tiempo: string;
  empresa: string;
  cargo: string;
  funciones: { descripcion: string }[];
  children: ReactNode;
}) {
  return (
    <div>
      <div className="leading-7">
        <p>{props.tiempo}</p>
        <p className="font-bold">{props.empresa}</p>
        <p>{props.cargo}</p>
        {props.funciones.length > 0 && (
          <ul className="ml-10">
            {props.funciones.map((item, index) => (
              <li className="list-disc" key={index}>
                {item.descripcion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-wrap gap-4 mt-2">{props.children}</div>
    </div>
  );
}

export default TimelineSection;
