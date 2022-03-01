import React, { Component } from "react";
import {v4 as uuid} from "uuid";
import {Consumer} from "../context";

class WriteRecommendation extends Component {
  state = {
    name: "",
    email: "",
    designation: "",
    company: "",
    recommendationMessage: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (Handler,event) => {
    event.preventDefault();
    let isSuccessful = true;
    const { name } = this.state;

    if (isSuccessful) {
      this.setState({
        submitMessage: `Thank you ${name}. I am contact you soon!",
            submitMessageTextColor: "text-info`,
      });
    } else {
      this.setState({
        submitMessage: "Oops! Something went wrong. Please try again later :(",
        submitMessageTextColor: "text-danger",
      });
    }
    const newRecommendation = {
      id : uuid(),
      name : this.state.name,
      company : this.state.company,
      designation : this.state.designation,
      message : this.state.message,
    }
    Handler("ADD_RECOMMENDATION",newRecommendation);
  };

  render() {
    return <Consumer>
      {(value)=>{
        const { submitMessage, submitMessageTextColor } = this.state;
        const {Handler} = value;
        return (
          <div className="container clearfix bg-light my-5">
            <div className="container text-center align-items-center display-4 font-weight-light text-capitalize pt-5">
              <p>
                <span className="text-info">Thank you! </span>for your precious time
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-11 col-lg-5">
                <form onSubmit={this.onSubmit.bind(this,Handler)} className="py-3">
                  <div classname="form-group">
                    <label htmlfor="PersonName">Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="PersonName"
                      onChange={this.onChange}
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email *</label>
                    <input
                      type="email"
                      className="form-control req"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      onChange={this.onChange}
                    />
                  </div>
                  <div classname="form-group">
                    <label htmlfor="company">Company / Institution *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      onchange={this.onChange}
                    />
                  </div>
                  <div classname="form-group">
                    <label htmlfor="designation">Designation *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="designation"
                      onchange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                      Example textarea
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={5}
                      defaultValue={""}
                      onchange={this.onChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary float-right">
                    Submit
                  </button>
                </form>
              </div>
            </div>
    
            <div className="py-5 mx-2 text-center">
              <h5 className={submitMessageTextColor}>{submitMessage}</h5>
            </div>
          </div>
        );
      }}
    </Consumer>
    
  }
}
export default WriteRecommendation;
