import * as React from "react";
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { Hello } from "./components/Hello";
import { Home } from "./home/home";
import { TopMenu } from "./menu/topmenu";
import { SideMenu } from "./menu/sidemenu";
import { About } from "./about/about";
import {WebPack} from "./configs/webpack";
import {Configs} from "./configs/configs";
import {TsConfig} from "./configs/tsconfig";
import {PackageConfig} from "./configs/package";

export interface AppProps{

}


export class AppState {
    history = [];
}

export class App extends React.Component<AppProps, {}>{
    state: AppState = new AppState();

    constructor(){
        super();
        this.state = {
            history: []
        };
    }
    addHistory(url: string){
        var self = this;
        var newHistory = self.state.history.concat(url);
        if(newHistory.length > 10){ newHistory.shift(); }
        this.setState({
            history: newHistory
        });
    }
    render(){
        var self = this;
        var ConfigsWrapper = React.createClass({
            render(){
                return (
                    <Configs clickHandler={(url) => self.addHistory(url)} />
                )
            }
        });
        return (
            <div id="main-container">
                <TopMenu clickHandler={(url) => this.addHistory(url)} />
                <div className="row">
                    <div className="col-md-2 hidden-xs hidden-sm">
                        <SideMenu history={this.state.history} />
                    </div>
                    <div className="col-md-10">
                        <Router history={hashHistory} >
                            <Route path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/address" component={Address} />
                            <Route path="/address/compiler" component={CompilerWrapper} />   
                            <Route path="/configs" component={ConfigsWrapper} />
                            <Route path="/configs/tsconfig" component={TsConfig} />
                            <Route path="/configs/webpack" component={WebPack} />  
                            <Route path="/configs/package" component={PackageConfig} />                                                                       
                            <Route path="*" component={NotFound} />
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

const Address = () => <h1>We are located in London</h1>
const NotFound = () => <h1>404.. This page is not found!</h1>
const CompilerWrapper = () => <Hello compiler="Typescript" framework="React" />
