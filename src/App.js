import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Industries from "./components/industries/Industries";
import Carrier from "./components/carrier/Carrier";
import News from "./components/news/News";
import Company from "./components/company/Company";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/service" component={Services} />
          <Route path="/industries" component={Industries} />
          <Route path="/carrier" component={Carrier} />
          <Route path="/news" component={News} />
          <Route path="/company" component={Company} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
