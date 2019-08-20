# Dir[File.join(File.dirname(__FILE__), '../lib', '*.rb')].sort.each { |f| require f }

require 'pry'
# require 'activerecord'

require_relative '../lib/mammal'
require 'require_all'
require_all 'lib'
