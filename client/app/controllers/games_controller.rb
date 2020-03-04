require 'rest-client'

MINESWEEPER_API_URL = 'https://gonzalorey-minesweeper-api.herokuapp.com/'

class GamesController < ApplicationController
  def show
    response = RestClient.post 'http://localhost:8000/game', {}

    parsed_body = JSON.parse(response.body)

    @game = Game.new(parsed_body['board'], parsed_body['timeStarted'], parsed_body['prettyTime'])

  end

  class Game
    def initialize(board, time_started, pretty_time)
      @board = board
      @time_started = pretty_time
    end

    attr_accessor :board
    attr_accessor :time_started
  end
end
