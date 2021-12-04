import React from "react";
import "./Box.css";
import Name from "./name/Name";
import Image from "./img/Image";
import Title from "./name/Title";
import Icon from "./icon/Icon";
import Button from "./button/Button";

const Box = (props) => {
  console.log(props);
  return (
    <div className="Box">
      <Image image={props.name.img} />
      <Name name={props.name.name} />
      <Title title={props.name.infor}></Title>
      <Icon icon={props.name}></Icon>
      <Button></Button>
    </div>
  );
};

export default Box;
