function receiveSubmit() {

    let xValue = document.querySelector('#x_value').value;
    let yValue = document.querySelector('#y_value').value;
    let rValue = document.querySelector('#r_value').value;

    if (validateValues(xValue, yValue, rValue)) {
        $.ajax({
            type: 'POST',
            url: '../src/php/index.php',
            async: false,
            data: { 'x': xValue.trim(), 'y': yValue.trim(), 'r': rValue.trim() },
            success: function (data) {
                addRow(data);
                // drawPoint(xValue, yValue, rValue);
            },
            error: function (data) {
                alert(data);
            }
        });
    }
}