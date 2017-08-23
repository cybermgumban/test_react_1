var React = require("react");
var ajax = require("superagent");
//var Chance = require("chance");

//npm install chance
//need to input these to make it work
//var chance = new Chance();

class Detail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commits: []
        };
    }

    componentWillMount() {
        ajax.get("https://api.github.com/repos/facebook/react/commits")
        .end((error, response) => {
            if (!error && response) {
                this.setState({ commits: response.body });
            } else {
                console.log("There was an error fetching fro Github", error)
            }
        })
    }

    render() {

        return (
            <div>
                {this.state.commits.map((commit, index) => (
                    <p key={index}>Some commit data here.</p>
                ))}
            </div>
        );
    }
}

module.exports = Detail;