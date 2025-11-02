import React, { ReactNode } from "react";

function RoundedTag(props: { icon?: ReactNode }) {
  return (
    <div className="flex items-center align-middle justify-center p-1 ">
      {props.icon}
    </div>
  );
}

export default RoundedTag;
