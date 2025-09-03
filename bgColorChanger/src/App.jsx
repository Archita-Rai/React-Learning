import { useState } from "react";

function App() {
  const [changeColor, setChangeColor] = useState("Olive");
  const [inputColor, setInputColor] = useState("");
  let [error, setError] = useState(false);

  let handleOnChnage = (e) => {
    const value = e.target.value;
    setInputColor(value);
    if (value.trim() === "" || isValidColor(value.trim())) {
      setError(false);
    }
  };

  const isValidColor = (color) => {
    const s = new Option().style;
    s.color = color;
    return s.color !== "";
  };

  const handleApplyColor = () => {
    if (isValidColor(inputColor.trim())) {
      setChangeColor(inputColor.trim());
      setInputColor("");
      setError(false); // clear error
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div
        className="w-full h-screen pt-10 text-center"
        style={{ backgroundColor: changeColor }}
      >
        <div className="h-[8rem] flex flex-wrap justify-center items-center px-2 py-2">
          <input
            className="h-[3rem] bg-white outline-none rounded sm:w-sm px-1 text-md shadow-2xl"
            placeholder="Enter the Color"
            value={inputColor}
            onChange={handleOnChnage}
          ></input>
          <button
            className="outline-none text-white px-4 py-2 rounded text-lg shadow-2xl ms-1 h-[3rem]"
            style={{ backgroundColor: "purple" }}
            onClick={handleApplyColor}
          >
            Apply
          </button>
        </div>
        {error && (
          <p
            className=" bg-white p-3 inline-block rounded-xl "
            style={{ color: "red" }}
          >
            ❌ Invalid color. Try: red, green, #ff6600...
          </p>
        )}
        <div className="fixed flex flex-wrap justify-center bottom-11 px-2 inset-x-12  ">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 xxl:gap-5 sm:gap-2 shadow-2xl bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none text-white px-3 md:px-4 py-1 rounded-2xl md:rounded-3xl md:text-lg shadow-lg hover:cursor-pointer"
              style={{ backgroundColor: "red" }}
              onClick={() => setChangeColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none text-white px-3 md:px-4 py-1 rounded-2xl md:rounded-3xl md:text-lg shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setChangeColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none text-white px-3 md:px-4 py-1 rounded-2xl md:rounded-3xl md:text-lg shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setChangeColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none text-white px-3 md:px-4 py-1 rounded-2xl md:rounded-3xl md:text-lg shadow-lg"
              style={{ backgroundColor: "purple" }}
              onClick={() => setChangeColor("purple")}
            >
              Purple
            </button>
            <button
              className="outline-none text-black px-3 md:px-4 py-1 rounded-2xl md:rounded-3xl md:text-lg shadow-lg"
              style={{ backgroundColor: "Yellow" }}
              onClick={() => setChangeColor("Yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none text-black px-3 md:px-4 py-1 rounded-2xl md:rounded-3xl md:text-lg shadow-lg hidden sm:block"
              style={{ backgroundColor: "aqua" }}
               onClick={() => setChangeColor("aqua")}
            >
              Aqua
            </button>
            <button
              className="outline-none text-white px-3 md:px-4 py-1 rounded-2xl md:rounded-3xl md:text-lg shadow-lg"
              style={{ backgroundColor: "black" }}
               onClick={() => setChangeColor("black")}
            >
              Black
            </button>
            <button
              className="outline-none text-white px-3 md:px-4 py-1 rounded-2xl md:rounded-3xl md:text-lg shadow-lg"
              style={{ backgroundColor: "blueviolet" }}
               onClick={() => setChangeColor("blueviolet")}
            >
              Blueviolet
            </button>
            <button
              className="outline-none text-white px-3 md:px-4 py-1 rounded-2xl md:rounded-3xl md:text-lg shadow-lg hidden sm:block"
              style={{ backgroundColor: "chocolate" }}
               onClick={() => setChangeColor("chocolate")}
            >
              Chocolate
            </button>
            <button
              className="outline-none text-black px-3 md:px-4 py-1 rounded-2xl md:rounded-3xl md:text-lg shadow-lg hidden sm:block"
              style={{ backgroundColor: "chartreuse" }}
               onClick={() => setChangeColor("chartreuse")}
            >
              Chartreuse
            </button>
            <button
              className="outline-none text-black px-3 md:px-4 py-1 rounded-2xl md:rounded-3xl md:text-lg shadow-lg"
              style={{ backgroundColor: "pink" }}
               onClick={() => setChangeColor("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none text-white px-3 md:px-4 py-1 rounded-2xl md:rounded-3xl md:text-lg shadow-lg hidden sm:block"
              style={{ backgroundColor: "orange" }}
               onClick={() => setChangeColor("Orange")}
            >
              Orange
            </button>
            <button
              className="outline-none text-black px-3 md:px-4 py-1 rounded-2xl md:rounded-3xl md:text-lg shadow-lg"
              style={{ backgroundColor: "white" }}
               onClick={() => setChangeColor("white")}
            >
              White
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
