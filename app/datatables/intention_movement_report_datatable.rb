class IntentionMovementReportDatatable < AjaxDatatablesRails::ActiveRecord

  def view_columns
    # Declare strings in this format: ModelName.column_name
    # or in aliased_join_table.column_name format
    @view_columns ||= {
      daily: { source: "@mock_up['daily']" , cond: :like},
      bcnu: {source: "@mock_up['bcnu']", cond: :like},
      bubns: {source: "@mock_up['bubns']", cond: :like},
      tfta: {source: "@mock_up['trta']",cond: :like},
      aag: {source: "@mock_up['aag']", cond: :like}


      # id: { source: "User.id", cond: :eq },
      # name: { source: "User.name", cond: :like }
    }
  end

  def data
    @mock_up.map do |record|
      {
        daily: record["daily"],
        bcnu: record["bcnu"],
        bubns: record["bubns"],
        tfta: record["trta"],
        aag: record["aag"]
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
    # IntentionMovement.all
    @mock_up = [{"daily": "2021-10-01","bcnu" : "20", "bubns" : "10" , "tfta" : "30", "aag" : "19"}]
    

  end

end
