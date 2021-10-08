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
} );

window.intention_movement_datatable = function(){
    $('#intention_movement').DataTable({
        processing: true,
        serverSide: true,
        paging: false,
        pageLength: 10,
        dom: "<<t>ip>",
        ajax: {
            url: $('#intention_movement').data('source'),
            async: false,
            error: function(){
                // check_connection();
            }
        },
        columnDefs: [{'targets': [0], 'className': "first-column truncate"},
                     {'targets': [1], 'className': "truncate"},
                     {'targets': [2], 'className': "truncate"},
                     {'targets': [3], 'className': "truncate"},
                     {'targets': [4], 'className': "last-column"}],
        columns: [
            {"data": "daily"},
            {"data": "bcnu"},
            {"data": "bubns"},
            {"data": "tfta"},
            {"data": "aag"}
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