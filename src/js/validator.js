function validateValues(x, y, r) {

    let validationInfoBox = document.querySelector('.validation_info');
    validationInfoBox.classList.remove("show");

    let validationInfo = "";
    let xValidationSuccess = false;
    let yValidationSuccess = false;
    let rValidationSuccess = false;
    let validationSuccess;

    if (x === undefined || x === "") {
        validationInfo += "<span>Не выбрано значение X!</span>";
    } else {
        xValidationSuccess = true;
    }

    if (!(y.trim() === "")) {
        let parsedY = parseFloat(y);
        if (!isNaN(parsedY)) {
            if ((parseFloat(y) > -3) && (parseFloat(y) < 5)) {
                yValidationSuccess = true;
            } else validationInfo += "<span>Координата Y задается числом в промежутке (-3..5)!</span>";
        } else {
            validationInfo += "<span>Координата Y задается числом!</span>";
        }
    } else validationInfo += "<span>Не введена координата Y!</span>";

    if (r === null || r === "") {
        validationInfo += "<span>Не выбрано значение R!</span>";
    } else {
        rValidationSuccess = true;
    }

    validationSuccess = xValidationSuccess && yValidationSuccess && rValidationSuccess;

    if (!validationSuccess) {
        document.querySelector('.validation_info').innerHTML = "<br>" + validationInfo + "<br>";
        validationInfoBox.classList.add("show");
    }

    return validationSuccess;
}