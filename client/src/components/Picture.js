import React from "react";
import { useDrag } from "react-dnd";

function Picture({ id, value }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <span
      ref={drag}
      width="150px"
      style={{ display: isDragging ? "none" : "block" }}
    >{value}</span>
  );
}

export default Picture;