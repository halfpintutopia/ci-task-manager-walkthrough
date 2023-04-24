document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var modals = document.querySelectorAll('.modal');
    var datepicker = document.querySelectorAll('.datepicker');
    var selects = document.querySelectorAll('select');

    M.Sidenav.init(elems);
    M.Modal.init(modals);
    M.Datepicker.init(datepicker, {
        form: 'dd mmm, yyyy',
        i18n: {
            done: 'Select'
        }
    });
    M.FormSelect.init(selects);
});