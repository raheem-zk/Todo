import React from "react";
import { List } from "./list-item";
import { Check } from "./label-class";
export function SimpleList(props){
    const { data , onAction, onLabelClick} = props;
    return(
        <div className='app-list'>
            <div><Check/>helo</div>
        {
            data.map((obj) => {
                return <List key={obj.title}
                 title={obj.title}
                 descr={obj.descr} 
                 isActive={obj.isActive} 
                 onDelete={ ()=>{
                    onAction(obj)
                 }} 
                 onLabelClick={onLabelClick}/>
            })
        }
    </div>
    )
}