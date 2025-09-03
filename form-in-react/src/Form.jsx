import { useState } from "react";

export default function Form() {
  let [fullName, setFullName] = useState("Archita");
  let [username , setUsername] = useState("Harshita");


  let handleChange = (event) => {
    //console.log(event.target.value)
    setFullName(event.target.value);
  };
  let handleUserName = (event) =>{
    setUsername(event.target.value);
  }

  return (
    <form>
      <label htmlFor="fullName">full name</label>
      <input
        placeholder="enter your full name"
        type="text"
        value={fullName}
        id="fullName"
        onChange={handleChange}
      />
      <br></br>
      <label htmlFor="username">UserName</label>
      <input
        placeholder="enter your full name"
        type="text"
        value={username}
        id="username"
        onChange={handleUserName}
      />
      <br></br>
      <button>Submit</button>
    </form>
  );
}
