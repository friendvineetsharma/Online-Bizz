import React,{Component} from "react";

export default class home extends Component{
    render(){
        return(
            <div>
      <img
        src="https://images.unsplash.com/photo-1546213290-e1b492ab3eee?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974"
        alt="Home"
        style={{ width: '100%', height: 'auto' }} // Adjust the image size as needed
      />
      <div className="text-center mt-3" style={{position: 'absolute', top: '50%', left: '47%' }}>
      <a class="nav-link" href="/product"><button className="m-2 btn btn-primary">
        Add Product
        </button></a>
        <a class="nav-link" href="/shop"><button className="m-2 btn btn-success">
        Add Shop
        </button></a>
      </div>
    </div>
        )
    }
}