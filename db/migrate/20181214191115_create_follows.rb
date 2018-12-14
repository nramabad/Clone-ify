class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :follow_id, null: false
      t.string :follow_type, null: false

      t.timestamps
    end
    add_index :follows, [:user_id, :follow_id], unique: true
  end
end
