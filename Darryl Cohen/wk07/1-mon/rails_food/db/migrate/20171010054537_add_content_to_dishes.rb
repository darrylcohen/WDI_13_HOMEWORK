class AddContentToDishes < ActiveRecord::Migration[5.1]
  def change
    add_reference :dishes, :venue, foreign_key: true
  end
end
