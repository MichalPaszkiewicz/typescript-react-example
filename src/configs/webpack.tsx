import * as React from "react";

export interface WebPackProps { }

export class WebPack extends React.Component<WebPackProps, {}> {
    render() {
        return (
            <div className="config"><pre>
                <p>module.exports = {'{'}</p>
                <p>    entry: "./src/index.tsx",</p>
                <p>    output: {'{'}</p>
                <p>        filename: "bundle.js",</p>
                <p>        path: __dirname + "/dist"</p>
                <p>    },</p>
<p></p>
                <p>    // Enable sourcemaps for debugging webpack's output.</p>
                <p>    devtool: "source-map",</p>
<p></p>
                <p>    resolve: {'{'}</p>
                <p>        // Add '.ts' and '.tsx' as resolvable extensions.</p>
                <p>        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]</p>
                <p>    },</p>
<p></p>
                <p>    module: {'{'}</p>
                <p>        loaders: [</p>
                <p>            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.</p>
                <p>            {'{'} test: /\.tsx?$/, loader: "ts-loader" },</p>
                <p>            {'{'} test: /\.less?$/, loader: "style!css!less"}</p>
                <p>        ],</p>
<p></p>
                <p>        preLoaders: [</p>
                <p>            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.</p>
                <p>            {'{'} test: /\.js$/, loader: "source-map-loader" }</p>
                <p>        ]</p>
                <p>    },</p>
<p></p>
                <p>    // When importing a module whose path matches one of the following, just</p>
                <p>    // assume a corresponding global variable exists and use that instead.</p>
                <p>    // This is important because it allows us to avoid bundling all of our</p>
                <p>    // dependencies, which allows browsers to cache those libraries between builds.</p>
                <p>    externals: {'{'}</p>
                <p>        "react": "React",</p>
                <p>        "react-dom": "ReactDOM"</p>
                <p>    },</p>
                <p>};                                                                                                 </p>
                </pre>
            </div>
        );
    }
}