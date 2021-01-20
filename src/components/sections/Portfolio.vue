<template>
    <div id="portfolio" class="sec-portfolio">
        <b-container class="bv-example-row">
            <h3 class="text-center mb-5"><span>Mi</span> portafolio</h3>
            <b-row class="justify-content-center">
                <!-- portfolio -->
                <b-col sm="6" md="4" class="mb-5" v-for="(item, index) in portfolio">
                    <a href="javascript:;" 
                    class="website-pack-preview"
                    variant="primary"
                    @click="showModal(index)">
                        <span>
                            <img v-bind:src="require('@/assets/portfolio/'+item.imgFront)">
                        </span>
                        <span>
                            <img v-bind:src="require('@/assets/portfolio/'+item.imgLeft)">
                        </span>
                        <span>
                            <img v-bind:src="require('@/assets/portfolio/'+item.imgRight)">  
                        </span>
                    </a>
                </b-col>
                <!-- end portfolio -->
            </b-row>
        </b-container>
        <!-- modal -->
        <b-modal ref="my-modal" hide-footer size="lg" :title="modalPortfolio.Mtitle">
            <div class="c-modal">
                <b-row>
                    <b-col sm="6" lg="8">
                        <img v-bind:src="modalPortfolio.MimgFront">
                    </b-col>
                    <b-col sm="6" lg="4">
                        <h6>Acerca del Proyecto</h6>
                        <p>{{modalPortfolio.Mdescription}}</p>
                        <h6>Sitio</h6>
                        <a :href="modalPortfolio.MlinkSite" target="blank">Visitar sitio</a>
                        <h6>Herramientas utilizadas</h6>
                        <ul>
                            <li v-for="tool in modalPortfolio.Mtools">
                                {{tool}}
                            </li>
                        </ul>
                    </b-col>
                </b-row>
            </div>
        </b-modal>
        <!-- end modal -->
    </div>
</template>
<script>
export default {
    name: 'portfolio',
    data () {
        return {
            portfolio: [
                {
                    title: 'nexos LMS',
                    imgFront: 'nexos/homepage-nexos.png',
                    imgLeft: 'nexos/contact.png',
                    imgRight: 'nexos/certificate.png',
                    description: 'Sistemas de gestión de aprendizaje para la empresa NEXOS S.R.L. que apoya al sector de la educación a dicha empresa',
                    linkSite: 'https://nexoslms.000webhostapp.com/',
                    tools: ['HTML5', 'SASS', 'Javascript', 'jQuery', 'PHP', 'mySQL', 'Laravel']
                },
                {
                    title: 'vikinger',
                    imgFront: 'vikinger/vikinger.png',
                    imgLeft: 'vikinger/vikinger.png',
                    imgRight: 'vikinger/vikinger.png',
                    description: 'A partir de una imagen se trabajo en sitio de prueba front-end',
                    linkSite: 'https://94tomas.github.io/vikinger/',
                    tools: ['HTML5', 'CSS3', 'jQuery']
                },
                {
                    title: 'Mi sitio web',
                    imgFront: 'mysite/cv.png',
                    imgLeft: 'mysite/cv2.png',
                    imgRight: 'mysite/cv.png',
                    description: 'Mi portafolio hecho para mostrar mis habilidades y aumentar mis conocimientos en el mundo del desarrollo',
                    linkSite: 'javascript',
                    tools: ['HTML5', 'SASS', 'VueJs', 'PWA']
                },
                {
                    title: 'fivo',
                    imgFront: 'fivo/fivo.png',
                    imgLeft: 'fivo/fivo_mobile.png',
                    imgRight: 'fivo/fivo_mobile.png',
                    description: 'Sitio desarrollado en Wordpress en la empresa que trabaje SmartinCode de la ciudad de Cochabamba',
                    linkSite: 'http://fivo.io',
                    tools: ['HTML5', 'CSS3', 'Javascript', 'jQuery', 'PSD to WP', 'Wordpress']
                },
                {
                    title: 'caminovalley',
                    imgFront: 'caminovalley/caminovalley.png',
                    imgLeft: 'caminovalley/caminovalley_mobile.png',
                    imgRight: 'caminovalley/caminovalley2.png',
                    description: 'Sitio desarrollado en Wordpress en la empresa que trabaje SmartinCode de la ciudad de Cochabamba',
                    linkSite: 'https://www.caminoasiliconvalley.com/',
                    tools: ['HTML5', 'CSS3', 'Javascript', 'jQuery', 'PSD to WP', 'Wordpress']
                }
            ],
            modalPortfolio: {
                Mtitle: '',
                MimgFront: '',
                Mdescription: '',
                MlinkSite: '',
                Mtools: []
            }
        }
    },
    methods: {
        showModal(index) {
            this.modalPortfolio.Mtitle = this.portfolio[index].title
            this.modalPortfolio.MimgFront = require('@/assets/portfolio/'+this.portfolio[index].imgFront)
            this.modalPortfolio.Mdescription = this.portfolio[index].description
            this.modalPortfolio.MlinkSite = this.portfolio[index].linkSite
            this.modalPortfolio.Mtools = this.portfolio[index].tools
            this.$refs['my-modal'].show()
        }
    }
}
</script>
<style lang="scss">
    .sec-portfolio {
        padding: 20px 0;
        h3 {
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: bold;
            font-size: 35px;
            span{
                color: #822323;
            }
        }
    }
    .website-pack-preview {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 10px 70px 0 rgba(130, 35, 35, 0.2), 0 15px 105px 0 rgba(20, 22, 38, 0.2);
            transition: 300ms all cubic-bezier(.4,0,.2,1);
            margin: 0;
            padding: 0;
            overflow: hidden;
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            &:first-child {
                width: 190px;
                height: 240px;
                z-index: 3;
            }
            &:nth-child(2), 
            &:nth-child(3) {
                position: absolute;
                top: 12px;
                width: 170px;
                height: 200px;
                opacity: .8;
                z-index: 2;
            }
            &:nth-child(3) {
                right: 25px;
            }
            &:nth-child(2) {
                left: 25px;
            }
            img {
                display: block;
                max-width: 100%;
                align-self: center;
                transition: 300ms all cubic-bezier(.4,0,.2,1);
                visibility: visible;
                opacity: 1;
                &:not(.lazy) {
                    height: auto;
                }
            }
        }
        &:hover {
            span {
                padding: 0;
                overflow: hidden;
                &:first-child {
                    width: 160px;
                }
                &:nth-child(2) {
                    left: 0;
                    transform: rotate(-5deg);
                    width: 160px;
                }
                &:nth-child(3) {
                    right: 0;
                    transform: rotate(5deg);
                    width: 160px;
                }
            }
        }
    }
    .c-modal {
        img {
            width: 100%;
            border: 1px solid #cecece;
        }
        h6 {
            color: #822323;
            margin-bottom: 2px;
        }
        p {
            font-size: 14px;
            margin-bottom: 15px;
        }
        a {
            color: #7984de;
            // font-family: "Bubblegum Sans", cursive;
            margin-bottom: 15px;
            display: inline-block;
            font-weight: bold;
        }
        ul {
            list-style-type: none;
            padding-left: 0;
            margin-bottom: 15px;
            font-size: 14px;
            margin-top: 10px;
            li {
                display: inline-block;
                background: #cecece;
                color: #141626;
                padding: 2px 5px;
                margin-bottom: 5px;
                font-size: 12px;
                &:not(:last-child) {
                    margin-right: 5px;
                }
            }
        }
    }
    .modal-title {
        text-transform: capitalize;
    }
    // responsive
    @media only screen and (max-width: 575px) {
        .sec-portfolio {
            h3 {
                font-size: 22px;
            }
        }
        .c-modal {
            .row {
                flex-direction: column-reverse;
            }
        }
    }
</style>