import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };
    onInputChange = (event) => {
        // event.target.value is the text that user just typed
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.term);
        //TODO: Make sure we call
        this.props.onTermSubmit(this.state.term);
        // callback form parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            // add new prop 'onChange' to set the call back 
                            onChange={this.onInputChange}
                        />

                    </div>
                </form>
            </div>

        );
    }
}

export default SearchBar;