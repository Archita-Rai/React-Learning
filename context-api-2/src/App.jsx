import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeButton";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
 const [themeMode, setThemeMode] = useState("light");


 const lightTheme = ()=>{
  setThemeMode("light")
 }

 const darkTheme = ()=>{
  setThemeMode("dark");
 }
 
 useEffect(()=>{
     document.querySelector("html").classList.remove("light","dark")
     document.querySelector("html").classList.add(themeMode)
 },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center justify-center">
      <div className="w-[90%] sm:w-[70%] md:w-5/12 ">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeButton/>
        </div>
          
        <div className="w-full max-w-sm mx-auto"></div>
        <Card/>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
