import * as React from "react";
import *  as ReduxActions from "redux-actions";

export interface HLinkProps { link: string, text: string, clickHandler: (url) => void }

export class HLink extends React.Component<HLinkProps, {}> {
    constructor(){
        super();
    }
    onClickHandler(url){
        this.props.clickHandler(url);
    }
    render() {
        return (<a className="btn" href={this.props.link} onClick={() => this.onClickHandler(this.props.link)}>{this.props.text}</a>);
    }
}