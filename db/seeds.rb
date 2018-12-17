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
song1a1 = Song.create(title: "A New Tone", duration: 211, album_id: album1a.id)
song1a2 = Song.create(title: "Body Language", duration: 247, album_id: album1a.id)
song1a3 = Song.create(title: "And Still They Come A Creeping", duration: 276, album_id: album1a.id)
song1a4 = Song.create(title: "Something To Work On", duration: 296, album_id: album1a.id)
song1a5 = Song.create(title: "After Party", duration: 175, album_id: album1a.id)
song1a6 = Song.create(title: "Run The Tape", duration: 226, album_id: album1a.id)


artist2 = Artist.create(name: 'Black Ant')
album2a = Album.create(title: 'Free Beats Sel. 3', year: 2010, genre: "Hip Hop", artist_id: artist2.id)
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


artist3 = Artist.create(name: 'Blank & Kytt')
album3a = Album.create(title: 'Heavy, Crazy, Serious', year: 2012, genre: "Hip Hop", artist_id: artist3.id)
song3a1 = Song.create(title: "Thursday & Snow (Reprise)", duration: 116, album_id: album3a.id)
song3a2 = Song.create(title: "Jangle", duration: 115, album_id: album3a.id)
song3a3 = Song.create(title: "Cassette Thing", duration: 72, album_id: album3a.id)
song3a4 = Song.create(title: "Come Get Some", duration: 66, album_id: album3a.id)
song3a5 = Song.create(title: "Rock", duration: 65, album_id: album3a.id)
song3a6 = Song.create(title: "Deniro", duration: 92, album_id: album3a.id)
song3a7 = Song.create(title: "Flava", duration: 62, album_id: album3a.id)
song3a8 = Song.create(title: "RSPAN", duration: 51, album_id: album3a.id)
song3a9 = Song.create(title: "Sgt Frog", duration: 52, album_id: album3a.id)


artist4 = Artist.create(name: 'Broke For Free')
album4a = Album.create(title: 'Layers', year: 2012, genre: "Hip Hop", artist_id: artist4.id)
song4a1 = Song.create(title: "As Colorful As Ever", duration: 234, album_id: album4a.id)
song4a2 = Song.create(title: "Knock Knock", duration: 156, album_id: album4a.id)
song4a3 = Song.create(title: "Only Knows", duration: 179, album_id: album4a.id)
song4a4 = Song.create(title: "If", duration: 200, album_id: album4a.id)
song4a5 = Song.create(title: "Note Drop", duration: 190, album_id: album4a.id)
song4a6 = Song.create(title: "Murmur", duration: 248, album_id: album4a.id)
song4a7 = Song.create(title: "Spellbound", duration: 174, album_id: album4a.id)
song4a8 = Song.create(title: "The Collector", duration: 134, album_id: album4a.id)
song4a9 = Song.create(title: "Quit Bitching", duration: 244, album_id: album4a.id)
song4a10 = Song.create(title: "A Year", duration: 194, album_id: album4a.id)

album4b = Album.create(title: 'Something EP', year: 2011, genre: "Hip Hop", artist_id: artist4.id)
song4b1 = Song.create(title: "Something Jah", duration: 172, album_id: album4b.id)
song4b2 = Song.create(title: "Something Old", duration: 179, album_id: album4b.id)
song4b3 = Song.create(title: "Something Wobbly", duration: 225, album_id: album4b.id)
song4b4 = Song.create(title: "Something Galactic", duration: 270, album_id: album4b.id)
song4b5 = Song.create(title: "Something Elated", duration: 234, album_id: album4b.id)


artist5 = Artist.create(name: 'Hogan Grip',
  bio: "Hogan Grip (DeclanQKelly and Tony Higgins aka junior85) is a duo born in a charity shop in the westside of Galway city on a warm June afternoon, in which was found an old, yellowing copy of Ben Hogan's seminal instructional golf book “Power Golf”. Inspired first by the exquisite line drawings and evocative chapter names and later (upon closer examination of the book's actual text) by Hogan's avuncular, firm-but-fair teaching technique and his touching dedication to a friend (Henry Picard) in the opening chapter, the band Hogan Grip came to fruition.")
album5a = Album.create(title: 'Stance Gives You Balance', year: 2010, genre: "Hip Hop", artist_id: artist5.id)
song5a1 = Song.create(title: "Stance Gives You Power", duration: 2, album_id: album5a.id)
song5a1 = Song.create(title: "Interlude - Starting The Club Down", duration: 2, album_id: album5a.id)
song5a1 = Song.create(title: "Stance Gives You Balance", duration: 2, album_id: album5a.id)
song5a1 = Song.create(title: "Interlude - 'Reading The Greens'", duration: 2, album_id: album5a.id)
song5a1 = Song.create(title: "Iron Shots (For Accuracy)", duration: 2, album_id: album5a.id)
song5a1 = Song.create(title: "Interlude - 'Diagonal Stance'", duration: 2, album_id: album5a.id)
song5a1 = Song.create(title: "To Henry Picard - An Outstanding Teacher, An Outstanding Father", duration: 2, album_id: album5a.id)












# END
