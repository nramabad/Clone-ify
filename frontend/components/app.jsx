import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './session/splash';

import Featured from './main/featured';
import SavedAlbums from './albums/saved_albums';
import SavedArtists from './artists/saved_artists';
import SavedPlaylists from './playlists/saved_playlists';
// import SavedSongs from './songs/saved_songs';
import SongIndex from './songs/song_index'
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

      <Route path="/collection/albums" component={SavedAlbums} />
      <Route path="/collection/artists" component={SavedArtists} />
      <Route path="/collection/playlists" component={SavedPlaylists} />
      <Route path="/collection/songs" component={SongIndex} />
      <Redirect from="/collection" to="/collection/playlists" />

      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />

      <Redirect from="/" to="/" />
    </Switch>

  </div>
);

export default App;
