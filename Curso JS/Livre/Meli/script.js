let category = document.getElementById('categories').value
let resultado = document.getElementById('resultado')

function insertCategories() {

    let xhr = new XMLHttpRequest();
   
   	xhr.open("GET", "https://api.mercadolibre.com/categories/"+ category, true);
    xhr.withCredentials = false

    let obj = jQuery.parseJSON(xhr.responseText);
    let items = [];
   	items = obj;	

    resultado.innerHTML += `<br>Conteúdo da variável obj: ${obj} <br>`
    resultado.innerHTML += `<br>Conteúdo da variável items: ${items} <br>`


}




function finalizar() {
    document.location.reload(true)
}