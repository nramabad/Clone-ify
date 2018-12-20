# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Song.delete_all
PlaylistSong.delete_all
Playlist.delete_all
Artist.delete_all
Album.delete_all


user1 = User.create(username: "snowball", email: "snowball@snowball.cute", password: "snowball")
a = EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/users/snowball.jpg')
user1.avatar.attach(io: a, filename: 'snowball.jpg')
b = EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/users/snowball.jpg')
user2 = User.create(username: "snoop dogg", email: "snoop@lion.rasta", password: "snoopy")
user2.avatar.attach(io: b, filename: 'snowball.jpg')

artist1 = Artist.create(name: 'Asthmatic Astronaut', bio: "The wheezy space man")
album1a = Album.create(title: 'Exposing All Emotions', year: 2012, genre: "Hip Hop", artist_id: artist1.id)
album1a.cover.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_Exposing_All_Emotions_-_20120815102617148.jpg'), filename: 'cover.jpg')
song1a1 = Song.create(title: "A New Tone", duration: 211, album_id: album1a.id)
song1a2 = Song.create(title: "Body Language", duration: 247, album_id: album1a.id)
song1a3 = Song.create(title: "And Still They Come A Creeping", duration: 276, album_id: album1a.id)
song1a4 = Song.create(title: "Something To Work On", duration: 296, album_id: album1a.id)
song1a5 = Song.create(title: "After Party", duration: 175, album_id: album1a.id)
song1a6 = Song.create(title: "Run The Tape", duration: 226, album_id: album1a.id)
song1a1.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_01_-_A_New_Tone_ft_dsoul_soul_samurai.mp3'), filename: 'audio.mp3')
song1a2.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_02_-_Body_Language.mp3'), filename: 'audio.mp3')
song1a3.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_03_-_And_Still_They_Come_A_Creeping.mp3'), filename: 'audio.mp3')
song1a4.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_04_-_Something_To_Work_On.mp3'), filename: 'audio.mp3')
song1a5.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_05_-_After_Party.mp3'), filename: 'audio.mp3')
song1a6.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_06_-_Run_The_Tape.mp3'), filename: 'audio.mp3')


artist2 = Artist.create(name: 'Black Ant')
album2a = Album.create(title: 'Free Beats Sel. 3', year: 2010, genre: "Indie Rock", artist_id: artist2.id)
album2a.cover.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_Free_Beats_Sel_3_-_20100125165648429.jpg'), filename: 'cover.jpg')
song2a1 = Song.create(title: "Fater Lee", duration: 143, album_id: album2a.id)
song2a2 = Song.create(title: "Oh K.", duration: 83, album_id: album2a.id)
song2a3 = Song.create(title: "8bit2 3", duration: 38, album_id: album2a.id)
song2a4 = Song.create(title: "Black Ant", duration: 163, album_id: album2a.id)
song2a5 = Song.create(title: "Self Explainitory", duration: 150, album_id: album2a.id)
song2a6 = Song.create(title: "fACEMELETERmp3", duration: 128, album_id: album2a.id)
song2a7 = Song.create(title: "Boomerang", duration: 141, album_id: album2a.id)
song2a8 = Song.create(title: "Michael Vendette", duration: 143, album_id: album2a.id)
song2a9 = Song.create(title: "Christmas Eve 2009", duration: 83, album_id: album2a.id)
song2a10 = Song.create(title: "5 Piece", duration: 89, album_id: album2a.id)
song2a11 = Song.create(title: "government funded weed", duration: 105, album_id: album2a.id)
song2a12 = Song.create(title: "6,49", duration: 123, album_id: album2a.id)
song2a13 = Song.create(title: "1982", duration: 123, album_id: album2a.id)
song2a14 = Song.create(title: "Underdog", duration: 142, album_id: album2a.id)
song2a15 = Song.create(title: "D8M3", duration: 125, album_id: album2a.id)
song2a1.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_01_-_Fater_Lee.mp3'), filename: 'audio.mp3')
song2a2.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_02_-_Oh_K.mp3'), filename: 'audio.mp3')
song2a3.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_03_-_8bit2_3.mp3'), filename: 'audio.mp3')
song2a4.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_04_-_Black_Ant.mp3'), filename: 'audio.mp3')
song2a5.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_05_-_Self_Explainitory.mp3'), filename: 'audio.mp3')
song2a6.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_06_-_fACEMELTERmp3.mp3'), filename: 'audio.mp3')
song2a7.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_07_-_Boomerang.mp3'), filename: 'audio.mp3')
song2a8.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_08_-_Michael_Vendette.mp3'), filename: 'audio.mp3')
song2a9.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_09_-_Christmas_Eve_2009.mp3'), filename: 'audio.mp3')
song2a10.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_10_-_5_Piece.mp3'), filename: 'audio.mp3')
song2a11.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_11_-_government_funded_weed.mp3'), filename: 'audio.mp3')
song2a12.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_12_-_649.mp3'), filename: 'audio.mp3')
song2a13.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_13_-_1982.mp3'), filename: 'audio.mp3')
song2a14.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_14_-_Underdog.mp3'), filename: 'audio.mp3')
song2a15.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Black_Ant_-_Free_Beats_Sel_3/Black_Ant_-_15_-_D8M3.mp3'), filename: 'audio.mp3')


playlist1 = Playlist.create(title: '(૭ ◉༬◉)૭⁾⁾⁾⁾', description: "^_^", user_id: 1)
c = EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/playlists/everything-everything-get-to-heaven-big.jpg')
playlist1.photo.attach(io: c, filename: 'snowball.jpg')
playlist2 = Playlist.create(title: '~ ✰ 💸 𝘣𝘰𝘰𝘰𝘫𝘦𝘦𝘦  💸 ✰ ~', user_id: 2)
d = EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/playlists/How-to-Destroy-Angels-EP-Digital-Cover-Art-600px.jpg')
playlist2.photo.attach(io: d, filename: 'snowball.jpg')
playlist3 = Playlist.create(title: 'love is a box of chocolates.', description: "you never know what you're gonna get. 😕", user_id: 1 )
e = EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/playlists/images.jpeg')
playlist3.photo.attach(io: e, filename: 'snowball.jpg')

pS1 = PlaylistSong.create(playlist_id: 1,song_id: 2)
pS2 = PlaylistSong.create(playlist_id: 3,song_id: 5)
pS2 = PlaylistSong.create(playlist_id: 1,song_id: 2)
pS3 = PlaylistSong.create(playlist_id: 2,song_id: 1)
pS4 = PlaylistSong.create(playlist_id: 1,song_id: 3)
pS5 = PlaylistSong.create(playlist_id: 2,song_id: 10)
pS6 = PlaylistSong.create(playlist_id: 2,song_id: 11)
pS7 = PlaylistSong.create(playlist_id: 1,song_id: 11)
pS8 = PlaylistSong.create(playlist_id: 3,song_id: 11)
pS9 = PlaylistSong.create(playlist_id: 2,song_id: 12)
pS10 = PlaylistSong.create(playlist_id: 1,song_id: 7)
