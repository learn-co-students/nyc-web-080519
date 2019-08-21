require 'pry'


# the word/phrase is the same backwards && forwards.
def is_palindrome?(word)


  #
  # raise ArgumentError if !word.is_a?(String)
  # downcased_word = word.downcase.gsub(/\W/,"")
  # return false if downcased_word.length < 2
  # downcased_word == downcased_word.reverse

  if word.class == String
    no_white_spaces = word.strip
    if no_white_spaces.to_i == 0 && no_white_spaces.length > 1 && no_white_spaces.length < 20
      no_white_spaces === no_white_spaces.reverse
    else
      return false
    end
  else
    raise ArgumentError
  end
end
