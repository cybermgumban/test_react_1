var React = require("react");
var ReactDOM = require("react-dom");
var Detail = require("./pages/Details");
var {Router, Route, IndexRoute, useRouterHistory} = require("react-router");
var {createHashHistory} = require("history");

ReactDOM.render (
    <Detail />,
    document.getElementById("root")
) 