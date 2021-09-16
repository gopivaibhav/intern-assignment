import React from "react";
import { useRef} from "react";
import { useDrag } from "react-dnd";

function Picture({ id, value,setBoard,arr,see }) {
  const del = useRef(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  function delFunc() {
    const txt=del.current.parentElement.innerText[0];
     setBoard(arr.filter((i)=>i.value!==txt))
    }
  return (
    <span
      ref={drag}
      width="150px"
      style={{ display: isDragging ? "none" : "block" }}
    >{value}
    {see && <span onClick={delFunc} ref={del}>x</span>}
    </span>
  );
}

export default Picture;