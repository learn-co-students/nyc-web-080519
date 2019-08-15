class Tweet
  attr_accessor :message, :username
  attr_reader :id

  # @@all = []

  def self.all
    # @@all
    sql = <<-SQL
      SELECT *
      FROM tweets;
    SQL

    results = DB[:conn].execute(sql)

    results.map do |row|
      # Tweet.new({"message" => row["message"], "username" => row["username"]})
      Tweet.new(row) # why would this also work?
    end
 
  
    # how do we turn this array of hashes into an array of Tweets
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']

    @id = prop["id"] # why might we want to add the id attribute?
  end

  def save
    # @@all << self
    # self

    #what SQL would we want to implement to save Tweet instances to the database
  end
  
end
