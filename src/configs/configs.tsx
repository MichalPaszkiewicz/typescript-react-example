import * as React from "react";
import { HLink } from "../components/hlink";

export interface ConfigsProps { clickHandler: (url)=>void }

export class Configs extends React.Component<ConfigsProps, {}> {
    constructor(){
        super();

    }
    render() {
        return ( 
            <div className="config">
                <div><HLink clickHandler={this.props.clickHandler} link="#/configs/package" text="package" /></div>
                <div><HLink clickHandler={this.props.clickHandler} link="#/configs/webpack" text="webpack" /></div>
                <div><HLink clickHandler={this.props.clickHandler} link="#/configs/tsconfig" text="tsconfig" /></div>
            </div>
        );
    }
}