import React, { Component } from "react";
import "./SMSForm.css";
import { connect } from "react-redux";
import { getAllRenters, getRenters } from "../redux/renterReducer.js";
import { getAdmin } from "../redux/adminReducer.js";
import { getProperties } from "../redux/propertiesReducer.js";

class SMSForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toArr: [],
      message: {
        to: "",
        body: ""
      },
      submitting: false,
      error: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    console.log(this.props);
    this.props.getAdmin();
    if (this.props.prop_id) {
      await this.props.getRenters(this.props.prop_id);
    } else {
      await this.props.getAllRenters(this.props.admin_id);
    }
    this.setState({
      toArr: this.props.renters.map(renter => {
        return renter.phone_number;
      })
    });
    console.log(this.props.renters);
  }

  onHandleChange = event => {
    const name = event.target.getAttribute("name");
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  };

  async onSubmit(event) {
    console.log(this.state.toArr);

    for (let i = 0; i < this.state.toArr.length; i++) {
      console.log(this.state.toArr[i]);
      await this.setState({
        error: false,
        submitting: true,
        message: {
          ...this.state.message,
          to: this.state.toArr[i]
        }
      });
      
      console.log(this.state);
      fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.message)
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            this.setState({
              error: false,
              submitting: false,
              message: {
                ...this.state.message,
                body: ""
              }
            });
          } else {
            console.log("hit error");
            this.setState({
              error: true,
              submitting: false
            });
          }
        });
    }
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        <div>
          <form
            onSubmit={this.onSubmit}
            className={this.state.error ? "error sms-form" : "sms-form"}
          >
            <div>
              <label htmlFor="to">To:</label>
              <input
                type="tel"
                name="to"
                id="to"
                value={this.state.toArr}
                onChange={this.onHandleChange}
              />
            </div>
            <div>
              <label htmlFor="body">Body:</label>
              <textarea
                name="body"
                id="body"
                value={this.state.message.body}
                onChange={this.onHandleChange}
              />
            </div>
            <button
              className="send-message-button"
              type="submit"
              disabled={this.state.submitting}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    properties: state.properties,
    admin_id: state.admin.admin.id,
    ...state.renters
  };
}

export default connect(
  mapStateTopProps,
  { getProperties, getAllRenters, getAdmin, getRenters }
)(SMSForm);
