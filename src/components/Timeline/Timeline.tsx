import React, { ReactNode } from "react";
import TimelineSection from "./TimelineSection";

function Timeline(props: {
  tiempo: string;
  empresa: string;
  cargo: string;
  funciones: { descripcion: string }[];
  icono?: ReactNode;
  children?: ReactNode;
  ultima?: boolean;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col align-middle items-center px-2">
        <span className="inline-block rounded-full w-5 h-6 bg-l_fg2 dark:bg-d_fg"></span>
        <div className="h-full border-solid border-l-2 border-d_bg2 dark:border-d_fg"></div>
      </div>

      <div
        className={`${
          props.ultima || props.ultima === undefined ? "" : "pb-6"
        }`}
      >
        <TimelineSection
          tiempo={props.tiempo}
          empresa={props.empresa}
          cargo={props.cargo}
          funciones={props.funciones}
        >
          {props.children}
        </TimelineSection>
      </div>
    </div>
  );
}

export default Timeline;
