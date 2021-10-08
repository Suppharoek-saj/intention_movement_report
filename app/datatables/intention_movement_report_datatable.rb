class IntentionMovementReportDatatable < AjaxDatatablesRails::ActiveRecord

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      daily: { source: "IntentionMovement.start_time" , cond: :like},
      bcnu: {source: "IntentionMovement.reason", cond: :like},
      bubns: {source: "IntentionMovement.reason", cond: :like},
      tfta: {source: "IntentionMovement.status",cond: :like},
      aag: {source: "IntentionMovement.agent_response", cond: :like}


      # id: { source: "User.id", cond: :eq },
      # name: { source: "User.name", cond: :like }
    }
  end

  def data
    records.map do |record|
      {
        daily: record.start_time.to_date.strftime("%Y-%m-%d"),
        bcnu: record.reason,
        bubns: record.reason,
        tfta: record.status,
        aag: record.agent_response
      }
        
        # @bcnu = IntentionMovementReport.where(reason: "NUS").count
        # example:
        # id: record.id,
        # name: record.name
      
    end
  end

  def get_raw_records
    # insert query here
    # User.all 
    IntentionMovement.all

  end

end
