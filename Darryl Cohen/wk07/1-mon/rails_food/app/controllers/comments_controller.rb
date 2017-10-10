class CommentsController < ApplicationController
  def create
    comment = Comment.new
    comment.content = params[:content]
    comment.dish_id = params[:dish_id]
    comment.save
    redirect_to "/dishes/#{comment.dish_id}"
  end
end
