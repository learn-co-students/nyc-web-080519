require 'pry'
require_relative '../book'
require_relative './author'

mike = Author.new('Mike THE GREAT AND POWERFUL Cheng', 1000)
gabbie = Author.new('Gabbie', 28)

mike.write_book('how to make a bagel',3)
mike.write_book('SMORT book',100000)
gabbie.write_book('HP9', 8765)

Book.find_by_title('how to make a bagel')

gabbie.book_count

binding.pry
