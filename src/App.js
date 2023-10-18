import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import TodosList from './components/home.component';
import EditTodo from './components/addshop.component';
import CreateTodo from './components/addproduct.component';


function App() {
  return (
   <Router> 
    <nav class="navbar navbar-expand-lg ">
  <a class="navbar-brand" href="/">Online Bizz.</a>
  <div class="collapse navbar-collapse ms-5 " id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active ms-2">
        <a class="nav-link" href="/shop">Add Shop</a>
      </li>
      <li class="nav-item  ms-2">
        <a class="nav-link" href="/product">Add Product</a>
      </li>
    </ul>
  </div>
</nav>  
        <Routes>
          <Route path='/' exact Component={TodosList}/>
          <Route path='/shop' exact Component={EditTodo}/>
          <Route path='/product' exact Component={CreateTodo}/>
        </Routes>
        
   </Router>
  );
}

export default App;
