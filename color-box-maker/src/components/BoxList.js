import React, {useState} from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

function BoxList(props) {
  const [boxes, setBoxes] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addBox = ({width, height, backgroundColor}) => {
    setNextId(nextId + 1);
    setBoxes([
      ...boxes,
      {
        id: nextId,
        width, 
        height, 
        backgroundColor
      }
    ]);
  }


  return (
    <div className="BoxList">
      <NewBoxForm createBox={addBox} />
      {boxes.map(box => {
        return (<Box key={box.id} height={box.height} width={box.width} backgroundColor={box.backgroundColor} />)
      })}
    </div>
  )
}

export default BoxList;