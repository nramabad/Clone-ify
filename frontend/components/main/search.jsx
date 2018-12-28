import React from 'react';
import Navbar from '../navbars/navbar';

import { Route, Redirect, Switch } from 'react-router-dom';

import AlbumsIndex from '../albums/albums_index';
import ArtistsIndex from '../artists/artists_index';
import PlaylistsIndex from '../playlists/playlists_index';
import SongsIndex from '../songs/songs_index';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    componentDidMount() {
    }

    handleChange() {
        return (e) => {
            this.setState({ query: e.target.value })
        };
    }

    render() {

        const renderContent = (
            <div>
                <h4>Find your favorite songs, artists, albums, podcasts and playlists.</h4>
            </div>
        )
        if (this.state.query.length > 0) {
            renderContent = (<div>
                <div className="search-nav-and-results">
                    <Switch>
                        <Route path="/search/albums" render={() =>
                            <AlbumsIndexContainer
                                searchQuery={this.state.query} />} />

                        <Route path="/search/artists" render={() =>
                            <ArtistsIndexContainer
                                searchQuery={this.state.query} />} />

                        <Route path="/search/playlists" render={() =>
                            <PlaylistsIndexContainer
                                searchQuery={this.state.query} />} />

                        <Route path="/search/songs" render={() =>
                            <SongsIndexContainer
                                searchQuery={this.state.query} />} />
                        <Redirect to="/search/albums" />
                    </Switch>
                </div>
            </div>);
        } 

        return (
            <div className="search">
                <form className="search-form">
                    <input
                        type="text"
                        value={this.state.query}
                        placeholder="Start typing..."
                        onChange={this.handleChange()}
                    ></input>
                </form>
                {renderContent}
            </div>
        )
    }

}

export default Search;