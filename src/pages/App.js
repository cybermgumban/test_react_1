var React = require("react");

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Unofficial Marlon's Browser v0.1</h1>
                {this.props.children}
            </div>
        );
    }
}

module.exports = App;