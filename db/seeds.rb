# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Song.delete_all
Playlist.delete_all
Artist.delete_all
Album.delete_all


user1 = User.create(username: "snowball", email: "snowball@snowball.cute", password: "snowball")
a = EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/users/snowball.jpg')
user1.avatar.attach(io: a, filename: 'snowball.jpg')


artist1 = Artist.create(name: 'Asthmatic Astronaut', bio: "The wheezy space man")
album1a = Album.create(title: 'Exposing All Emotions', year: 2012, genre: "Hip Hop", artist_id: artist1.id)
album1a.cover.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_Exposing_All_Emotions_-_20120815102617148.jpg'), filename: 'cover.jpg')
song1a1 = Song.create(name: "A New Tone", duration: 211, album_id: album1a.id)
song1a2 = Song.create(name: "Body Language", duration: 247, album_id: album1a.id)
song1a3 = Song.create(name: "And Still They Come A Creeping", duration: 276, album_id: album1a.id)
song1a4 = Song.create(name: "Something To Work On", duration: 296, album_id: album1a.id)
song1a5 = Song.create(name: "After Party", duration: 175, album_id: album1a.id)
song1a6 = Song.create(name: "Run The Tape", duration: 226, album_id: album1a.id)
song1a1.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_01_-_A_New_Tone_ft_dsoul_soul_samurai.mp3'), filename: 'audio.mp3')
song1a2.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_02_-_Body_Language.mp3'), filename: 'audio.mp3')
song1a3.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_03_-_And_Still_They_Come_A_Creeping.mp3'), filename: 'audio.mp3')
song1a4.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_04_-_Something_To_Work_On.mp3'), filename: 'audio.mp3')
song1a5.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_05_-_After_Party.mp3'), filename: 'audio.mp3')
song1a6.audio.attach(io: EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-public/songs/hip+hop/Asthmatic_Astronaut_-_Exposing_All_Emotions/Asthmatic_Astronaut_-_06_-_Run_The_Tape.mp3'), filename: 'audio.mp3')
