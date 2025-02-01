import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button 
      onClick={() => setCount(count + 1)} 
      style={{ padding: "10px 20px", fontSize: "1.2rem"}}
    >
      Contador: {count}
    </button>
  );
}
