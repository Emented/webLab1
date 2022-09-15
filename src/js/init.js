function init() {
    getTable();
}

function getTable() {
    $.ajax({
        type: "GET",
        url: "../src/php/index.php",
        async: false,
        success: function(response) {
            document.querySelector('#table > tbody').innerHTML = response;
        },
        error: function(data) {
            alert(data);
        }
    });
}