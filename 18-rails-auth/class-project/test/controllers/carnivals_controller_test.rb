require 'test_helper'

class CarnivalsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get carnivals_index_url
    assert_response :success
  end

  test "should get show" do
    get carnivals_show_url
    assert_response :success
  end

  test "should get edit" do
    get carnivals_edit_url
    assert_response :success
  end

  test "should get new" do
    get carnivals_new_url
    assert_response :success
  end

end
