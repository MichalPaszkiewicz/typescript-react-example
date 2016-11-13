import * as React from "react";

export interface AboutProps { }

export class About extends React.Component<AboutProps, {}> {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>
                        This app is build from knowledge aquired from following these tutorials:
                        <br/>
                        <a href="https://www.typescriptlang.org/docs/handbook/react-&-webpack.html">Typescript React and Webpack</a>
                        <br/>
                        <a href="http://redux.js.org/docs/basics/">handy guide to redux</a>
                        <br/>
                        <a href="http://www.mattgreer.org/articles/typescript-react-and-redux/">Typescript Redux</a>
                </p>
            </div>
        );
    }
}