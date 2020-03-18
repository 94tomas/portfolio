<template>
    <div class="footer" :style="{ backgroundImage: 'url(' + require('@/assets/images/cool-background.png') + ')' }">
        <b-container>
            <b-row align-v="center">
                <b-col sm="8" md="6">
                    <small>© Copyright 2020. Todos los derechos reservados - Por Edson</small>
                </b-col>
                <b-col sm="4" md="6">
                    <ul class="list-circle text-right">
                        <li>
                            <a href="https://www.facebook.com/edson.tomas.22" target="blank" title="Facebook">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/EdsonTomas1994" target="blank" title="Twitter">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/edsondev/" target="blank" title="Linkedin">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/94tomas" target="blank" title="Github">
                                <i class="fa fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style lang="scss">
    .footer {
        padding: 20px 0;
        // background: #cecece;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        z-index: 0;
        color: #cecece;
        &::before {
            content: '';
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    }
    .list-circle {
        list-style-type: none;
        padding-left: 0;
        margin-bottom: 0;
        li {
            display: inline;
            &:not(:last-child) {
                margin-right: 10px;
            }
            a {
                width: 25px;
                height: 25px;
                display: inline-block;
                text-align: center;
                background-color: #822323;
                color: #cecece;
                font-size: 12px;
                line-height: 25px;
                border-radius: 5px;
                transition: all .5s ease-out;
                &:hover {
                    transform: scale(1.1) rotateY(360deg);
                }
            }
        }
    }
    @media only screen and (max-width: 575px) {
        .footer {
            padding: 15px 0;
            .row>div,
            .list-circle {
                text-align: center !important;
            }
            .list-circle {
                margin-top: 15px;
            }
        }
    }
</style>