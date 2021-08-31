window.onload = function(){
  const cadastrar = document.querySelector("#cadastrar");
  const nome = document.querySelector("#nome");
  const curso = document.querySelector("#curso");
  const bucar = document.querySelector("#buscar");
  const id = document.querySelector("#id");
  const alterar = document.querySelector("#alterar");
  const deletar = document.querySelector("#deletar");

  cadastrar.addEventListener("click", function(){
  let formdata = new FormData();
  formdata.append('nome', '${nome.value}');
  formdata.append('curso', '${curso.value}');

//não tenho pra onde enviar
  fetch("",
    {
      body:formdata,
      method: "post"


    }).then(
      ()=>{
        alert("Registro efetuado com sucesso");
        limparCampos();
          }
    );
  });

//metodo que lista uma pessoa
buscar.addEventListener("click", function(){
//não tenho url
fetch(`/${id.value}`, {
   method: "get"
  }).then(response=>{
    response.json().then(data => {
      nome.value = data['nome'];
      curso.value = data['curso'];
    })
  })
});

//metodo para alterar os dados dos registros
alterar.addEventListener("click", function(){
  //não tenho url
  fetch(`/${id.value}`, {
   method: "put",
   headers:{
     'Content-type': 'application/json; charset=UTF-8'
   },
   body:JSON.stringify({
     'nome':`$[nome.value]`,
     'curso':`$[curso.value]`
   })
  }).then(()=>{
    alert("Registro alterado com Sucesso")
    limparCampos();
  });
});

//metodo para deletar
deletar.addEventListener("click", function(){
  //não tenho url
fetch(`/${id.value}`, {
   method: "delete"
   }).then(()=>{
     alert("Registro deletado com Sucesso")
     limparCampos();
     });

});

//limpar nomes e cursos
  function limparCampos(){
    nome.value = "";
    curso.value = "";
  };
}