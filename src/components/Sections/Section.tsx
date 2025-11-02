import React, { ReactNode } from "react";
import Title from "./Title";

function Section(props: {
  title: string;
  icon?: ReactNode;
  children?: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={props.id}
      className={`${props.className === undefined ? "" : props.className} mb-14`}
    >
      <Title title={props.title} />
      {props.children}
    </section>
  );
}

export default Section;
