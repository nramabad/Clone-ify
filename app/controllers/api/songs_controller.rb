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
    search_term = params[:search_term]
    @songs = Song.where('lower(name) like ?', "%#{search_term.downcase}%").limit(5)
    render :index
  end

end
