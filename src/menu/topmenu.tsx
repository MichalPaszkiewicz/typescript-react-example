import * as React from "react";
import { HLink } from "../components/hlink";

export interface TopMenuProps { clickHandler: (url)=>void }

export class TopMenu extends React.Component<TopMenuProps, {}> {
    constructor(){
        super();

    }
    onClickHandler(url: string){
        this.props.clickHandler(url);
    }
    render() {
        return (
            <div className="top-menu">
                <h1>React</h1>
                <HLink clickHandler={this.props.clickHandler} link="#/" text="Home" />
                <HLink clickHandler={this.props.clickHandler} link="#/about" text="About" />                
                <HLink clickHandler={this.props.clickHandler} link="#/address" text="Address" />                
                <HLink clickHandler={this.props.clickHandler} link="#/address/compiler" text="Compiler" />
                <HLink clickHandler={this.props.clickHandler} link="#/configs/" text="Configs" />                
            </div>
        );
    }
}