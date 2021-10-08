class IntentionMovementReportController < ApplicationController

    def index 
        respond_to do |format|
            format.html
            format.json { render json: IntentionMovementReportDatatable.new(params) }
        end
    end
end
