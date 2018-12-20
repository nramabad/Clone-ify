class Api::PlaylistSongsController < ApplicationController

  def create
    @playlist_song = PlaylistSong.new(params.require(:playlist_song).permit(:song_id, :playlist_id))
    @playlist_song.save
  end

  def destroy
    @playlist_song = PlaylistSong.find(params[:id])
    @playlist_song.delete
    render json: @playlist_song.id
  end

end
