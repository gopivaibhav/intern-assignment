import React from "react";
import { useDrag } from "react-dnd";
import { useRef} from "react";

function Symbol({ id, value,setSym ,arr,see}) {
  const del = useRef(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "symbol",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  function delFunc() {
    const txt=del.current.parentElement.innerText[0];
     setSym(arr.filter((i)=>i.value!==txt))
    }
  return (
    <span
    id="check"
      ref={drag}
      width="150px"
      style={{ display: isDragging ? "none" : "block" }}
    >{value}
    {see && <span onClick={delFunc} ref={del}>x</span>}
    </span>
  );
}

export default Symbol;