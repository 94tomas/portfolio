<template>
    <div id="about">
        <div class="sec-about">
            <div role="tablist" class="container">
                <p class="text-center">¡Hola! Mi nombre es Edson Arando y soy un Freelance Developer (frontend + backend) especializado en programación web y desarrollos avanzados, me considero Diseñador web, Programador web.</p>
                <p class="text-center mb-0">Te asesoramos sobre cualquier idea y te ayudaremos a encontrar un resultado justo a tu medida para tus proyectos.</p>
            </div>
        </div>
        <div class="sec-skills">
            <b-container>
                <b-row align-v="center">
                    <b-col md="6">
                        <p>Sólidos conocimientos en <strong>HTML5, CSS3, SASS y LESS</strong> junto a los lenguajes de programación como <strong>PHP, Python, Javascript.</strong> Con la ayuda de Framework como <strong>Laravel, VueJS, Bootstrap y Materialize.</strong> como tambien desarrollo de <strong>App Web Progresivas WPA</strong></p>
                        <p>Con experiencia en CMS <strong>Wordpress</strong> creando plantillas a medida o plugin personalizados, conociminetos en <strong>Child Themes, PSD a Wp, Sketch a Wp</strong></p>
                        <p>Respecto al diseño web, trabajo con <strong>Photoshop, Sketch e Invision Studio.</strong> Siempre bien organizado con iframes y desarrollo UX.</p>
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