import React from 'react';
import SideBar from './side_bar';

import { Route, Redirect, Switch } from 'react-router-dom';

import AlbumsIndex from '../albums/album_index';
import ArtistsIndex from '../artists/artist_index';
import PlaylistsIndex from '../playlists/playlist_index';
import SongsIndex from '../songs/song_index';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            render: false
        }
        this.timeout = 0;
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
    }

    handleChange(e) {
        this.setState({ render: false })

        if (this.timeout) clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.setState({ render: true });
        }, 300);

        this.setState({ query: e.target.value })
    }

    render() {
        let { query, render } = this.state;
        let default_page = false;
        let renderContent = (
            <div id="begin">
                <h2>Search Clone-ify</h2>
                <h4>Find your favorite songs, artists, albums, podcasts and playlists.</h4>
            </div>
        )
        if (query.length > 0) {
            default_page = true;
            renderContent = (<div>
                <div className="search-page">
                    <h2>Albums</h2>
                    <AlbumsIndex
                        searchQuery={query} />
                    <h2>Artists</h2>
                    <ArtistsIndex
                        searchQuery={query} />
                    <h2>Playlists</h2>
                    <PlaylistsIndex
                        searchQuery={query} />
                </div>
            </div>);
        } 

        return (
            <>
                <SideBar />
                
                <div className="search">
                    <form className="search-form">
                        <input
                            type="text"
                            value={this.state.query}
                            placeholder="Start typing..."
                            onChange={this.handleChange}
                        ></input>
                    </form>
                    {render ? renderContent : null}
                </div>
            </>
        )
    }

}

export default Search;