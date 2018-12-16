# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
user = User.create(username: "snowball", email: "snowball@snowball.cute", password: "snowball")
a = EzDownload.open('https://s3-us-west-1.amazonaws.com/clone-ify-dev/users/snowball.jpg')
user.avatar.attach(io: a, filename: 'snowball.jpg')
