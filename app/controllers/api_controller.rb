class ApiController < ApplicationController

  def index
    p params
    @query = "search/?query=#{params[:location]}" if params[:location]
    @query = "search/?lattlong=#{params[:lattlong]}" if params[:lattlong]
    @query = params[:woeid] if params[:woeid]

    return render json: 'Invalid search', status: 500 unless @query

    @response = HTTParty.get("https://www.metaweather.com/api/location/#{@query}")

    return render json: @response.parsed_response, status: :ok
  end
end
