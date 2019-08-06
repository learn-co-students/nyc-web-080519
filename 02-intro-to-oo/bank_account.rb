require 'pry'

class BankAccount

  attr_reader :num
  attr_accessor :amt, :owner


  def initialize(num, amt, owner)
    @num = num
    @amt = amt
    @owner = owner
  end

  def deposit(dollarvalue)
    @amt += dollarvalue
  end

  def pay_the_tax_person(dollarvalue)
    if (@amt - dollarvalue <= 0)
      puts "you dont have that money AND im going to punish you -=$5"
      @amt-= 5
    else
      @amt -= dollarvalue
    end
  end



end # end BankAccount class


steven = BankAccount.new('1', 200,'steven')
binding.pry
