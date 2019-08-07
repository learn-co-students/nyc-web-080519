require 'pry'
class Author
  attr_accessor :name, :age

  @@all = []

  def initialize(name, age)
    @name = name
    @age = age
    @@all << self
  end

  def self.all
    @@all
  end

  #write a new book
  def write_book(title,num_pages)
    # THIS PARTICULAR author
    # self
    # WRITE A NEW book
    book = Book.new(title,self,num_pages)
    #code
  end

  def all_my_books
    my_books = Book.all.select do |book|
      book.author == self
    end
  end

  #how many books did I(me) write?
  def book_count
    # ALL the books
    # if that particular book the author is me
    # all_my_books
    all_my_books.count
    #code
  end

  # My books more than 50 pages long
  def long_books
    all_my_books.select do |book|
      book.pages > 50
    end
    # ALL THE BOOKS
  end


end # end Author class
# binding.pry
