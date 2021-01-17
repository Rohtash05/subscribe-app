import React from "react";
import swal from "sweetalert";

export default class Form extends React.Component {
  state = {
    email: "",
  };

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    let body = {
      email: this.state.email,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const response = await fetch(
      "http://localhost:8000/subscribe",
      requestOptions
    );
    const res = await response.json();
    if (res.success) {
      swal({
        title: "Success",
        text: res.message,
        icon: "success",
      });
    } else {
      swal({
        title: "Error",
        text: res.message,
        icon: "error",
      });
    }
    this.setState({ email: "" });
  };

  render() {
    return (
      <div className="App">
        <div className="flex flex-col max-w-4xl md:h-56 bg-white rounded-lg shadow-lg overflow-hidden md:flex-row my-10 set-center">
          <div className="md:flex items-center justify-center md:w-1/2 md:bg-gray-700">
            <div className="py-6 px-8 md:py-0">
              <h2 className="text-gray-700 text-2xl font-bold md:text-gray-100">
                Subscribe For Project Updates
              </h2>
              <p className="mt-2 text-gray-600 md:text-gray-400">
              
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-gray-700">
            <form onSubmit={(e) => this.onSubmit(e)}>
              <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
                <input
                  onChange={(e) => this.change(e)}
                  value={this.state.email}
                  className="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
                <button className="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600">
                  subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
