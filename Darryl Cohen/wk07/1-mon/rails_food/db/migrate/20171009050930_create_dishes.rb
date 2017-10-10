class CreateDishes < ActiveRecord::Migration[5.1]
  def change
    create_table :dishes do |t|
      t.string :title
      t.string :pic_image

      t.timestamps
    end
  end
end
