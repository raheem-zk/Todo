import React from "react";

import './header.css';

export function Header (props){
  const { onMenue } = props;
    return (
        <div className='app-header'>
        <span className='header-name'>ZK Codes</span>
        <span className='header-nav-item' onClick={()=>{
          onMenue('home')
        }}>home</span>
        <span className='header-nav-item' onClick={()=>{
          onMenue('profile')
        }}>profile</span>
        <span className='header-nav-item' onClick={()=>{
          onMenue('contact')
        }}>contact</span>
      </div>
    )
}