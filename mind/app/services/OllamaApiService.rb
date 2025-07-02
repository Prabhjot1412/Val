require 'net/http'

class OllamaApiService
  def self.say(message)
    @@chat_history ||= []
    uri = URI.parse("http://localhost:11434/api/chat")
    http = Net::HTTP.new(uri.host, uri.port)

    request = Net::HTTP::Post.new(uri.request_uri, {
    'Content-Type' => 'application/json'
    })

    @@chat_history << {
      "role": "user",
      "content": {
        message: message,
        additional_info: {
          current_time: Time.now.in_time_zone("Chennai").strftime("%I:%M %d-%m-%y"),
          current_location: 'India, madhya pradesh, indore',
          user_hobbies: ['video games', 'anime', 'manga'],
          user_name: 'Mark'
        }
      }.to_json
    }

    request.body = {
      model: "val",
      messages: [
        *@@chat_history
      ],
      stream: false
    }.to_json

    response = http.request(request)
    response_json = JSON.parse(response.body)
    response_content_json = JSON.parse(response_json['message']['content'])
    @@chat_history << response_json['message']
    return response_content_json['message']
  end
end
