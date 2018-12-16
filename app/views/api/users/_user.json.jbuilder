json.extract! user, :id, :username, :email

if user.avatar.attached?
  json.avatar_url url_for(user.avatar)
# else
#   json.avatar_url 'app/assets/images/pf_default.jpg'
# give it a default elsewhere
end
