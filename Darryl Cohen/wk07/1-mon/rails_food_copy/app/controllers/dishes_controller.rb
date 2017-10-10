class DishesController < ApplicationController

  def index
    @dishes = Dish.all
  end

  def create
    dish = Dish.new
    dish.title = params[:title]
    dish.pic_image = params[:pic_image]
    dish.save
    redirect_to '/dishes'
  end

  def show
    @dish = Dish.find(params[:id])
  end

  def edit
    @dish = Dish.find(params[:id])
  end

  def update
    dish = Dish.find(params[:id])
    dish.title = params[:title]
    dish.pic_image = params[:pic_image]
    dish.save
    redirect_to '/dishes'
  end

  def destroy
    dish = Dish.find(params[:id])
    dish.destroy
    redirect_to '/dishes'
  end
end
