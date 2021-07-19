import "./App.css";
import Navbar from "./components/myNavbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginRoninWallet from "./pages/LoginRoninWallet";
import LoginMetaMask from "./pages/LoginMetaMask";
import Thankyoupage from "./pages/Thankyoupage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Axie Marketplace";
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/signinwithroninwallet">
            <LoginRoninWallet />
          </Route>
          <Route exact path="/signinwithmetamask">
            <LoginMetaMask />
          </Route>
          <Route exact path="/thankyoupage">
            <Thankyoupage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
