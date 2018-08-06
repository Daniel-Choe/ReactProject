// { Component } is equivalent to
// const Component = React.Component;
import React, { Component } from 'react';

// Refactored below (Functional component vs. Class based)
// const SearchBar = () => {
//     return <input />;
// };

// ES6 class based component that has properties and methods; additional functionalities are possible
// Every class based component needs a render method and deals with state
// When importing { Component }, you can remove 'React.' from 'extends React.Component'
class SearchBar extends Component {

    // Defines/Re-initializes state in a class based component
    // Constructor is first and only function called automatically when a new instance of the class is created
    constructor(props) {
        super(props); // super makes a call to the parent class

        // Whenever we change our state, the component instantly re renders along with any children it contains
        this.state = { term: '' }; // state is initialized by assigning a new object, property 'term' will get updates/changes
    }

    render() {
        // onChange is a vanilla (not a custom) event
        // Whenever we have an event handler, they are always called with an 'event' object which can be passed
        // as any name (e.g. 'e', 'event', 'something'; default is 'event')
        // return <input onChange={this.onInputChange} />; // refactored with arrow function below
        // return <input onChange={(event) => console.log(event.target.value) } />; // refactored again
        // if passing a singular argument, you can get rid of parentheses
        // return <input onChange={event => console.log(event.target.value) } />;
        return (
            <div className="search-bar">
                <input
                    // value is provided by this.state.term
                    value={this.state.term} // input now becomes a controlled component, value is set by state, value only changes when state changes
                    onChange={event =>
                      {
                        console.log(event.target.value)
                        // this.setState({ term: event.target.value }) // whenever we update a component in some fashion, it is done with state
                        // when user enters text, this line triggers the state (from initial assigned value to user input) and re renders the component
                        // whenever we reference a javascript variable, we use curly brackets in jsx
                        // this.setState updated below for user input searchbar
                        // whenever content of the input changed, it now calls onInputChange with new input value
                        this.onInputChange(event.target.value)
                      }
                    } />
            </div>
        );
      }
    // Define a method that detects change to input field; Call it something relevant to its purpose
    // onInputChange(event) {
    //     console.log(event.target.value); // logs each change to input field
    // }
    // refactored with arrow function above

    // sets the state of this component, and fires back the callback component onSearchTermChange
    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
