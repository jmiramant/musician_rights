class User < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :email, :zipcode, :band, :opt_out

end


