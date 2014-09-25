class LtController < ApplicationController
  include ActionController::Live   # For streaming

  def page
  end

  def ping
      respond_to do |format|
	format.json {
	  code = render_to_string action: "ping", layout: false, formats: [:html]
	  render json: { ping: code }
	}
      end
  end
end
