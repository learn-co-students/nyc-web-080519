require_relative "../program.rb"

# pass in examples it works
# pass in examples where it dont work no BUENO :*(

# edge cases
# RED/GREEN/REFACTOR
# SPACE COMPLEXITY
# Data type



describe "is_palindrome?" do
  it "should return true if it is ACTUALLY a palindrome" do
    expect(is_palindrome?("poop")).to eq(true)
  end

  it "should return false if it is Not a palindrome" do
    expect(is_palindrome?("racecars")).to eq(false)
  end

  it "should return false if it is a number" do
    expect(is_palindrome?("111")).to eq(false)
  end

  it "should return false if it is a number" do
    expect(is_palindrome?("a")).to eq(false)
  end

  it "should return false if it is a number" do
    expect(is_palindrome?("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")).to eq(false)
  end

  it "should return false if it is a number" do
    expect(is_palindrome?("        ")).to eq(false)
  end

  it "should return false if it is a number" do
    expect(is_palindrome?("RAcecar")).to eq(false)
  end

  # it "should return false if it is a number" do
  #   expect(is_palindrome?("yÄy")).to eq(false)
  # end

  it "should return false if it is a number" do
    expect {is_palindrome?(12321)}.to raise_error(ArgumentError)
  end



end
