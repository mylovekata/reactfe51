import React from "react";

export default function FunctionProps(props) {
  console.log(props);
  return (
    <div>
      <h3>FunctionProps</h3>
      <p>tên : {props.hoVaTen}</p>
      <p>lớp : {props.lopCuaTui}</p>
    </div>
  );
}
