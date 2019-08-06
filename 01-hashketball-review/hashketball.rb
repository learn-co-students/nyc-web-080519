require 'pry'

def game_hash

  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end


def get_players
  players = game_hash.keys.map do |team|
    game_hash[team][:players]
  end
  players.flatten
  # binding.pry
end

# def get_player
#
# end

def num_points_scored(player_name)
  # access the hash get the players
  # BOTH the home and the away
  found_player = get_players.find do |player|
    player[:player_name] == player_name
  end
  found_player[:points]

  # get_players.find { |player|             }
  # inside the players array we need to FIND the player

end

def shoe_size(player_name)
  found_player = get_players.find do |player|
    player[:player_name] == player_name
  end
  found_player[:shoe]
end





















# def get_all_players
#   game_hash.values.map do |team|
#     team[:players]
#   end.flatten
# end
#
# def find_player_by_name(player_name, player_list)
#   player_list.find do |player|
#     player[:player_name] == player_name
#   end
# end
#
# def num_points_scored(player_name)
#   # get a list of all the players
#   all_players = get_all_players
#
#   # look through all of the players
#   # find the one where the name matches the player_name argument
#   player = find_player_by_name(player_name, all_players)
#
#   player[:points]
# end
#
# def shoe_size(player_name)
#   # get a list of all the players
#   all_players = get_all_players
#
#   # look through all of the players
#   # find the one where the name matches the player_name argument
#   player = find_player_by_name(player_name, all_players)
#
#   player[:shoe]
# end
#
#
#















# define a method called get_instructor_names
# it will be given:
# [{hometown: 'upstate ny', name: 'alex'}, {hometown: 'Siberia', name: 'Steven'}, {hometown: 'Ohio', name: 'Vicky'}]
# it will return ['alex', 'Steven', 'Vicky']

# When to use map:
# you have an array of n things
# and want back n things, each one transformed in some way

# When to use  select
# you have an array of n things
# you want back some selection, some subset of those things that pass a test

# When to use  find
# you have an array of n things
# you want back the first thing that passes the test
