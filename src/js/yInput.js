function checkInput() {
    let yValue = document.querySelector('#y_value')
    yValue.classList.remove('error')
    let prevLen = yValue.value.length;
    yValue.value = yValue.value.replace(/[^0-9\.\,\-]/g, '');
    if (prevLen - 1 === yValue.value.length) {
        yValue.classList.add('error')
    }
    if (yValue.value.length > 13){
        yValue.value = yValue.value.slice(0, 13);
        yValue.classList.add('error')
    }
}