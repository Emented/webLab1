const table = document.querySelector('#table > tbody');
const storage = window.localStorage;
if (storage.getItem('tableData') != null) {
    table.innerHTML += storage.getItem('tableData');
}

function addRow(data) {
    table.innerHTML += data;
    storage.setItem('tableData', (storage.getItem('tableData') != null ? storage.getItem('tableData') : '') + data);
}