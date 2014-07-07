class WelcomeController < ApplicationController
  def index
    flash[:notice] = 'Hello, Rails is Awesome!!!'
  end
end
