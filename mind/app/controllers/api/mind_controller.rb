class Api::MindController < ApplicationController
    def think
        message = params[:message]
        if message.blank?
            render json: {
                status: 401,
                message: "no message given"
            }, status: :bad_request
        end

        reply = OllamaApiService.say message
        render json: {
                status: 200,
                message: { message: reply }
            }
    end
end
