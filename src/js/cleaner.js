function cleanInput() {
    let selectedElems = document.querySelectorAll('.selected');
    selectedElems.forEach(element => {
        element.classList.remove('selected');
    });
    xInput.value = "";
}

function cleanTable() {
    let tBody = document.querySelector('#table > tbody');
    console.log(tBody)
    tBody.innerHTML = "";
}