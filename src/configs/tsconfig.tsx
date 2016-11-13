import * as React from "react";

export interface TsConfigProps { }

export class TsConfig extends React.Component<TsConfigProps, {}> {
    render() {
        return (
            <div className="config"><pre>
                <p>{'{'}</p>
                <p>    "compilerOptions": {'{'}</p>
                <p>        "outDir": "./dist/",</p>
                <p>        "sourceMap": true,</p>
                <p>        "noImplicitAny": false,</p>
                <p>        "module": "commonjs",</p>
                <p>        "target": "es5",</p>
                <p>        "jsx": "react",</p>
                <p>        "moduleResolution": "node"</p>
                <p>    },</p>
                <p>    "files": [</p>
                <p>        "./src/index.tsx"</p>
                <p>    ]</p>
                <p>}                                    </p>
                </pre>
            </div>
        );
    }
}