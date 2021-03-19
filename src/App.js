import Navbar from "./Navbar"; 
import Footer from "./Footer"; 
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
            <div className="content"> 
              <Switch>
                  <Route exact path="/"> <HomePage/> </Route>
                  <Route exact path="/products"> <ProductsPage/> </Route>
                  <Route exact path="/signup"> <SignUpPage/> </Route>
                  <Route exact path="/login"> <LoginPage/> </Route>
              </Switch>
            </div>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
