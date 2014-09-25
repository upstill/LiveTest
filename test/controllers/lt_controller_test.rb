require 'test_helper'

class LtControllerTest < ActionController::TestCase
  test "should get page" do
    get :page
    assert_response :success
  end

  test "should get ping" do
    get :ping
    assert_response :success
  end

end
