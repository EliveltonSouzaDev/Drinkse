import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
// styles
import { Body } from "./app.styles";

// components
import Loader from "./Components/PreLoader/Loader";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Routes from "./Routes";

function App() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 2000);
  }, []);

  return (
    <>
      {!done ? (
        <Loader />
      ) : (
        <Router>
          <Body>
            <Navbar />
            <Routes />
            <Footer />
          </Body>
        </Router>
      )}
    </>
  );
}

export default App;
