class Api::PicturesController < ApplicationController

  def index
    if params[:id]
      @pictures = User.find(params[:id]).pictures
    elsif params[:feed]
      @pictures = []
      current_user.followings.each do |user|
        @pictures.concat(user.pictures)
      end
      @pictures
    else
      @pictures = Picture.all
    end
  end

  def user_index
    @pictures = current_user.pictures
  end

  def show
    @picture = Picture.find(params[:id])
  end

  def create
    @picture = Picture.new(picture_params)
    @picture.user_id = current_user.id
    if @picture.save
      render :show
    else
      render json: @picture.errors.full_messages
    end
  end

  def destroy
    @picture = Picture.find(params[:id])
    @picture.destroy
    render :show
  end

  private
  def picture_params
    params.require(:picture).permit(:photo_url, :description)
  end

end
