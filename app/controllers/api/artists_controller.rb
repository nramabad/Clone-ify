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
    search_term = params[:search_term]
    @artists = Artist.where('lower(name) like ?', "%#{search_term.downcase}%").limit(5)
    render :index
  end

end
