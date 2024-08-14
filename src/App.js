import "./App.css";

function App() {
  // return <>We're launching soon Days Hours Minutes Seconds</>;
  return (
    <div className="container">
      <div className="">
        <div className="digit timer">
          <div className="card back">
            <div className="top">0</div>
            <div className="bottom">
              <div className="inner">0</div>
            </div>
          </div>
          <div className="card active">
            <div className="front">
              <div className="top">0</div>
            </div>
            <div className="back">
              <div className="bottom">
                <div className="inner">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
