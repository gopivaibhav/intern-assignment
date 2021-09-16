import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import Integer from "./Integer";
import Symbol from "./Symbol";
import "../App.css";

const PictureList = [
  {
    id: 1,
    value: 'A'
  },
  {
    id: 2,
    value: 'B'
  },
  {
    id: 3,
    value: 'C'
  },
  {
    id: 4,
    value: 'D'
  },
  {
    id: 5,
    value: 'E'
  },
  {
    id: 6,
    value: 'F'
  },
  {
    id: 7,
    value: 'G'
  },
  {
    id: 8,
    value: 'H'
  },
  {
    id: 9,
    value: 'I'
  },
  {
    id: 10,
    value: 'J'
  },
  {
    id: 11,
    value: 'K'
  },
  {
    id: 12,
    value: 'L'
  },
  {
    id: 13,
    value: 'M'
  },
  {
    id: 14,
    value: 'N'
  },
  {
    id: 15,
    value: 'O'
  },
  {
    id: 16,
    value: 'P'
  },
  {
    id: 17,
    value: 'Q'
  },
  {
    id: 18,
    value: 'R'
  },
  {
    id: 19,
    value: 'S'
  },
  {
    id: 20,
    value: 'T'
  },
  {
    id: 21,
    value: 'U'
  },
  {
    id: 22,
    value: 'V'
  },
  {
    id: 23,
    value: 'W'
  },
  {
    id: 24,
    value: 'X'
  },
  {
    id: 25,
    value: 'Y'
  },
  {
    id: 26,
    value: 'Z'
  },
];
const SymbolList = [
  {
    id: 1,
    value: ">"
  },
  {
    id: 2,
    value: "<"
  },
  {
    id: 3,
    value: "="
  },
];
const IntegerList = [
  {
    id: 1,
    value: "Integer"
  }
];

function DragDrop() {
  const [board, setBoard] = useState([]);
  const [sym, setSym] = useState([]);
  const [numb, setNum] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const [{ isHua }, symdrop] = useDrop(() => ({
    accept: "symbol",
    drop: (item) => addSym(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const [{ isDone }, intdrop] = useDrop(() => ({
    accept: "integer",
    drop: (item) => addInt(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addInt = (id) => {
    const pictureList = IntegerList.filter((i) => id === i.id);
    setNum((numb) => [...numb, pictureList[0]]);
  };
  const addSym = (id) => {
    const pictureList = SymbolList.filter((i) => id === i.id);
    setSym((sym) => [...sym, pictureList[0]]);
  };
  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((i) => id === i.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures">
        {PictureList.map((i) => {
          return <Picture value={i.value} id={i.id} see={false}/>;
        })}
      </div>
      <div className="container">
        <div className="Symbol">
          {SymbolList.map((i) => {
            return <Symbol value={i.value} id={i.id} see={false}/>;
          })}
        </div>
        <div className="Integer">
          {IntegerList.map((i) => {
            return <Integer value={i.value} id={i.id} see={false}/>;
          })}
        </div>

      </div>
      <div className="title">Form (Select one from each box)</div>
      <div className="container">

        <div className="Board" ref={drop}>
          {board.map((i) => {
            return <Picture value={i.value} id={i.id} setBoard={setBoard} arr={board} see={true}/>;
          })}
        </div>
        <div className="Board" ref={symdrop}>
          {sym.map((i) => {
            return <Symbol value={i.value} id={i.id} setSym={setSym} arr={sym} see={true}/>;
          })}
        </div>
        <div className="Board" id="intcon" ref={intdrop} id="check">
          {numb.map((i) => {
            return <Integer value={i.value} id={i.id} setNum={setNum} arr={numb} see={true}/>;
          })}
        </div>
      </div>
    </>
  );
}

export default DragDrop;