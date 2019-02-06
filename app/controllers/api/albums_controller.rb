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
    query = params[:query]
    @albums = Album.where('lower(title) like ?', "%#{query.downcase}%").limit(5)
    render :index
  end


end
