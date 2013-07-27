class Event < ActiveRecord::Base
  attr_accessible :title, :location, :time, :details, :date
end


