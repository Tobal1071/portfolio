import React from "react";

function Tag(props: { className: string; text: string }) {
  return (
    <span
      className={`${props.className} rounded-full px-2 bg-opacity-80 dark:bg-opacity-80`}
    >
      {props.text}
    </span>
  );
}

export default Tag;
