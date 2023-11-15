// components/CustomFileSelector.tsx
import classNames from "classnames";
import React, { ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"input">;

const CustomFileSelector = (props: Props) => {

  return (
    <input
      {...props}
      type="file"
      multiple
      className={classNames({
        "file:bg-black file:text-white file:hover:cursor-pointer file:duration-200": true,
        "file:rounded-lg file:rounded-tr-none file:rounded-br-none": true,
        "file:px-4 file:py-2 file:mr-4 file:border-none": true,
        // overall input styling
        "hover:cursor-pointer rounded-lg text-black": true,
      })}
    />
  );
};

export default CustomFileSelector;
