import React from 'react';
import Sidebar from './side_bar';

import { Route, Redirect, Switch } from 'react-router-dom';

import AlbumsIndex from '../albums/album_index';
import ArtistsIndex from '../artists/artist_index';
import PlaylistsIndex from '../playlists/playlist_index';
import SongsIndex from '../songs/song_index';

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

        let renderContent = (
            <div>
                <h4>Find your favorite songs, artists, albums, podcasts and playlists.</h4>
            </div>
        )
        if (this.state.query.length > 0) {
            renderContent = (<div>
                <div className="search-page">
                    <Switch>
                        <Route path="/search/albums" render={() =>
                            <AlbumsIndex
                                searchQuery={this.state.query} />} />

                        <Route path="/search/artists" render={() =>
                            <ArtistsIndex
                                searchQuery={this.state.query} />} />

                        <Route path="/search/playlists" render={() =>
                            <PlaylistsIndex
                                searchQuery={this.state.query} />} />

                        <Route path="/search/songs" render={() =>
                            <SongsIndex
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