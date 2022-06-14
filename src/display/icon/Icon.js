import React from "react";
import "./Icon.css";
import "boxicons";
const Icon = (props) => {
  return (
    <div className="icon">
      <a href={props.icon.facebook}>
        <box-icon type="logo" name="facebook"></box-icon>
      </a>
      <a href={props.icon.youtube}>
        <box-icon name="instagram" type="logo"></box-icon>
      </a>
      <a href="https://www.youtube.com/watch?v=wHTaG9-gj3Q">
        <box-icon name="youtube" type="logo"></box-icon>
      </a>
      <a href="https://github.com/votrungquantp15">
        <box-icon name="github" type="logo"></box-icon>
      </a>
    </div>
  );
};

export default Icon;
