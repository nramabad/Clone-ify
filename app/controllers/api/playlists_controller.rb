class Api::PlaylistsController < ApplicationController

  before_action :require_logged_in, except: [:index, :show]

  def index
    @playlists = Playlist.with_attached_photo.all
    render :index
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def new
    @user = User.find(params[:user_id])
    @playlist = Playlist.new(user_id: params[:user_id])
    render :new
  end

  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages
    end
  end

  def edit
    @playlist = Playlist.find_by(id: params[:id])
    render :edit
  end

  def update
    @playlist = Playlist.find_by(id: params[:id])

    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    if @playlist
      @playlist.destroy
      render :show
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:user_id, :title, :description)
  end
end
