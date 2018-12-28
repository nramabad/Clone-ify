import React from 'react';
import { connect } from 'react-redux';
import SearchResults from './search_results';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchTerm: '', render: false };
        this.timeout = 0;
        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(e) {
        this.setState({ render: false })

        let val = e.target.value

        if (this.timeout) clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.setState({ render: true });
        }, 300);
        this.setState({ searchTerm: val });
    }

    render() {
        let { searchTerm, render } = this.state;
        // console.log(searchTerm);

        let results;
        let default_res = false;
        if (!(searchTerm.length > 0)) {
            default_res = true;
            results = (
                <div className="null-search-results">
                    <h1>Search Spookify</h1>
                    <h4>Find your favorite songs, artists, albums, podcasts, playlists, and other users to follow.</h4>
                </div>
            )
        } else {
            results = (<SearchResults searchTerm={searchTerm} ></SearchResults>)
        }

        return (
            <div className="search">
                <div className="search-input">
                    <input autoFocus="autoFocus"
                        type="text"
                        value={this.state.searchTerm}
                        onChange={this.updateInput}
                        placeholder="Start typing..."></input>
                </div>

                {(render || default_res) ? results : null}
            </div>
        )
    }
}

export default Search;