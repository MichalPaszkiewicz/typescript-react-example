import * as React from "react";

export interface PackageConfigProps { }

export class PackageConfig extends React.Component<PackageConfigProps, {}> {
    render() {
        return (
            <div className="config"><pre>
                <p>{'{'}</p>
                <p>    "name": "reactts",</p>
                <p>    "version": "0.0.0",</p>
                <p>    "description": "a new react app with typescript",</p>
                <p>    "scripts": {'{'}</p>
                <p>        "watch": "webpack --config webpack.config.js --progress --profile --colors --watch",</p>
                <p>        "build": "webpack --config webpack.config.js --progress --profile --colors",</p>
                <p>        "release": "webpack --config webpack.config.js --progress --profile --colors --optimize-minimize --optimize-dedupe"</p>
                <p>    },</p>
                <p>    "author": "Michal Paszkiewicz",</p>
                <p>    "license": "MIT",</p>
                <p>    "dependencies": {'{'}</p>
                <p>        "@types/immutable": "^3.8.4",</p>
                <p>        "@types/react": "^0.14.47",</p>
                <p>        "@types/react-dom": "^0.14.18",</p>
                <p>        "@types/react-redux": "^4.4.32",</p>
                <p>        "@types/react-router": "^2.0.38",</p>
                <p>        "@types/redux": "^3.6.31",</p>
                <p>        "@types/redux-actions": "^0.8.31",</p>
                <p>        "immutable": "^3.8.1",</p>
                <p>        "less": "^2.1.2",</p>
                <p>        "less-loader": "^2.0.0",</p>
                <p>        "react": "^15.3.2",</p>
                <p>        "react-dom": "^15.3.2",</p>
                <p>        "react-router": "^3.0.0"</p>
                <p>        "redux-actions": "^0.13.0"</p>
                <p>    },</p>
                <p>    "devDependencies": {'{'}</p>
                <p>        "css-loader": "^0.25.0",</p>
                <p>        "react-redux": "^4.4.5"</p>
                <p>        "redux": "^3.6.0"</p>
                <p>        "source-map-loader": "^0.1.5",</p>
                <p>        "style-loader": "^0.13.1",</p>
                <p>        "ts-loader": "^1.2.0",</p>
                <p>        "typescript": "^2.1.6"</p>
                <p>    }</p>
                <p>}</p>
                </pre>
            </div>
        );
    }
}