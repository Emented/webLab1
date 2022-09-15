function init() {
    getTable();
}

function getTable() {
    $.ajax({
        type: "GET",
        url: "../src/php/index.php",
        async: false,
        success: function(data) {
            document.querySelector('#table > tbody').innerHTML = data;
        },
        error: function(data) {
            alert(data);
        }
    });
}