class Api::PlaylistsController < ApplicationController

  before_action :require_logged_in, except: [:index, :show]

  def index
    @playlist = Playlist.all
    render :index
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def new
    @user = User.find(params[:user_id])
    @album = Playlist.new(user_id: params[:user_id])
    render :new
  end

  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      redirect_to playlist_url(@playlist)
    else
      render json: @playlist.errors.full_messages
    end
  end

  def edit
    @playlist = Playlist.find(params[:id])
    render :edit
  end

  def update
    @playlist = Playlist.find(params[:id])

    if @playlist.update(playlist_params)
      redirect_to playlist_url(@playlist)
    else
      render json: @playlist.errors.full_messages
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    if @playlist
      @playlist.destroy
      redirect_to user_url(@playlist.user_id)
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

  private

  def playlist_params
    params.require(:playlist).permit(:user_id, :title, :description)
  end
end
