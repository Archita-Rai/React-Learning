import React, { useEffect, useState } from "react";

function FaqItems({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (index == 0) {
      setIsOpen(true);
    }
  }, []);

  const handleClick = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <div className="container">
      <div className="question-container">
        <button className={isOpen ? "arrow" : ""} onClick={handleClick}>></button>
        <h2>{faq.question}</h2>
      </div>
      {isOpen && <p className="ans">{faq.answer}</p>}{" "}
    </div>
  );
}

export default FaqItems;
