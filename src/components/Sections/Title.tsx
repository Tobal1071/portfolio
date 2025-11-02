import React from "react";

function Title(props: { title: string }) {
  return (
    <header className="text-2xl flex items-center gap-3 mb-4 font-bold bg-l_bg1 dark:bg-d_bg1 bg-opacity-35 dark:bg-opacity-35 ">
      <h2 className="text-d_fg bg-blue dark:bg-l_blue pl-3 pr-4 rounded-r-full">
        {props.title}
      </h2>
    </header>
  );
}

export default Title;
