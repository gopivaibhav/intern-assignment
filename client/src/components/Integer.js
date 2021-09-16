import React from "react";
import { useDrag } from "react-dnd";

function Integer({ id, value }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "integer",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <span
    id="check"
      ref={drag}
      width="150px"
      style={{ display: isDragging ? "none" : "block" }}
    >{value}</span>
  );
}

export default Integer;