import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#3cb371').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      const colors = new Values(color).all(10);
      setList(colors); 
      setError(false);
    } catch(error){
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className={`${error ? 'error': null}`}
          placeholder='#f15025' />
          <button type='submit' className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color, index) => {
            return <SingleColor key={index} {...color} index={index}
            hexColor={color.hex} />
          })
        }
      </section>
    </>
  )
}

export default App;
