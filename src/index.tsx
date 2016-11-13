import * as React from "react";
import * as ReactDOM from "react-dom";
import * as App from './App';

declare function require(name: string): any;
require("../less/index.less");

ReactDOM.render(
    <App.App />,
    document.getElementById("super-container")
);