import React from "react";

import { Header } from "./header";
import { Footer } from './footer';
import { ListApp } from "../list/list";
import { DummyPage } from "../pages/dummyPage";
import { Profile } from "../pages/ingrement";
export class MyApp extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            curentPage:'home'
        }
    }

    onMenue = (arg)=>{
        console.log(arg);
        this.setState({
            curentPage : arg
        })
    }
    getPage(){
        const { curentPage} = this.state;
        console.log(curentPage, 'page 1')
        switch (curentPage) {
            case 'home':
              return <ListApp/>
            case 'profile':
              // return <DummyPage pageName={'profile'}/>
              return <Profile/>
            case 'contact':
              return <DummyPage pageName={'contact'}/>
        
            default:
                break;
        }
    }
    render(){
        return(
            <div className='app'>
            <Header onMenue={this.onMenue}/>
            <div className='app-body'>
              {this.getPage()}
            </div>
            <Footer/>
          </div>
        )
    }
}