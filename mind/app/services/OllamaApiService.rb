require 'net/http'

class OllamaApiService
    def self.say(message)
        @@chat_history ||= []
        uri = URI.parse("http://localhost:11434/api/chat")
        http = Net::HTTP.new(uri.host, uri.port)

        request = Net::HTTP::Post.new(uri.request_uri, {
        'Content-Type' => 'application/json'
        })

        @@chat_history << { "role": "user", "content": message }
        request.body = {
            model: "val",
            messages: [
              *@@chat_history
            ],
            stream: false
        }.to_json

        response = http.request(request)
        response_json = JSON.parse(response.body)
        @@chat_history << response_json['message']
        return response_json['message']['content']
    end
end
