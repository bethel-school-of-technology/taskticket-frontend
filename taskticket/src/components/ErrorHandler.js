import React, { Component } from "react";

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { errorOccured: false, errorDetails: "", errorInfo: "" };
  }

  componentDidCatch(error, info) {
    this.setState({ errorOccured: true, errorDetails: error, errorInfo: info });
  }

  render() {
    return this.state.errorOccured ? (
      <div className="error">
        <h4 className="App_Name" id="notFound">
          Something went wrong!
        </h4>
        <h3 className="Error_Message">{this.state.errorDetails}</h3>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorHandler;
