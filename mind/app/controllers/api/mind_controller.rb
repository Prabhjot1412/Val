class Api::MindController < ApplicationController
    def think
        request_params = JSON.parse(JSON.parse(request.body.to_json)[0])
        message = request_params['message']

        if message.blank?
            render json: {
                status: 401,
                message: "no message given"
            }, status: :bad_request
        else
            reply = OllamaApiService.say message
            render json: {
                    status: 200,
                    message: reply
                }
        end
    end
end
