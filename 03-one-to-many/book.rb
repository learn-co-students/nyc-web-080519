require 'pry'
class Book
  attr_accessor :title, :pages
  attr_reader :author

  @@all = []

  def initialize(title, author, pages)
    @title = title
    @pages = pages
    @author = author
    @@all << self
  end

  def self.all
    @@all
  end

  # find a book by title
  def self.find_by_title(title_of_book)
    # Book.all
    self.all.find do |book|
      book.title  == title_of_book
    end
    #code
  end

  # get a list of books more than 100 pages


end  # end book class
#
# b1 = Book.new('THE art of war', "THE Dana :) 🤔", 81 )
# b2 = Book.new('Stuff my dad says', "THE Gabbie 🤔", 101 )
#
# b1.title
# binding.pry
