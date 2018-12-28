class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render 'api/songs/index'
  end

  def show
    @song = Song.find(params[:id])
    render 'api/songs/show'
  end

  def search
    query = params[:query]
    @songs = Song.where('lower(name) like ?', "%#{query.downcase}%").limit(5)
    render :index
  end

end
