function changeR() {
    let rField = document.querySelector('#r_value');
    if (rField.value === '') {
        document.querySelectorAll('#r').forEach(element => {
            element.innerHTML = 'R';
        })
        document.querySelectorAll('#-r').forEach(element => {
            element.innerHTML = '-R';
        })
        document.querySelectorAll('#r2').forEach(element => {
            element.innerHTML = 'R/2'
        })
        document.querySelectorAll('#-r2').forEach(element => {
            element.innerHTML = '-R/2'
        })
    } else {
        let rInt = parseInt(rField.value);
        document.querySelectorAll('#r').forEach(element => {
            element.innerHTML = rInt.toString();
        })
        document.querySelectorAll('#-r').forEach(element => {
            element.innerHTML = (-rInt).toString();
        })
        document.querySelectorAll('#r2').forEach(element => {
            element.innerHTML = (rInt / 2).toString();
        })
        document.querySelectorAll('#-r2').forEach(element => {
            element.innerHTML = (-rInt / 2).toString();
        })
    }
}

function drawPoint(x, y, r) {
    let plot = document.querySelector('svg');
    let point = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    const size = 100 / r;
    point.setAttribute('cx', (150 + x * size).toString());
    point.setAttribute('cy', (150 - y * size).toString());
    point.setAttribute('r', '4');
    plot.appendChild(point);
}