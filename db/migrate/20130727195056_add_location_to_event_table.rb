class AddLocationToEventTable < ActiveRecord::Migration
  def change
    add_column :events, :location, :string
  end
end


Event.create(title: "Example Event 1", date: 08-11-2013, time: "8:30pm", details: "Come join us at Acme Event Hall for a fundraiser to empower artists.Short ribs cow salami shank, pork loin chicken rump fatback doner shoulder prosciutto. Ham hock chuck prosciutto short loin.", location: "519 8th Ave, Brooklyn, NY")