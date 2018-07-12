import React, {Component} from 'react';
import {connect} from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    render() {
        console.log('[render] persons', this.props.persons);
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded}/>
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onPersonDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {persons: state.persons};
};

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: () => dispatch({type: 'ADD_PERSON'}),
        onPersonDeleted: (idPerson) => dispatch({type: 'DEL_PERSON', id: idPerson})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Persons);
