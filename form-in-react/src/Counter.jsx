import { useState ,useEffect} from "react"

export default function Counter(){
    let [count, setCount] = useState(0);
    let handleCount = () =>{
        setCount((prevCount) =>{
            return prevCount+1;
        })
    }
    useEffect(function printSomething(){
        console.log("hello")
    })
    return(
        <div>
            <h3>Counter: &nbsp;&nbsp; {count}</h3>
            <button onClick={handleCount}>+1</button>
        </div>
    )
}