import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/Archita-Rai")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);


  return (
    <div className=" bg-gray-700 flex flex-wrap justify-evenly items-center text-white px-3 py-3">
      <img src={data.avatar_url} className="h-[20rem] w-[20rem] rounded-full" />
      <p className="py-12 px-12 text-2xl font-bold">
        Github Follower : {data.followers}
      </p>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () =>{
    const response = await fetch("https://api.github.com/users/Archita-Rai");
    return response.json()
      
}