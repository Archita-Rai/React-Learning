import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!#$%&()*+-/=?@[]^_{|}~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="bg-slate-500 rounded-lg px-2 py-10 w-[25rem] sm:w-xl md:w-2xl my-16 mx-auto shadow-2xl container">
        <h1 className="text-rose-100 text-center text-2xl">
          Password Generator
        </h1>
        <div className=" flex flex-wrap justify-center items-center mt-3 ">
          <input
            className="h-[3rem] bg-white outline-none rounded  sm:w-sm md:w-xl px-2 text-md cursor-pointer shadow-md md:text-xl font-semibold text-purple-950 password-input"
            value={password}
            type="text"
            readOnly
            ref={passwordRef}
          ></input>
          <button
            className="outline-none text-white px-4 py-2 rounded text-lg shadow-lg h-[3rem] bg-purple-900 cursor-pointer copy"
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>
        <div className=" flex flex-wrap justify-center items-center gap-x-1 sm:gap-x-5 md:gap-x-20 mt-2 px-1">
          <div className="flex items-center gap-x-2 range">
            <input
              className="h-[3rem]  outline-none rounded  px-1 text-md cursor-pointer "
              type="range"
              name="range"
              min={8}
              max={35}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            ></input>
            <label
              className="text-rose-100 text-xl cursor-pointer"
              title="adjust-length"
            >
              Length({length})
            </label>
          </div>

          <div className="flex items-center gap-x-2 ms-2 sm:ms-0 number">
            <input
              type="checkbox"
              name="Number"
              className="h-6 w-6 cursor-pointer outline-none"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            ></input>
            <label
              htmlFor="Number"
              className="text-rose-100 text-xl cursor-pointer"
              title=" add number in password"
            >
              Number
            </label>
          </div>
          <div className="flex items-center gap-x-2 ms-2 sm:ms-0">
            <input
              type="checkbox"
              name="Character"
              className="h-6 w-6 cursor-pointer"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            ></input>
            <label
              htmlFor="Character"
              className="text-rose-100 text-xl cursor-pointer"
              title="add character in password"
            >
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
