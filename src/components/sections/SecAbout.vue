<template>
    <div id="about">
        <div class="sec-about">
            <div role="tablist" class="container" title="Edson Tomas Arando Puma">
                <p class="text-center">¡Hola! Mi nombre es Edson T. Arando Puma, desarrollador freelancer  con conocimientos en frontend y backend especializado en programación web y móvil (desarrollo a medida).</p>
                <p class="text-center mb-0">Te asesoramos sobre cualquier idea y te ayudaremos a encontrar un resultado justo para la solución de tus proyectos.</p>
            </div>
        </div>
        <div class="sec-skills">
            <b-container>
                <b-row align-v="center">
                    <b-col md="6">
                        <p>Sólidos conocimientos en <strong>HTML5, CSS3, SCSS</strong> junto a los lenguajes de programación <strong>PHP, SQL, Python, Javascript, dart.</strong> Trabajando con los siguientes tecnologias: <strong>Laravel, Lumen, Flutter, VueJS, Quasar, Vuetify, JQuery, Bootstrap, Materialize, wordpress, socket.io, google-maps, vps.</strong> con amplia experiencia en el desarrollo de <strong>Api-Rest</strong></p>
                        <p>Experiencia con servidores <strong>google cloud, aws, heroku, digital ocean, site group, contabo</strong>.</p>
                        <p>Con experiencia en CMS <strong>Wordpress</strong> creando plantillas a medida o plugin personalizados, conociminetos en <strong>Child Themes, PSD a Wp, Sketch a Wp</strong></p>
                        <p>Manejo de <strong>Photoshop, Sketch e Invision Studio.</strong></p>
                    </b-col>
                    <b-col md="6">
                        <img src="@/assets/images/laptop-nexos.png">
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SecAbout'
}
</script>
<style lang="scss">
    .sec-about {
        background: #141626;
        padding: 40px 0;
        p {
            color: #CECECE;
            font-size: 20px;
            letter-spacing: 1px;
            font-family: 'Bubblegum Sans', cursive;
        }
    }
    .sec-skills {
        padding: 40px 0;
        img {
            width: 100%;
        }
    }
    @media only screen and (max-width: 575px) {
        .sec-about {
            p {
                font-size: 16px;
            }
        }
        .sec-skills {
            padding: 30px 0;
            p {
                font-size: 16px;
            }
            .row {
                flex-direction: column-reverse;
            }
        }
    }
</style>