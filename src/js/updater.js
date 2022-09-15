function receiveSubmit() {

    let xValue = document.querySelector('#x_value').value;
    let yValue = document.querySelector('#y_value').value;
    let rValue = document.querySelector('#r_value').value;

    const date = new Date();
    const offset = date.getTimezoneOffset();

    if (validateValues(xValue, yValue, rValue)) {
        $.ajax({
            type: 'POST',
            url: '../src/php/index.php',
            async: false,
            data: { 'x': parseInt(xValue.trim()),
                'y': parseFloat(yValue.trim().replace(',', '.')),
                'r': parseInt(rValue.trim()),
                'utc': offset },
            success: function (response) {
                document.querySelector('#table > tbody').innerHTML = response;
            },
            error: function (data) {
                alert(data);
            }
        });
    }
}