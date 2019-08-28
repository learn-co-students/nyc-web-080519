require 'test_helper'

class ClownsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get clowns_index_url
    assert_response :success
  end

  test "should get show" do
    get clowns_show_url
    assert_response :success
  end

  test "should get edit" do
    get clowns_edit_url
    assert_response :success
  end

  test "should get new" do
    get clowns_new_url
    assert_response :success
  end

end
