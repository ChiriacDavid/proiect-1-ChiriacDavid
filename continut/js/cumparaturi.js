function Produs(nume,cantitate, nr) {
    this.name=nume;
    this.quantity=cantitate;
    this.id=nr;
}

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
var id=0;
function addToStorage(){
    if (storageAvailable('localStorage')) {
        id++;
        var produs=new Produs(document.getElementById('numeProdus'),document.getElementById('cantitate'), id);
        localStorage.setItem('produs',produs)
        //localStorage.setItem('numeProdus',document.getElementById('numeProdus').value);
        //localStorage.setItem('cantitate',document.getElementById('cantitate').value);
        //localStorage.setItem('id',id);
    }
    else {
        alert('Storage-ul nu este disponibil');
    }
}

var myWorker = new Worker('worker.js');