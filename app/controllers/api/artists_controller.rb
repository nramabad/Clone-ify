class Api::ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    render :index
  end

  def show
    @artist = Artist.find(params[:id])
    render :show
  end

  def search
    query = params[:query]
    @artists = Artist.where('lower(name) like ?', "%#{query.downcase}%").limit(5)
    render :index
  end

end
