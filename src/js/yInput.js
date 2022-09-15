function checkInput() {
    let yValue = document.querySelector('#y_value')
    yValue.classList.remove('error')
    if (yValue.value.indexOf('.') === -1 && yValue.value.indexOf(',') === -1) {
        return;
    }
    if ((yValue.value.length -
        (yValue.value.indexOf('.') === -1 ?
            yValue.value.indexOf(',') :
            yValue.value.indexOf('.'))) > 11) {
        yValue.value = yValue.value.slice(0, yValue.value.indexOf('.') + 12);
        yValue.classList.add('error');
    }
    // if (yValue.value.length > 13){
    //     yValue.value = yValue.value.slice(0, 13);
    //     yValue.classList.add('error')
    // }
}