import { useState } from "react";
import "./Lottery.css";
import { getTicket,getSum } from "./helper";
import Ticket from "./Ticket"

export default function Lottery({n=3,winCondition}) {
  let [ticket, setTicket] = useState(getTicket(n));
  let isWining = winCondition(ticket);

  let buyTicket = () =>{
    setTicket(getTicket(n));
  }
  return (
    <div className="main-ticket-div">
      <h1>Lottery Game !</h1>
      <Ticket ticket={ticket}/>
      <button onClick={buyTicket}>Buy new ticket</button>
      <h2>{isWining && "Conratulations,  you won!"}</h2>
    </div>
  );
}
