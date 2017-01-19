class Api::FollowsController < ApplicationController

  def index

  end

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end 
  end

  def show

  end

  def destroy

  end

  def follow_params
    params.require(:follow).permit(:following_id)
  end

end
