import React from "react";
import axios from "axios";
import toast from "toasted-notes";
import "toasted-notes/src/styles.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isSubmittingForm: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.email);
    this.setState({
      isSubmittingForm: true,
    });
    axios
      .get(
        `https://us-central1-gracehouse-751c0.cloudfunctions.net/addSubscriber?email=${this.state.email}`
      )
      .then((response) => {
        this.setState({
          isSubmittingForm: false,
        });
        console.log("success");
        console.log(response);
        if (response.status === 200) {
          this.resetForm();
          toast.notify("You have been successfully subscribed to our updates.");
        }
      });
  }

  resetForm() {
    this.setState({
      email: "",
    });
  }

  componentDidMount() {}

  render() {
    return (
      <section className="gh-sign-up">
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            placeholder="john@smith.com"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="submit"
            value={this.state.isSubmittingForm ? "Loading..." : "Sign Up"}
            disabled={this.state.isSubmittingForm}
          />
        </form>
      </section>
    );
  }
}

export default SignUp;
