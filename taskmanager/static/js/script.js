document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var modals = document.querySelectorAll('.modal');

    M.Sidenav.init(elems);
    M.Modal.init(modals);
});