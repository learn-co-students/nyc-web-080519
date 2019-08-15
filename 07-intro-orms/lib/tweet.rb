class Tweet
  attr_accessor :message, :username
  attr_reader :id

  @@all = []

  def self.all
    # @@all
    sql = <<-SQL
      SELECT *
      FROM tweets;
    SQL

    results = DB[:conn].execute(sql)

    results
  end

  def initialize(props={})
    @message = props['message']
    @username = props['username']
  end

  def save
    @@all << self
    self
  end
  
end
