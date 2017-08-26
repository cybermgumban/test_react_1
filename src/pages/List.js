var React = require("react");
var {Link} = require("react-router");

class List extends React.Component {
    render() {
        return  (
        <div>
        <p>This is the list page!</p>;
        <ul>
            <li><Link to="/detail/react">React</Link></li>
            <li><Link to="/detail/react-native">React Native</Link></li>
            <li><Link to="/detail/jest">Jest</Link></li>
        </ul>
        </div>
        );
    }
}

module.exports = List;