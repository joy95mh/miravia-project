{% extends "base.html" %}

{% block content %}
<style>
  /* Custom CSS for table */
  #data_wrapper .row:nth-child(2) {
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
  }
  /* table */
  #data {
    width: 100%;
  }
</style>

<div style="margin-top: 70px;" class="container">
  <!-- <h1>{{ title }}</h1> -->
  <div class="row">
    <div class="col-md-3 mb-3">
      <div class="input-group">
        <input id="dateFilter" type="text" class="form-control form-control-sm" placeholder="Select Date">
        <button id="clearFilter" class="btn btn-secondary btn-sm" type="button">Clear</button>
      </div>
    </div>
  </div>
  <table id="data" class="table table-striped">
    <thead>
      <tr>
        {% for column in columns %}
        <th>{{ column }}</th>
        {% endfor %}
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
</div>

{% endblock %}

{% block scripts %}
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.11.4/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.11.4/js/dataTables.bootstrap5.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tempusdominus-bootstrap-5@6.0.0-beta2/css/tempusdominus-bootstrap-5.min.css" />
<script src="https://cdn.jsdelivr.net/npm/tempusdominus-bootstrap-5@6.0.0-beta2/js/tempusdominus-bootstrap-5.min.js"></script>
<script>
  $(document).ready(function () {
    var usersData = JSON.parse('{{ users | safe }}');
    var dataTable = $('#data').DataTable({
      lengthMenu: [20, 100, 1000],
      data: usersData,
      columns: [
        {
          data: 'start_time',
          title: 'Start Time',
          render: function (data, type, row) {
            if (type === 'filter') {
              // Render a hidden input field for filtering
              return '<input type="hidden" class="filter-input" />';
            } else {
              // Render the actual value
              return data;
            }
          }
        },
        { data: 'end_time', title: 'End Time' },
        { data: 'assignment_date', title: 'Assignment Date' },
        { data: 'pic', title: 'PIC' },
        { data: 'lead_number', title: 'Lead Number' },
        { data: 'source', title: 'Source' },
        { data: 'url', title: 'URL' },
        { data: 'product_service', title: 'Product/Service' },
        { data: 'is_local_spanish_seller', title: 'Local Spanish Seller' },
        { data: 'vat', title: 'VAT' },
        { data: 'cluster', title: 'Cluster' },
        { data: 'l1', title: 'L1' },
        { data: 'l2', title: 'L2' },
        { data: 'company_name', title: 'Company Name' },
        { data: 'revenue', title: 'Revenue' },
        { data: 'product_count', title: 'Product Count' },
        { data: 'product_desc_or_at_least_2_product_images', title: 'Product Description' },
        { data: 'amount_phone_number', title: 'Amount of Phone Numbers' },
        { data: 'telephone', title: 'Telephone' },
        { data: 'telephone1', title: 'Telephone 1' },
        { data: 'amount_emails', title: 'Amount of Emails' },
        { data: 'email', title: 'Email' },
        { data: 'email1', title: 'Email 1' },
        { data: 'feedback_final', title: 'Feedback Final' },
        { data: 'qualification_feedback', title: 'Qualification Feedback' },
        { data: 'resolution_date', title: 'Resolution Date' },
        { data: 'leads_id', title: 'Leads ID' },
        { data: 'prio', title: 'Prio' },
      ]
    });

    // Initialize the DateTimePicker
    $('#dateFilter').datetimepicker({
      format: 'YYYY-MM-DD HH:mm',
      sideBySide: true,
      icons: {
        time: 'fas fa-clock',
        date: 'fas fa-calendar',
        up: 'fas fa-chevron-up',
        down: 'fas fa-chevron-down',
        previous: 'fas fa-chevron-left',
        next: 'fas fa-chevron-right',
        today: 'fas fa-crosshairs',
        clear: 'fas fa-trash',
        close: 'fas fa-times'
      }
    });

    // Apply the custom filter when the date is selected
    $('#dateFilter').on('change.datetimepicker', function (e) {
      var selectedDate = e.date.format('YYYY-MM-DD HH:mm');

      // Update the hidden filter input with the selected date and time
      $('.filter-input').val(selectedDate);

      // Trigger the filter event on the filter input to apply the filter
      $('.filter-input').trigger('change');
    });

    // Clear the filter when the "Clear" button is clicked
    $('#clearFilter').on('click', function () {
      $('#dateFilter').datetimepicker('clear');

      // Clear the hidden filter input value
      $('.filter-input').val('');

      // Trigger the filter event on the filter input to clear the filter
      $('.filter-input').trigger('change');
    });
  });
</script>
{% endblock %}