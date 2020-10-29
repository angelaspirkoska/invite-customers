import React, { Component } from "react";

/**
 *Error boundaries component
 *Catch JavaScript errors anywhere in child component tree, log those errors, and display a proper UI*
 */
class Error extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    /*Error can be logged in some external server service like Rollbar. https://docs.rollbar.com/docs/react
    First we should create account in rollbar in which errors can be review.
    For this project, I will log errors in console. This aproach should not be practice when working on a real project because we want to store and review errors 
    that happened in users browser.*/

    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
export default Error;
