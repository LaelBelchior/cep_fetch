const pesquisarCep = document.querySelector("#pesquisar")

pesquisarCep.addEventListener("click", event => {
    event.preventDefault()
    const inputCep = document.querySelector("#cep")
    const valorCep = inputCep.value
    const url = `https://viacep.com.br/ws/${valorCep}/json/`

    fetch(url)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            atribuirCampos(data)
        })

})

const limpar = document.querySelector("#limpar")

limpar.addEventListener("click", event => {
    limparCampos()
})

function atribuirCampos(data)
    {
        const rua = document.querySelector("#rua");
        const complemento = document.querySelector("#complemento");
        const bairro = document.querySelector("#bairro");
        const cidade = document.querySelector("#cidade");
        const estado = document.querySelector("#estado");
        
        rua.value = data.logradouro;
        complemento.value = data.complemento;
        bairro.value = data.bairro;
        cidade.value = data.localidade;
        estado.value = data.uf;
    }


function limparCampos(){
    const cep = document.querySelector("#cep")
    const rua = document.querySelector("#rua");
    const complemento = document.querySelector("#complemento");
    const bairro = document.querySelector("#bairro");
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");
    
    cep.value = ""
    rua.value = ""
    complemento.value = ""
    bairro.value = ""
    cidade.value = ""
    estado.value = ""
}