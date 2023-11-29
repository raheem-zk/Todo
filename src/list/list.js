// import React from 'react';

// import {List} from './list-item';
// import { Tools } from '../components/tools';


// const obj = [
//     {
//         title:'title 1',
//         descr:'first decription ',
//         isActive: true
//     },
//     {
//         title:'title 2',
//         descr:'first decription ',
//         isActive: false
//     },
//     {
//         title:'title 3',
//         descr:'first decription ',
//         isActive: true
//     },
//     {
//         title:'title 4',
//         descr:'first decription ',
//         isActive: true
//     }
// ]
// export function ListApp(){
//     function onListChange(evt){
//         console.log(evt.target.value);
//         const value = evt.target.value;
//         const newList = arr.filter((item)=>{
//             if(value =='all'){
//                 return true;
//             }else if (value=='active'){
//                 return item.isActive === true;
//             }else if (value =='non-active'){
//                 return item.isActive === false;
//             }
//             return false;
//         })
//         console.log(newList);
//     }
//     return (
//         <Tools onAction={onListChange}>
//         <div className='app-list'>
//             {
//                 obj.map((obj)=>{
//                     return <List key={obj.title} title={obj.title} descr = {obj.descr} isActive= { obj.isActive}/>
//                 })
//             }
//         </div>
//         </Tools>
//     )
// }



import React from "react";
import { SimpleList } from "./simpleList";
import { Tools } from '../components/tools';
const MyContext = React.createContext(100);


export class ListApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            activeState: 'all',
            message: '',
            value:true
        };
    }
    componentDidMount() {
        console.log('mount');
        fetch('./data.json')
            .then((data) => {
                return data.json();
            })
            .then((data) => {
                this.setState({
                    data: data
                })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.message !== this.state.message) {
            this.setState({
                message: 'updated message'
            });
        }

        console.log('---updated');
    }

    componentWillUnmount() {
        console.log('Unmount')
    }
    onListChange(evt) {
        console.log(evt.target.value);
        const value = evt.target.value;
        // const newList = arr.filter((item) => {
        //     if (value == 'all') {
        //         return true;
        //     } else if (value == 'active') {
        //         return item.isActive === true;
        //     } else if (value == 'non-active') {
        //         return item.isActive === false;
        //     }
        //     return false;
        // })
        // console.log(newList);
        // this.setState({
        //     data: newList
        // })

        this.setState({
            activeState: value,
        })
    }
    handleDelete = (item) => {
        console.log('delete', item);
        const newList = this.state.data.filter((x) => x.id !== item.id);
        this.setState({
            data: newList
        })
    }
    handleLabelClick = (arg) => {
        this.setState({
            activeState: arg
        })
    }
    handleCheckbox =(arg)=>{
        this.setState({
            value : arg.target.checked
        })
    }
    render() {
        const { data, activeState, value } = this.state;
        const newList = data.filter((item) => {
            if (activeState === 'all') {
                return true;
            } else if (activeState === 'active') {
                return item.isActive === true;
            } else {
                return item.isActive === false;
            }
        })
        return (
            <div>
                <div>
                    <input checked={value} onChange={this.handleCheckbox} type="checkbox"/> Show lebel
                </div>
                <MyContext.Provider value={this.state.value}>
                <Tools value={activeState} onAction={this.onListChange.bind(this)}>
                    <SimpleList data={newList} onAction={this.handleDelete} onLabelClick={this.handleLabelClick} />
                </Tools>
                </MyContext.Provider>
            </div>

        )
    }
}

export {
    MyContext
}