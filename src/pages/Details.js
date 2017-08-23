var React = require("react");
var Chance = require("chance");

//npm install chance
//need to input these to make it work
var chance = new Chance();

class Detail extends React.Component {
    constructor(props) {
        super(props);

        var people = [];
        
        for (var i = 0; i<10; i++) {
            people.push({
                name: chance.first(),
                country: chance.country({full:true})
            });
        }

        this.state = { people }
    }

    render() {

        return (
            <div>
                {this.state.people.map((person, index) => (
                    <p key={index}>Hello {person.name}, from {person.country}</p>
                ))}
            </div>
        );
    }
}

module.exports = Detail;