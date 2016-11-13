import * as React from "react";

export interface SideMenuProps { history: string[] }

export class SideMenu extends React.Component<SideMenuProps, {}> {
    render() {
        var historyLinks = this.props.history.map((h) => {
            var key = Math.random().toString();
            return <div className="side-menu-item"><a key={key} href={h}>{h}</a></div>
        });
        return (
            <div className="side-menu">
                {historyLinks}
                <div className="clearfix"></div>
            </div>
        );
    }
}