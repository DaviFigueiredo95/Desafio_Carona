let dados = [];
console.log(dados);
const salvarDados = () => {
    let nome = document.getElementById("nome");
    let data_nascimento = document.getElementById("data_nascimento");
    let rg = document.getElementById("rg");
    let cpf = document.getElementById("cpf");
    let cnh = document.getElementById("cnh");
    let antecedentes_criminais = document.getElementById("antecedentes_criminais");
    let marca = document.getElementById("marca");
    let modelo = document.getElementById("modelo");
    let cor = document.getElementById("cor");
    let placa = document.getElementById("placa");
    let rua = document.getElementById("rua");
    let numero = document.getElementById("numero");
    let bairro = document.getElementById("bairro");
    let cidade = document.getElementById("cidade");
    let cep = document.getElementById("cep");
    let nome2 = document.getElementById("nome2");
    let data_nascimento2 = document.getElementById("data_nascimento2");
    let idade = document.getElementById("idade");
    let escola = document.getElementById("escola");
    let secretaria = document.getElementById("secretaria");
    let endereco = document.getElementById("endereco");

    dados.push({
        'nome': nome.value,
        'data_nascimento': data_nascimento.value,
        'rg': rg.value,
        'cpf': cpf.value,
        'cnh': cnh.value,
        'antecedentes_criminais': antecedentes_criminais.value,
        'marca': marca.value,
        'modelo': modelo.value,
        'cor': cor.value,
        'placa': placa.value,
        'rua': rua.value,
        'numero': numero.value,
        'bairro': bairro.value,
        'cidade': cidade.value,
        'cep': cep.value,
        'nome2': nome2.value,
        'data_nascimento2': data_nascimento2.value,
        'idade': idade.value,
        'escola': escola.value,
        'secretaria': secretaria.value,
        'endereco': endereco.value
    });


    
}