class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render 'api/users/index'
  end


  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def search
    query = params[:query]
    users = User.where('lower(username) like ?', "%#{query.downcase}%").limit(5)
    curr_user = User.where(id: current_user.id)

    @users = users + curr_user

    render :index
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end


# maybe add functionality to upload :avatar hence permit :avatar
