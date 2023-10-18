import React, { Component } from 'react';

class ShopForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      name: '',
      description: '',
    };
  }

  handleFileChange = (e) => {
    this.setState({ photo: e.target.files[0] });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  
    // Handle form submission, e.g., send data to your API
    const data = {
      photo: this.state.photo,
      name: this.state.name,
      description: this.state.description,
    };
  
    // Log the data in the console
    console.log(data);
  
    // Show the data in an alert
    alert(JSON.stringify(data));
  
    this.setState({
      photo: null,
      name: '',
      description: '',
    });
  };

  render() {
    return (
      <div className="container my-5 text-center">
        <h2>Create New Shop</h2>
        <form className='text-start' onSubmit={this.handleSubmit}>
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
              onChange={this.handleNameChange}
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
              onChange={this.handleDescriptionChange}
            />
          </div>
          <div class="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
                Create Shop
            </button>
          </div>
          
        </form>
      </div>
    );
  }
}

export default ShopForm;
