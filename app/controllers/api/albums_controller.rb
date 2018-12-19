class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.with_attached_cover.all.includes(:artist)
    render :index
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end

end
