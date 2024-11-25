<template>
    <div class="container-beneficio px-2 px-md-4 px-lg-5" id="recursos">
        <div class=" text-center d-flex flex-column align-items-center mt-5 pt-4">
            <span class="secao text-center mt-2">Nossos recursos</span>
            <h1 class="titulo mt-3">Benefícios de Usar Nossos Sensores</h1>
            <p class="texto mt-3">
                Descubra como o CleanAir pode transformar sua segurança e bem-estar. Nossos recursos foram projetados
                para
                oferecer proteção eficaz e suporte constante, garantindo que você e sua família estejam sempre seguros.
            </p>
        </div>
        <div class="row gx-3">
            <div class="col">
                <div class="d-flex flex-column align-items-center h-100">
                    <div class="d-flex flex-column align-items-center text-center card p-2 h-100 mb-3 ">
                        <img :src="icon_person" alt="">
                        <h1 class="fs-1 text-white bold">Conta Gratuita Inclúida</h1>
                        <p class="texto-card">
                            Monitore seus sensores sem custos adicionais com nossa conta gratuita.
                        </p>
                    </div>
                    <div class="d-flex flex-column align-items-center text-center card p-2 h-100 mt-3">
                        <img :src="icon_joinha" alt="">
                        <h1 class="fs-1 text-white bold">Melhorias Constantes</h1>
                        <p class="texto-card">
                            Valorizamos o feedback dos usuários para aprimorar o CleanAir. Suas experiências nos ajudam a otimizar nossas soluções e a melhorar continuamente a ferramenta!
                        </p>
                    </div>
     
                </div>
            </div>
            <img class="col-5 d-none d-md-block" :src="img_personagem" alt="">
            <div class="col">
                <div class="d-flex flex-column align-items-center h-100">
                    <div class="d-flex flex-column align-items-center text-center card p-2 h-100 mb-3 ">
                        <img :src="icon_star" alt="">
                        <h1 class="fs-1 text-white bold">Monitoramento Preciso</h1>
                        <p class="texto-card">
                            Sensores de alta precisão garantem a confiabilidade das leituras e alertas.
                        </p>
                    </div>
                    <div class="d-flex flex-column align-items-center text-center card p-2 h-100 mt-3">
                        <img :src="icon_suporte" alt="">
                        <h1 class="fs-1 text-white bold">Suporte 24/7</h1>
                        <p class="texto-card">
                            Receba notificações instantâneas sempre que houver risco com os níveis de CO ou CO₂.

                        </p>
                    </div>
     
                </div>
            </div>
        </div>
        <img class="espaco3" :src="img_espaco3" alt="">
    </div>

</template>
<style scoped>
.container-beneficio{
    position: relative;
}
.secao {
    color: var(--cor-azul);
    font-size: 19px;
}
.espaco3{
    position: absolute;
    z-index: -10;
    top: -80px;
    left: -10px;
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

.texto-card {
    color: #7D7D7D;

}

.card {
    background-color: #030B15;
    border: #00ADD8 solid 4px;
    -webkit-box-shadow: 0px 1px 18px 2px #00add89f;
    -moz-box-shadow: 0px 1px 18px 2px #00add89f;
    box-shadow: 0px 1px 18px 2px #00add89f;
    max-width: 400px;
    
}
</style>
<script setup>
import img_personagem from "@/assets/personagemPensando.png"
import icon_person from "@/assets/iconPerson.png"
import icon_joinha from "@/assets/iconJoinha.png"
import icon_star from "@/assets/iconStar.png"
import icon_suporte from "@/assets/iconSuporte.png"
import img_espaco3 from "@/assets/espaco3.png"
</script>