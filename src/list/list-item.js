import React from "react";

import {Label} from './label-class';

import './list.css';
export function List(props) {
    const { title, descr, isActive, onDelete ,onLabelClick} = props;
    return (
      <div className='list-title'>
        <hr/>
        <h2>{title}</h2>
        <p>{descr}</p>
        <div className='list-labels'>
            <Label isActive={isActive} onAction={onLabelClick}/>
        </div>
        <div className="delete-btn">
          <label onClick={onDelete}>Delete</label>
        </div>
      </div>
    )
  }