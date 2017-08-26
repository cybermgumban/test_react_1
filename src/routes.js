var React = require("react");
var {Route, IndexRoute} = require("react-router");

var Detail = require("./pages/Details");
var List = require("./pages/List");
var App = require("./pages/App");

var routes = (
        <Route path="/" component={App} >
            <IndexRoute component={List} />
            <Route path=":re" component={Detail} />
        </Route>
);

module.exports = routes;