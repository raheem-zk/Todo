import React from "react";

export class DummyPage extends React.Component {
    
    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.pageName}</h1>
                </div>
                <div>
                    <h3>{this.props.pageName} page contants</h3>
                </div>
            </div>
        )
    }
}