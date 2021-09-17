import React from "react";
import { useDrag } from "react-dnd";
import { useRef} from "react";

function Integer({ id, value,setNum,arr,see,setNumber,number }) {
  const del = useRef(null);
  const form = useRef(null);
  const req = useRef(null);
  const over = useRef(null);
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

    function call(){
      if(see){
        form.current.style.display="block"
        over.current.style.display = "block";
        req.current.focus()
      }
    }
    function numSubmit() {
      setNumber(req.current.value)
      console.log("new Value "+number);
      arr[0].value=req.current.value;
      form.current.style.display="none"
      over.current.style.display = "none"
    }
    function remove() {
      over.current.style.display = "none"
      form.current.style.display="none"
    }
  return (
    <>
    <span
    onClick={call}
    id="check"
      ref={drag}
      width="150px"
      style={{ display: isDragging ? "none" : "block" }}
    >{number}
    {see && <span onClick={delFunc} ref={del}>x</span>}
    </span>
    <div className="formdiv" ref={form}>
      <input type="number" name="number" ref={req} ></input>
      <button onClick={numSubmit}>Submit</button>
    </div>
    <div className="overlay" ref={over} onClick={remove}>
    </div>
    </>
  );
}

export default Integer;