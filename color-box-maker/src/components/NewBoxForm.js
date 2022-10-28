import React, {useState} from 'react';

function NewBoxForm({ createBox }) {

  const [boxFormData, setBoxFormData] = useState({
    width: 0,
    height: 0,
    backgroundColor: ''
  })

  const handleEnter = () => {
    createBox(boxFormData);
    setBoxFormData({
      width: 0,
      height: 0,
      backgroundColor: ''
    })
  }

  const handleChange = (keyName, value) => {
    setBoxFormData({
      ...boxFormData,
      [keyName]: value
    })
  }

  return (
    <form className="NewBoxForm">
      <label htmlFor="width">Width</label>
      <input id="width" type="number" name="width" value={boxFormData.width} onChange={(e) => handleChange("width", Number(e.target.value)) } />

      <label htmlFor="height">Height</label>
      <input id="height" type="number" name="height" value={boxFormData.height} onChange={(e) => handleChange("height", Number(e.target.value))} />

      <label htmlFor="backgroundColor">Background Color</label>
      <input id="backgroundColor" type="text" name="backgroundColor" value={boxFormData.backgroundColor} onChange={(e) => handleChange("backgroundColor", e.target.value)} />

      <button onClick={(e) => { 
        e.preventDefault();
        handleEnter() 
      }}>Create Box</button>
    </form>
  )


}


export default NewBoxForm;