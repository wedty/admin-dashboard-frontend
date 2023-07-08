
import './App.css';
import { Topbar } from './components/topbar/Topbar';
import { Sidebar } from './components/sidebar/Sidebar';

import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './Home/Home';
import { Users } from './users/Users.jsx'
import { User } from './user/User.jsx'
import { NewUser } from './newUser/NewUser';
import { Products } from './products/Products';
import { Product } from './product/Product';
import { NewProd } from './newProd/NewProd';
function App() {
  return (
        <Router>
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
<Route exact path= "/" element={ <Home/>}/>
<Route exact path= "/users" element={ <Users/>}/>
<Route path= "/users/:userId" element={ <User/>}/>
<Route path= "/newUser" element={ <NewUser/>}/>
<Route exact path= "/products" element={ <Products/>}/>
<Route path= "/products/:prodId" element={ <Product/>}/>
<Route path= "/newProd" element={ <NewProd/>}/>

        </Routes>

      </div>
    </div>
    </Router>
  );
}

export default App;
