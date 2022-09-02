function checkInput() {
    let yValue = document.querySelector('#y_value')
    yValue.classList.remove('error')
    if (yValue.value.length > 13){
        yValue.value = yValue.value.slice(0, 13);
        yValue.classList.add('error')
    }
}