var React = require("react");
var ReactDOM = require("react-dom");
var {Router, Route, IndexRoute, useRouterHistory} = require("react-router");
var {createHashHistory} = require("history");

var Detail = require("./pages/Details");
var List = require("./pages/List");
var App = require("./pages/App");

//npm install react-router@2.8.1
//npm install history
var appHistory = useRouterHistory(createHashHistory)({ queryKey:false})

ReactDOM.render (
    <Router history={appHistory} onUpdate={()=>window.scrollTo(0,0)}>
        <Route path="/" component={App} >
            <IndexRoute component={List} />
            <Route path=":re" component={Detail} />
        </Route>
    </Router>,
    document.getElementById("root")
)