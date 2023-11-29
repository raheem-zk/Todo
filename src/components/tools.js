import React from "react";

export class Tools extends React.Component{
    render(){
        const { children, onAction, value} = this.props;
        // return children;
        return (
            <div>
                <div className="list-header"> 
                <select value={value} onChange={onAction} name="status">
                    <option value='all'>All</option>
                    <option value='active'>Active</option>
                    <option value='non-active'>Non Active</option>
                </select>
                </div>
                {children}
                <div className="list-footer"> Some info here</div>
            </div>
        )
    }
}