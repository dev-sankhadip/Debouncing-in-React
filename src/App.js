import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const update = debounce(function (e) {
    console.log(e.target.value)
    setName(e.target.value)
  }, 1000);

  return (
    <div className="App">
      <input type="text" onChange={(e)=>{ e.persist(); update(e); }} />
    </div>
  );
}

export default App;