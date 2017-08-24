var React = require("react");
var ajax = require("superagent");
//var Chance = require("chance");

//npm install chance
//need to input these to make it work
//var chance = new Chance();

class Detail extends React.Component {
    constructor(props) {
        super(props);
/*
        this.renderCommits = this.renderCommits.bind(this);
        this.renderForks = this.renderForks.bind(this);
        this.renderPulls = this.renderPulls.bind(this);
*/

        this.state = {
            result: [],
            commits: [],
            forks: [],
            pulls: []
        };
    }

    componentWillMount() {

        this.fFeed("commits");
        this.fFeed("forks");
        this.fFeed("pulls");
/*        ajax.get("https://api.github.com/repos/facebook/react/commits")
        .end((error, response) => {
            if (!error && response) {
                console.dir(response.body)
                this.setState({ commits: response.body });
            } else {
                console.log("There was an error fetching from Github", error)
            }
        })

        ajax.get("https://api.github.com/repos/facebook/react/forks")
        .end((error, response) => {
            if(!error && response) {
                console.dir(response.body);
                this.setState({ forks: response.body });
            } else {
                console.log("There was an error fetching from Github", error)
            }
        })

        ajax.get("https://api.github.com/repos/facebook/react/pulls")
        .end((error, response) => {
            if(!error && response) {
                console.dir(response.body);
                this.setState ({ pulls: response.body });
            } else {
                console.log("There was an error fetching from Github")
            }
        }) 
    }
*/
    }

fFeed(type) {
        ajax.get(`https://api.github.com/repos/facebook/react/${type}`)
        .end((error, response) => {
            if (!error && response) {
                console.dir(response.body)
                this.setState({ [type]: response.body });
            } else {
                console.log(`Error fetching ${type}`, error)
            }
        })    
}

/*
        renderCommits() {
            console.log("Pressed Commit");
            this.setState( {result:
            <div>
                {this.state.commits.map((commit, index) => (
                    <p key={index}>
                        <strong>
                            {commit.author ? commit.author.login : "Anonymous"}:
                        </strong><br />
                        <a href="commit.html_url">
                            {commit.commit.message}
                        </a>
                    </p>
                ))}
            </div>
        });
        }

        renderForks() {
            console.log("Pressed Forks");
            this.setState( {result:
            <div>
                {this.state.forks.map((forks, index) => (
                    <p key={index}>
                        <strong>
                            {forks.default_branch}:
                        </strong><br />
                        <a href="forks.deployments_url">
                            {forks.description}
                        </a>
                    </p>
                ))}
            </div>
            });     
        }        

        renderPulls() {
            console.log("Pressed Pulls");
            this.setState( {result:
            <div>
                {this.state.pulls.map((pulls, index) => (
                    <p key={index}>
                        <strong>
                            {pulls.user.login ? pulls.user.login : "Anonymous"}:
                        </strong><br />
                        <a href={"pulls.html_url"}>
                            {pulls.id}
                        </a>
                    </p>
                ))}
            </div>
            });    
        } 
*/

    renderBtnClick(mode) {
            console.log(`Pressed ${mode}`);

            if (mode === "Commits") {
            this.setState( {result:
            <div>
                {this.state.commits.map((commit, index) => (
                    <p key={index}>
                        <strong>
                            {commit.author ? commit.author.login : "Anonymous"}:
                        </strong><br />
                        <a href="commit.html_url">
                            {commit.commit.message}
                        </a>
                    </p>
                ))}
            </div>
            });
            } else if (mode === "Forks") {
            this.setState( {result:
            <div>
                {this.state.forks.map((forks, index) => (
                    <p key={index}>
                        <strong>
                            {forks.default_branch}:
                        </strong><br />
                        <a href="forks.deployments_url">
                            {forks.description}
                        </a>
                    </p>
                ))}
            </div>
            }); 
            } else if (mode === "Pulls") {
            this.setState( {result:
            <div>
                {this.state.pulls.map((pulls, index) => (
                    <p key={index}>
                        <strong>
                            {pulls.user.login ? pulls.user.login : "Anonymous"}:
                        </strong><br />
                        <a href={"pulls.html_url"}>
                            {pulls.id}
                        </a>
                    </p>
                ))}
            </div>
            });    
            }
    }

    render() {
        return (
            <div>
                <button onClick={this.renderBtnClick.bind(this, "Commits")}>
                    Commits
                </button>
                <button onClick={this.renderBtnClick.bind(this, "Forks")}>
                    Forks
                </button>
                <button onClick={this.renderBtnClick.bind(this, "Pulls")}>
                    Pulls
                </button> <br />
                {this.state.result}
            </div>
        );
    }
}

module.exports = Detail;