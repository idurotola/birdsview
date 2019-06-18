import React from "react";
import "./alerts.scss";

// Import Components
import Alert from "../../components/alert";
import Button from "../../components/button";

// Import mocked data
import alerts from "./data";

const Alerts = () => (
  <div className="alert-container">
    <div className="alert-header">
      <p className="header">Alerts</p>
      <p className="description">
        Never be surprised by your customer feedback. Create alerts to be
        notified of issues, reviews, and feedback as soon as they come in.
      </p>
    </div>
    <Button title="CREATE AN ALERT" className="button-link" icon="plus" />
    <div className="alert-list">
      {alerts.map((item, idx) => (
        <Alert key={idx} {...item} />
      ))}
    </div>
  </div>
);

export default Alerts;
