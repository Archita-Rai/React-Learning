import { useState } from "react";

export default function NewForm() {
let [formData , setFormData] = useState({
   fullName:"",
   username:"",
})

let handelInputChnage = (event) =>{
  let fieldName = event.target.name;
  let newValue = event.target.value;
//   console.log(fieldName);
//   console.log(newValue);

  setFormData((currData)=>{

    // first way to set input value
    // currData[fieldName] = newValue;
    // return {...currData};

    // Second Way to chnage input value
    // return{...currData,[fieldName]:newValue};

    // Third Way to set input value;
    return {...currData,[event.target.name]:event.target.value};
    
  });
}
let handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData);
    setFormData({
        fullName:"",
        username:"",
    })
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">full name</label>
      <input
        placeholder="enter your full name"
        type="text"
        value={formData.fullName}
        id="fullName"
        name="fullName"
        onChange={handelInputChnage}
      />
      <br></br>
      <label htmlFor="username">UserName</label>
      <input
        placeholder="enter your full name"
        type="text"
        value={formData.username}
        id="username"
        name="username"
        onChange={handelInputChnage}
      />
      <br></br>
      <button>Submit</button>
    </form>
  );
}
