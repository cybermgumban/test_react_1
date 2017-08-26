var React = require("react");
var {Route, IndexRoute} = require("react-router");

var Detail = require("./pages/Details");
var List = require("./pages/List");
var App = require("./pages/App");
var User = require("./pages/User");

var routes = (
        <Route path="/" component={App} >
            <IndexRoute component={List} />
            <Route path="detail/:re" component={Detail} />
            <Route path=":usr/events" component={User} />
        </Route>
);

module.exports = routes;