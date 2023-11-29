import React, { useContext } from "react";
import './label.css';

// function componenet
// export function Label(){
//     return (
//         <label>label1</label>
//     );
// }


//  class componenet

import { MyContext } from "./list";

export class Label extends React.Component {
    render() {
      const props =this.props;
      const style = props.isActive ? {background: 'green'} : {background:'orange'} 
      return <label style={style} 
      onClick={()=>{
        props.onAction(props.isActive ? 'active' : 'non-active');
      }}>label1 B class component</label>;
    }
  }

export function Check(){
  const val = useContext(MyContext);
  console.log(val);
  if(val === false){
    return null;
  }
  return (
     <div>
      h1 the check is on
     </div>
  )
}