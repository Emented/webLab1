function cleanInput() {
    let selectedElems = document.querySelectorAll('.selected');
    selectedElems.forEach(element => {
        element.classList.remove('selected');
    });
    selectedElems = document.querySelectorAll('.error')
    selectedElems.forEach(element => {
        element.classList.remove('error');
    });
    document.querySelector('.validation_info').classList.remove('show');
    document.querySelector('.validation_info').innerHTML = '';
    xInput.value = '';
    document.querySelector('#r_value').value = '';
    changeR();
}

function cleanTable() {
    let tBody = document.querySelector('#table > tbody');
    tBody.innerHTML = '';
    $.ajax({
        type: "DELETE",
        url: "../src/php/index.php",
        async: false,
        success: function(data) {
            alert(data);
        },
        error: function(data) {
            alert(data);
        }
    });
}