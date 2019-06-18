import React, { Fragment } from "react";
import "./alert.scss";

// Import Components
import Tags from "../tags";
import Icon from "../icon";

const Alert = ({ integrations, tags, type, title, frequency }) => (
  <div className="alert-item">
    <div className="alert-details">
      <div className="app-icon">
        <Icon name={type} />
      </div>
      <div className="app-details">
        <div className="name">{title}</div>
        {tags.length ? (
          <Tags data={tags} size={15} />
        ) : (
          <div className="comment">
            <span>All new entries</span>
          </div>
        )}
      </div>
    </div>
    <div className="alert-tools">
      <div className="alert-integration">
        <div className="integrations">
          {integrations.slack && <Icon name="slack" />}
          {integrations.email && (
            <Fragment>
              <span className="plus">+</span>
              <Icon name="email" />
            </Fragment>
          )}
        </div>
        <div className="frequency">{frequency.join(", ")}</div>
      </div>

      <div className="next-button">
        <Icon name="right" />
      </div>
    </div>
  </div>
);

export default Alert;
