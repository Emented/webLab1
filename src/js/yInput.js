function checkInput() {
    this.value = this.value.replace(/[^0-9\.\,]/g, '');
    if (this.value.length > 13){
        this.value = this.value.slice(0, 13);
    }
}