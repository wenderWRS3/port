alert("portfólio incompleto")
alert("peço um pouco de compreensão")
var lan = document.getElementById("lançamentoos")
var arqui = document.getElementById("aquirvar")
var con = document.getElementById("conferencia")


function confer() {
    if (arqui.classList.contains("putis")) {
        arqui.classList.remove('putis')
        lan.classList.remove('putis')
        console.log("oiw")
    } else {
        arqui.classList.add('putis')
        lan.classList.add('putis')
        console.log("jn")
    }
}
//criaçao de atuçao 
var div =document.createElement('div')
div.innerText="
Trabalho em uma concessionária de veículos W2,onde realizo diversas atividades relacionadas ao controle fiscal, contábil e operacional da empresa. Entre minhas principais responsabilidades está a conferência dos custos dos veículos, que envolve o cálculo do custo da mercadoria, acrescido de frete e seguro, além da inclusão dos tributos correspondentes, como ISMC, PIS eCOFINS Também sou responsável pela conferência das entradas de mercadorias das quatro filiais da empresa, por meio da verificação dos CFOPs, garantindo que as notas fiscais estejam corretamente classificadas e lançadas no sistema. Esse processo é realizado utilizando o software de controle da concessionária, o MicroWork Cloud Além disso, realizo a conferência das vendas, analisando os CFOPs utilizados, a correta integração entre os sistemas, e a compatibilidade das informações com o estoque. Verifico se as movimentações de entrada e saída estão devidamente refletidas no sistema, assegurando que o estoque físico e o estoque sistêmico estejam alinhados.Sempre que identifico divergências, inconsistências ou erros nos lançamentos, realizo as correções necessárias, seja por meio de ajustes em lançamentos incorretos ou pela realização de novos lançamentos, contribuindo para a conformidade fiscal, a confiabilidade dos dados e a correta gestão da empresa.
"