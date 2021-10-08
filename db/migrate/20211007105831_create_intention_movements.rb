class CreateIntentionMovements < ActiveRecord::Migration[6.1]
  def change
    create_table :intention_movements do |t|

      t.timestamps
    end
  end
end
