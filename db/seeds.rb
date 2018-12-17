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
