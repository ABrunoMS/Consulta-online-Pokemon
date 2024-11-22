var formulario = document.querySelector('form')

formulario.addEventListener('submit', function (e) {
    
    e.preventDefault()

    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    let name = document.getElementById("name")

    /*urlForm = urlForm + this.name.value*/
    urlForm = `${urlForm}${name.value}`

    urlForm = urlForm.toLocaleLowerCase()

    let response =  document.getElementById('content')

    let image = document.getElementById('imgPokemon')

    let html = ''

    fetch(urlForm)
        .then(response => response.json())
        .then(function (data){
            console.log(data)
            html = 'Nome: ' + upperCase(data.name) + '<br>'
            html = html + 'Type: ' + upperCase(data.types[0].type.name)
            response.innerHTML = html

            image.innerHTML = "<img src='" + data.sprites.front_default + 
            "'><img src='" + data.sprites.back_default + "'>"
            
        })
        .catch(function (err){
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokémon não encontrado!😢'
            } else {
                html = 'Erro:' + err
            }
           response.innerHTML = html
        })



    
        


});

function upperCase(val){
    return val[0].toUpperCase() + val.substr(1)
}