import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './session/splash';

import Featured from './main/featured';

import AlbumShow from './albums/album_show';
import ArtistShow from "./artists/artist_show";
import PlaylistShow from './playlists/playlist_show';

import ArtistIndex from './artists/artist_index';
import PlaylistIndex from './playlists/playlist_index';
import SongIndex from './songs/song_index'
import AlbumIndex from './albums/album_index'
import Account from './main/account_menu';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/sign_up_container'
import Player from './main/player'
import Search from './main/search'
// import GeneralModal from './main/general_modal';
import Modal from './main/modal';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact from="/" component={Splash} />

      <ProtectedRoute path="/settings/account" component={Account} />

      <Redirect from="/browse/featured" to="/collection/playlists" />
      <Route path="/browse/featured" component={Featured} />
      <Redirect from="/browse" to="/browse/featured" />

      <Route path="/search" component={Search} />

      <ProtectedRoute path="/collection/albums" component={AlbumIndex} />
      <ProtectedRoute path="/collection/artists" component={ArtistIndex} />
      <ProtectedRoute path="/collection/playlists" component={PlaylistIndex} />
      <ProtectedRoute path="/collection/tracks" component={SongIndex} />
      <Redirect from="/collection" to="/collection/playlists" />

      <Route path="/album/:albumId" component={AlbumShow} />
      <Route path="/artist/:artistId" component={ArtistShow} />
      <Route path="/playlist/:playlistId" component={PlaylistShow} />

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />

      <Redirect from="/" to="/" />
    </Switch>

    <Route path="/browse" component={Player} />
    <ProtectedRoute
      path="/(collection|settings|album|playlist)/"
      component={Player}
    />
  </div>
);

export default App;
