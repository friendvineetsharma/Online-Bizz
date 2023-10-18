import React, { Component } from "react";

export default class NewProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: null,
      name: "",
      description: "",
      category: "",
      quantity: 0,
      price: 0,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileChange = (event) => {
    const file = event.target.files[0];
    this.setState({ photo: file });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here, including sending the data to your backend.
    console.log("Form submitted with data:", this.state);
    // Display the data in an alert
    alert("Form submitted with data: " + JSON.stringify(this.state));
    this.setState({
      photo: null,
      name: "",
      description: "",
      category: "",
      quantity: 0,
      price: 0,
    });
  };

  render() {
    return (
      <form className="container my-5" onSubmit={this.handleSubmit}>
        <div className='container text-center my-5'>
            <h2>Add New Product</h2>
        </div>
        
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">
            Upload Photo:
          </label>
          <input
            type="file"
            className="form-control"
            name="photo"
            onChange={this.handleFileChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            className="form-control"
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={this.state.category}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity:
          </label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={this.state.price}
            onChange={this.handleInputChange}
          />
        </div>

        <div class="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
                Create Shop
            </button>
        </div>
      </form>
    );
  }
}