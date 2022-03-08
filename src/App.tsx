import { useState } from "react";
import Navbar from "./component/navbar";
import People from "./component/people";
import Planets from "./component/Planets";

function App() {
  const [page, setPage] = useState("Planets");

  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "Planets" ? <Planets /> : <People />}
        </div>
      </div>
    </>
  );
}

export default App;
