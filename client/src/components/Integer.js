import React from "react";
import { useDrag } from "react-dnd";
import { useRef} from "react";

function Integer({ id, value,setNum,arr,see }) {
  const del = useRef(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "integer",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  function delFunc() {
    const txt=del.current.parentElement.innerText[0];
     setNum(arr.filter((i)=>i.value[0]!==txt))
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

export default Integer;