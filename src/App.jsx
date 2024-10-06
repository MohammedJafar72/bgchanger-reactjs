import { useState } from "react";
import ColorButton from "./components/ColorButton";

function App() {
  const [bgColor, setBgColor] = useState("#FFFFFF"); // Initial background color

  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div className="w-full h-screen p-5 flex items-end justify-center" style={{ backgroundColor: bgColor }}>
      <div className="container bg-gray-700 w-full h-14 rounded-xl flex justify-center items-center flex-row">
        <ColorButton color="#cfd512" text="Yellow" onColorChange={handleColorChange} />
        <ColorButton color="#29d512" text="Green" onColorChange={handleColorChange} />
        <ColorButton color="#126ad5" text="Blue" onColorChange={handleColorChange} />
        <ColorButton color="#d58712" text="Orange" onColorChange={handleColorChange} />
      </div>
    </div>
  );
}

export default App;
