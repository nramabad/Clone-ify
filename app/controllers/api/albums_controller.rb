class Api::AlbumsController < ApplicationController

  def index
    @album = Album.all
    render :index
  end

  def show
    @album = Album.find(params[:id])
    render :show
  end
  
end
