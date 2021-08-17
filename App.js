import React, { useState } from 'react';
import data from './data'; // []
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([]);

  const handleSubmit = (e)=>{
      e.preventDefault();
      setText(data.slice(0, +count));
    }
  return (
  <section className="section-center">
    <h3>: حدد عدد الفقرات للحصول على نص عربي</h3>
    <form className="lorem-form" onSubmit={handleSubmit}>
        <button type="submit" className="btn"> إنشاء</button>
        <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} name="amount" id="amount" min="0" max='10'/>
        <label htmlFor="amount">:عدد الفقرات</label>
    </form>
    <article className="lorem-text">
      {
        text.map((item, indx)=>{
          return <p key={indx} >{item}</p>
        })
      }
    </article>
  </section>

    )
}

export default App;
