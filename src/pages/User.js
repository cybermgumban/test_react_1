var React = require("react");
var ajax = require("superagent");

class User extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: []
        };
    }

    componentWillMount() {
    var baseUrl = "https://api.github.com/users";
        ajax.get(`${baseUrl}/${this.props.params.usr}/events`)
        .end((error, response) => {
            if (!error && response) {
                console.dir(response.body)
                this.setState({ user: response.body });
            } else {
                console.log(`Error fetching user ${this.props.params.usr}`, error)
            }
        })    
    }

    render() {
        return (
            <div>
                <h2>
                    {this.props.params.usr}
                </h2>
                {this.state.user.map((user, index)=> (
                    <p key={index}>
                        ID: {user.id} <br />
                        Type: {user.type}
                    </p>
                ))}
            </div>
        );
    }
}

module.exports = User;