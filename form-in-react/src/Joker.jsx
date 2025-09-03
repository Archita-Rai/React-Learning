import { useEffect, useState } from "react";

export default function Jocker() {
  let [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
    let res = await fetch(URL);
    let jsonRes = await res.json();
    console.log(jsonRes);
    setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let res = await fetch(URL);
      let jsonRes = await res.json();
      console.log(jsonRes);
      setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
    }
    getFirstJoke();
  },[]);
  return (
    <div>
      <h3>Joker</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getJoke}>Click</button>
    </div>
  );
}
