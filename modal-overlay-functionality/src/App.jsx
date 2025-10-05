import { useState } from "react";

function App() {
  const [showOffer, setShowOffer] = useState(false);
  const [offerAccepted, setOfferAccepted] = useState(false);

  const handleShowOffer = () => {
    setShowOffer(true);
  };

  return (
    <>
      <div className="container">
        <div className="show-offer-btn-container">
          {!showOffer && !offerAccepted ?(
            <button className="btn" onClick={handleShowOffer}>
              Show offer
            </button>
          ):<div className="offer-accepted-container"><p >Offer is  Accepted! </p></div>}
        
        </div>
      </div>
      {showOffer && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            setShowOffer(false);
            e.stopPropagation();
          }}
        >
          <div className="wrapper">
            <div className="accept-offer" onClick={(e) => e.stopPropagation()}>
              <div className="close">
                <button
                  onClick={(e) => {
                    setShowOffer(false);
                  }}
                >
                  X
                </button>
              </div>
              <p>plaese the Accept offer!</p>
              <div className="offer-accept-btn-container">
                <button
                  className="btn offer-accept-btn"
                  onClick={() => {
                    console.log("hello");
                    
                    setOfferAccepted(true);
                    setShowOffer(false);
                  }}
                >
                  accept offer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
