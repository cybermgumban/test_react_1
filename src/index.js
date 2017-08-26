var React = require("react");
var ReactDOM = require("react-dom");
var {Router, useRouterHistory} = require("react-router");
var {createHashHistory} = require("history");

var routes = require("./routes");

//npm install react-router@2.8.1
//npm install history
var appHistory = useRouterHistory(createHashHistory)({ queryKey:false})

ReactDOM.render (
    <Router history={appHistory} onUpdate={()=>window.scrollTo(0,0)}>
        {routes}
    </Router>,
    document.getElementById("root")
)