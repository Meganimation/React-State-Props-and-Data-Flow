import React from "react";

const Sidebar = (props) => {
  
return <ul  className="sidebar-ul">
  
  


{props.person.map((person)=>{
    return <p onClick={(e)=>props.showShowPanel(e,  person)}>{person.name}</p>})}/>
</ul>;
  }


export default Sidebar;



