import $ from 'jquery';
import 'bootstrap';

// Load Datatables
require('datatables.net-bs')(window, $)
require('datatables.net-buttons-bs')(window, $)
require('datatables.net-buttons/js/buttons.colVis.js')(window, $)
require('datatables.net-buttons/js/buttons.html5.js')(window, $)
require('datatables.net-buttons/js/buttons.print.js')(window, $)
require('datatables.net-responsive-bs')(window, $)
require('datatables.net-select')(window, $)


$(document).ready( function () {
    // $('#table_id').DataTable();
    intention_movement_datatable();
    intention_movement_monthly_datatable();
    intention_movement_yearly_datatable();
    // $('#intention_movement').DataTable({
    //     "ajax": "data/mock_up.txt",
    //         // dataType: 'json',
    //         // url: 'data/mock_up.txt',
    //         // dataSrc: 'data'
    //     // },
    //     "columns": [
    //       { "data": "daily" }, 
    //       { "data": "bcnu" }, 
    //       { "data": "bubns" },
    //       { "data": "tfta" },
    //       { "data": "aag"}
    //     ]
    // });
    
} );

window.intention_movement_datatable = function(){
    var dataSet = [
        [ "2021/10/01", "1", "1", "2", "1" ],
        [ "2021/10/02", "1", "16", "17", "8" ],
        [ "2021/10/03", "934", "5", "939", "850"],
        [ "2021/10/04", "3", "4", "7", "5"],
        [ "2021/10/05", "171", "5", "176","150"],
        [ "2021/10/06", "4", "37", "41", "23"],
        [ "2021/10/07", "26", "7", "33", "30"],
        [ "2021/10/08", "4", "4", "8","3"]
    ];
    // $('#intention_movement').DataTable( {
    //     data: dataSet,
    //     columns: [
    //         { title: "Daily" },
    //         { title: "Bot Cannot Understand" },
    //         { title: "Bot Understand but no Self-service" },
    //         { title: "Transferred to Agent" },
    //         { title: "Actual Handle by Agent" }
    //     ]
    // } );
    
    $('#intention_movement').DataTable({
        processing: true,
        bserverSide: false,
        paging: false,
        pageLength: 10,
        dom: "<<t>>",
        data: dataSet,
        // ajax: "data/mock_up.txt",
        // {
        //     url: $('#intention_movement').data('source'),
        //     async: false,
        //     error: function(){
        //         // check_connection();
        //     }
        // },
        columnDefs: [{'targets': [0], 'className': "first-column font_normal truncate"},
                     {'targets': [1], 'className': "truncate font_data"},
                     {'targets': [2], 'className': "truncate font_data"},
                     {'targets': [3], 'className': "truncate font_data"},
                     {'targets': [4], 'className': "last-column font_data"}],
        columns: [
            { title: "Daily" },
            { title: "Bot Cannot Understand" },
            { title: "Bot Understand but no Self-service" },
            { title: "Transferred to Agent" },
            { title: "Actual Handle by Agent" }
        ],
        language: {
            paginate: {
                previous: '<svg class="bi bi-caret-left-fill previous-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>',
                next: '<svg class="bi bi-caret-right-fill next-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>'
            },
            zeroRecords: "No data available in table",
            infoFiltered: ""
        },
        order: [[1, "desc"]],
        ordering: true,
        createdRow: function(row){
            $(row).find(".truncate").each(function(){
                $(this).attr("title", this.innerText);
            });
        },
        fnDrawCallback: function (oSettings) {
            $('[title]').tooltip({ trigger: 'hover' });
        },
        destroy: true
    });
}

window.intention_movement_monthly_datatable = function(){
    var dataSet = [
        [ "2021/10", "700", "299", "999", "869" ],
        [ "2021/09", "389", "111", "500", "250" ],
        [ "2021/08", "934", "5", "939", "850"],
        [ "2021/07", "935", "5", "940", "760"],
        [ "2021/06", "171", "5", "176","150"],
        [ "2021/05", "4", "37", "41", "23"],
        [ "2021/04", "26", "7", "33", "30"],
        [ "2021/03", "4", "4", "8","3"]
    ];
    // $('#intention_movement').DataTable( {
    //     data: dataSet,
    //     columns: [
    //         { title: "Daily" },
    //         { title: "Bot Cannot Understand" },
    //         { title: "Bot Understand but no Self-service" },
    //         { title: "Transferred to Agent" },
    //         { title: "Actual Handle by Agent" }
    //     ]
    // } );
    
    $('#intention_movement_monthly').DataTable({
        processing: true,
        bserverSide: false,
        paging: false,
        pageLength: 10,
        dom: "<<t>>",
        data: dataSet,
        // ajax: "data/mock_up.txt",
        // {
        //     url: $('#intention_movement').data('source'),
        //     async: false,
        //     error: function(){
        //         // check_connection();
        //     }
        // },
        columnDefs: [{'targets': [0], 'className': "first-column font_normal truncate"},
                     {'targets': [1], 'className': "truncate font_data"},
                     {'targets': [2], 'className': "truncate font_data"},
                     {'targets': [3], 'className': "truncate font_data"},
                     {'targets': [4], 'className': "last-column font_data"}],
        columns: [
            { title: "Monthly" },
            { title: "Bot Cannot Understand" },
            { title: "Bot Understand but no Self-service" },
            { title: "Transferred to Agent" },
            { title: "Actual Handle by Agent" }
        ],
        language: {
            paginate: {
                previous: '<svg class="bi bi-caret-left-fill previous-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>',
                next: '<svg class="bi bi-caret-right-fill next-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>'
            },
            zeroRecords: "No data available in table",
            infoFiltered: ""
        },
        order: [[1, "desc"]],
        ordering: true,
        createdRow: function(row){
            $(row).find(".truncate").each(function(){
                $(this).attr("title", this.innerText);
            });
        },
        fnDrawCallback: function (oSettings) {
            $('[title]').tooltip({ trigger: 'hover' });
        },
        destroy: true
    });
}

window.intention_movement_yearly_datatable = function(){
    var dataSet = [
        [ "2021", "1", "1", "2", "1" ],
        [ "2022", "1", "16", "17", "8" ],
        [ "2023", "934", "5", "939", "850"],
        [ "2024", "3", "4", "7", "5"],
        [ "2025", "171", "5", "176","150"],
        [ "2026", "4", "37", "41", "23"],
        [ "2027", "26", "7", "33", "30"],
        [ "2028", "4", "4", "8","3"]
    ];
    // $('#intention_movement').DataTable( {
    //     data: dataSet,
    //     columns: [
    //         { title: "Daily" },
    //         { title: "Bot Cannot Understand" },
    //         { title: "Bot Understand but no Self-service" },
    //         { title: "Transferred to Agent" },
    //         { title: "Actual Handle by Agent" }
    //     ]
    // } );
    
    $('#intention_movement_yearly').DataTable({
        processing: true,
        bserverSide: false,
        paging: false,
        pageLength: 10,
        dom: "<<t>>",
        data: dataSet,
        // ajax: "data/mock_up.txt",
        // {
        //     url: $('#intention_movement').data('source'),
        //     async: false,
        //     error: function(){
        //         // check_connection();
        //     }
        // },
        columnDefs: [{'targets': [0], 'className': "first-column font_normal truncate"},
                     {'targets': [1], 'className': "truncate font_data"},
                     {'targets': [2], 'className': "truncate font_data"},
                     {'targets': [3], 'className': "truncate font_data"},
                     {'targets': [4], 'className': "last-column font_data"}],
        columns: [
            { title: "Year" },
            { title: "Bot Cannot Understand" },
            { title: "Bot Understand but no Self-service" },
            { title: "Transferred to Agent" },
            { title: "Actual Handle by Agent" }
        ],
        language: {
            paginate: {
                previous: '<svg class="bi bi-caret-left-fill previous-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/></svg>',
                next: '<svg class="bi bi-caret-right-fill next-icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>'
            },
            zeroRecords: "No data available in table",
            infoFiltered: ""
        },
        order: [[1, "desc"]],
        ordering: true,
        createdRow: function(row){
            $(row).find(".truncate").each(function(){
                $(this).attr("title", this.innerText);
            });
        },
        fnDrawCallback: function (oSettings) {
            $('[title]').tooltip({ trigger: 'hover' });
        },
        destroy: true
    });
}