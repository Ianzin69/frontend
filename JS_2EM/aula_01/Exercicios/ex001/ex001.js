var barraProgresso = document.querySelector(".progress");
//esconde a barra de progresso
barraProgresso.style.display = "none";




function enviar(){
    var nome = document.querySelector("#inputNome").value;
    var idade = parseInt(document.querySelector("#inputIdade").value);
    var cidade = document.querySelector("#inputCidade").value;


    var validaCampos = validar(nome, idade, cidade);
    if(validaCampos == true)
    {
        return;
    }
    //mostra a barra de progresso
    barraProgresso.style.display = "block";
    mostrarBarra(nome, idade, cidade);
}




function validar(nome, idade, cidade){
    if(nome == "" || idade == "" || cidade =="")
    {
        document.querySelector("#resultado").innerHTML = `
        <div class="alert alert-danger fade show">
                <span>Preencha todos os campos</span>
                <button type="button" class="close" data-dismiss="alert">
                    <span aria-hidden="true">&times;</span>
                </button>
        </div>`;
        return true;
    }
    else{
        var validandoIdade = validarIdade(idade);
        if(validandoIdade === false)
        {
            return false;
        }
        else{
            return true;
        }
    }