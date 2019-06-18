import React from "react";

// Import Icons
import iosIcon from "../../assets/ios.png";
import androidIcon from "../../assets/android.png";
import slackIcon from "../../assets/slack.png";
import emailIcon from "../../assets/email.png";
import rightIcon from "../../assets/chevron-right.png";
import plusIcon from "../../assets/plus.png";

const mapIconName = {
  ios: iosIcon,
  android: androidIcon,
  slack: slackIcon,
  email: emailIcon,
  right: rightIcon,
  plus: plusIcon
};

const Icon = ({ name }) => <img src={mapIconName[name]} alt={`${name} icon`} />;

export default Icon;
