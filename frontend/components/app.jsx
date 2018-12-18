import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './session/splash';

import Featured from './main/featured';


import ArtistIndex from './artists/artist_index';
import PlaylistIndex from './playlists/playlist_index';
import SongIndex from './songs/song_index'
import AlbumIndex from './albums/album_index'
import Account from './main/account_menu.jsx';
import LoginFormContainer from './session/login_form_container'
import SignupFormContainer from './session/sign_up_container'

const App = () => (
  <div>

    <Switch>
      <Route exact from="/" component={Splash} />

      <ProtectedRoute path="/settings/account" component={Account} />

      <Route path="/browse/featured" component={Featured} />
      <Redirect from="/browse" to="/browse/featured" />

      <ProtectedRoute path="/collection/albums" component={AlbumIndex} />
      <ProtectedRoute path="/collection/artists" component={ArtistIndex} />
      <ProtectedRoute path="/collection/playlists" component={PlaylistIndex} />
      <ProtectedRoute path="/collection/tracks" component={SongIndex} />
      <Redirect from="/collection" to="/collection/playlists" />

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />

      <Redirect from="/" to="/" />
    </Switch>

  </div>
);

export default App;
