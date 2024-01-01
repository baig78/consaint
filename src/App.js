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
import AdministraionDeployment from "./components/pages/administraionDeployment/AdministraionDeployment";
import staffingTraining from "./components/pages/staffingTraining/staffingTraining";
import CloudSolutions from "./components/pages/cloudSolutions/CloudSolutions";
import DataManagement from "./components/pages/dataManagement/DataManagement";
import businessIntelligence from "./components/pages/businessIntelligence/businessIntelligence";
import DataScienceArtificialIntelligence from "./components/pages/dataScienceArtificialIntelligence/DataScienceArtificialIntelligence";
import Integration from "./components/pages/integration/Integration";
import BankingCapitalMarkets from "./components/pages/bankingCapitalMarkets/BankingCapitalMarkets";
import Healthcare from "./components/pages/healthcare/Healthcare";
import Insurance from "./components/pages/insurance/Insurance";
import LifeSciences from "./components/pages/lifeSciences/LifeSciences";
import Telecom from "./components/pages/telecom/Telecom";

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
          <Route
            path="/administraion-and-deployment"
            component={AdministraionDeployment}
          />
          <Route path="/staffing-and-training" component={staffingTraining} />
          <Route path="/cloud-solutions" component={CloudSolutions} />
          <Route path="/data-management" component={DataManagement} />
          <Route
            path="/business-intelligence"
            component={businessIntelligence}
          />
          <Route
            path="/data-science-and-artificial-intelligence"
            component={DataScienceArtificialIntelligence}
          />
          <Route path="/integration" component={Integration} />
          <Route
            path="/banking-and-capital-markets"
            component={BankingCapitalMarkets}
          />
          <Route path="/healthcare" component={Healthcare} />
          <Route path="/insurance" component={Insurance} />
          <Route path="/life-sciences" component={LifeSciences} />
          <Route path="/telecom" component={Telecom} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
