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

    # how do we turn this array of hashes into an array of Tweets

    results.map do |row|
      # Tweet.new({"message" => row["message"], "username" => row["username"]})
      Tweet.new(row) # why would this also work?
    end
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']

    @id = props["id"] # why might we want to add the id attribute?
  end

  def save
    # @@all << self
    # self

    username = self.username
    message = self.message

    #what SQL would we want to implement to save Tweet instances to the database
    
    # HEREDOC 
    sql = <<-SQL
      INSERT INTO tweets (username, message)
      VALUES (?, ?);
    SQL
    

    DB[:conn].execute(sql, username, message)
  end
  
  def update
    # what SQL could we implement to change the message of a tweet
  end

  def delete
    # what SQL could we implement to delete a row from the tweets table
  end
end
