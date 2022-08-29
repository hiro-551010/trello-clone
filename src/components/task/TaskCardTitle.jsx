import React, {useState} from 'react'

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState('Today');

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    
  }
  return (
    <div onClick={handleClick}>
      { isClick ? (
        <form>
          <input type="text" onChange={handleChange} />
        </form>
      ) : (
        <h3>Today</h3>
      )}
    </div>
  )
}
