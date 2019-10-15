import React from "react";
import { isProperty } from "@babel/types";

const ShowPanel = (props) => {
  // If there is no person selected from the sidebar this component should render an empty div with the id "show-panel", else it should render the format below with the selected person's info
if (props.person === undefined )
return (<div> <p>Click on a name to the left!</p> </div>) 

else
  return (
    <div onClick={(e)=>props.erasePerson(e, props.person)}id="show-panel">
      <button className="delete-button"> Delete </button>
      <img className="show-image" src="" alt="" />
      <h1> {props.person.name}</h1>
      <span>{props.person.bio}</span>
    </div>
  );
};

export default ShowPanel;
