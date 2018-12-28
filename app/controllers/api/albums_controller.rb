class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.with_attached_cover.all.includes(:artist)
    render :index
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

  def search
    search_term = params[:search_term]
    @albums = Album.where('lower(name) like ?', "%#{search_term.downcase}%").limit(5)
    render :index
  end


end
