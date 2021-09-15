import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

const PictureList = [
  {
    id: 1,
    value:'A'
  },
  {
    id: 2,
    value:'B'
  },
  {
    id: 3,
    value:'C'
  },
  {
    id: 4,
    value:'D'
  },
  {
    id: 5,
    value:'E'
  },
  {
    id: 6,
    value:'F'
  },
  {
    id: 7,
    value:'G'
  },
  {
    id: 8,
    value:'H'
  },
  {
    id: 9,
    value:'I'
  },
  {
    id: 10,
    value:'J'
  },
  {
    id: 11,
    value:'K'
  },
  {
    id: 12,
    value:'L'
  },
  {
    id: 13,
    value:'M'
  },
  {
    id: 14,
    value:'N'
  },
  {
    id: 15,
    value:'O'
  },
  {
    id: 16,
    value:'P'
  },
  {
    id: 17,
    value:'Q'
  },
  {
    id: 18,
    value:'R'
  },
  {
    id: 19,
    value:'S'
  },
  {
    id: 20,
    value:'T'
  },
  {
    id: 21,
    value:'U'
  },
  {
    id: 22,
    value:'V'
  },
  {
    id: 23,
    value:'W'
  },
  {
    id: 24,
    value:'X'
  },
  {
    id: 25,
    value:'Y'
  },
  {
    id: 26,
    value:'Z'
  },
  
];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((i) => id === i.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((i) => {
          return <Picture value={i.value} id={i.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((i) => {
          return <Picture value={i.value} id={i.id} />;
        })}
      </div>
    </>
  );
}

export default DragDrop;