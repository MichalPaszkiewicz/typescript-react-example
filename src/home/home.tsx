import * as React from "react";

export interface HomeProps { }

export class Home extends React.Component<HomeProps, {}> {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <h1>Home</h1>
                </div>
            </div>
        );
    }
}