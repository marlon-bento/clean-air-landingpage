<template>
    <div class="conteudo-patrocinio">
        <div class=" text-center d-flex flex-column align-items-center mt-5 pt-4" id="patrocinio">
            <span class="secao text-center mt-2">Patrocínio</span>
            <h1 class="titulo mt-3">Seja um Investidor: Contribua para o Futuro da Segurança</h1>
            <p class="texto mt-3">
                Acreditamos que a prevenção salva vidas, e com sua ajuda, podemos levar o CleanAir a ainda mais lares e
                empresas. Faça uma doação e torne-se um investidor no futuro da segurança. Sua contribuição nos ajudará
                a
                desenvolver ainda mais tecnologias avançadas para monitoramento e proteção.
            </p>
        </div>
        <div class="container mt-2">
            <div class="row gx-4 gy-4">
                <div class="col-sm-6 col-md-6 col-lg">
                    <div
                        class=" card p-4 h-100  d-flex flex-coloumn align-items-center text-center justify-content-between">

                        <div>
                            <div class="d-flex justify-content-center w-100">
                                <div class="icon-container ">
                                    <img :src="icon_carteira" alt="">
                                </div>
                            </div>

                            <h1 class="titulo-card mt-3">Apoio Financeiro:</h1>
                            <p class="texto-card">
                                Contribua com qualquer valor e faça parte de uma comunidade que está ajudando a salvar
                                vidas.

                            </p>
                        </div>

                        <button class="get">Learn More &gt; </button>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg">
                    <div
                        class=" card p-4 h-100 d-flex flex-coloumn align-items-center text-center justify-content-between">
                        <div>
                            <div class="d-flex justify-content-center w-100">
                                <div class="icon-container ">
                                    <img :src="icon_investimento" alt="">
                                </div>
                            </div>

                            <h1 class="titulo-card mt-3">Investimentos
                                Corporativos:</h1>
                            <p class="texto-card">
                                Sua empresa também pode fazer a diferença. Oferecemos planos de parceria para grandes
                                investidores, incluindo opções exclusivas de integração com sistemas corporativos.
                            </p>
                        </div>

                        <button class="get">Learn More &gt; </button>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg">
                    <div
                        class=" card p-4 h-100  d-flex flex-coloumn align-items-center text-center justify-content-between">
                        <div>
                            <div class="d-flex justify-content-center w-100">
                                <div class="icon-container ">
                                    <img :src="icon_user" alt="">
                                </div>
                            </div>

                            <h1 class="titulo-card mt-3">Divulgação nas Redes Sociais:</h1>
                            <p class="texto-card">
                                Compartilhe o CleanAir e ajude a conscientizar sobre os perigos do CO e CO₂. Quanto mais
                                pessoas
                                alcançarmos, mais vidas poderemos salvar. Seja um embaixador da segurança online!
                            </p>
                        </div>
                        <button class="get">Learn More &gt; </button>
                    </div>
                </div>


            </div>
        </div>
        <img class="espaco2" :src="img_espaco2" alt="">
    </div>



</template>
<style scoped>
.secao {
    color: var(--cor-azul);
    font-size: 19px;
}

button {
    color: white;
    font-size: 25px;
    padding: 15px 50px;
    border-radius: 10px;
    font-weight: bold;
}

.get {
    background-color: var(--cor-azul);
    border: none;
}

.get:active {
    background-color: var(--cor-azul-hover);
}

.titulo {
    font-size: 36px;
    color: white;
    font-weight: bold;
}

.texto {
    color: var(--cor-cinza);
    font-size: 19px;
    max-width: 900px;
}


.conteudo-patrocinio{
    position: relative;
}
.espaco2{
    position: absolute;
    z-index: -10;
    top: -200px;
    left: -490px;
}

.card {
    border-radius: 10px;
    border: #353535 solid 1px;
    background-color: #030B15;
}

.icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: #5f5f5f2c;

    width: 100px;
    height: 100px;
    border: #353535 solid 1px;
}

.titulo-card {
    font-weight: bold;
    color: white;
}

.texto-card {
    color: #7D7D7D;

}
</style>
<script setup>
import icon_carteira from "@/assets/iconCarteira.png"
import icon_user from "@/assets/iconUser.png"
import icon_investimento from "@/assets/iconInvestimento.png"

import img_espaco2 from "@/assets/espaco2.png"
</script>