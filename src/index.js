var React = require("react");
var ReactDOM = require("react-dom");
var Detail = require("./pages/Details");
var List = require("./pages/List");
var {Router, Route, IndexRoute, useRouterHistory} = require("react-router");
var {createHashHistory} = require("history");

//npm install react-router@2.8.1
//npm install history
var appHistory = useRouterHistory(createHashHistory)({ queryKey:false})

ReactDOM.render (
    <Router history={appHistory} onUpdate={()=>window.scrollTo(0,0)}>
        <Route path="/" component={List} />
        <Route path="/detail/:re" component={Detail} />
    </Router>,
    document.getElementById("root")
)