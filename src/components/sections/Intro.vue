<template>
    <div class="sec-intro text-center container">
        <h3>programador<span> web y móvil</span></h3>
        <!-- <h3><vue-typer
                        :text='["programador"]'
                        :repeat='Infinity'
                        :shuffle='false'
                        initial-action='typing'
                        :pre-type-delay='70'
                        :type-delay='70'
                        :pre-erase-delay='50000'
                        :erase-delay='250'
                        erase-style='clear'
                        :erase-on-complete='false'
                        caret-animation='blink'
                      ></vue-typer> <span style="color: #822323 !important;">web</span></h3> -->
        <p>¡Hacemos tus proyecto realidad!</p> 
        <a class="btn btn-secundary" href="javascript:;" role="button" v-scroll-to="'#contact'">Solicita informacion</a>
    </div>
</template>
<script>
export default {
    name: 'Intro'
}
</script>
<style lang="scss">
    .sec-intro {
        padding: 80px 0;
        h3 {
            font-size: 50px;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: bold;
            span {
                color: #822323
                /* color: inherit !important;
                &.caret {
                    background-color: #141626;
                    width: 3px;
                } */
            }
        }
        p {
            font-size: 30px;
        }
    }

    /* Ripple Out */
    @-webkit-keyframes hvr-ripple-out {
        100% {
            top: -12px;
            right: -12px;
            bottom: -12px;
            left: -12px;
            opacity: 0;
        }
    }
    @keyframes hvr-ripple-out {
        100% {
            top: -12px;
            right: -12px;
            bottom: -12px;
            left: -12px;
            opacity: 0;
        }
    }
    .btn {
        display: inline-block;
        vertical-align: middle;
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        border: 0;
        border-radius: 0;
        text-transform: capitalize;
        color: #141626;
        font-size: 15px;
        letter-spacing: 1px;

        margin: 6px;
        padding: 6px 25px;
        cursor: pointer;
        background: #cecece;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-font-smoothing: antialiased;
        &::before {
            content: '';
            position: absolute;
            border: #cecece solid 6px;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            animation-duration: 1s;
        }
        &:hover {
            background-color: #cecece;
            &::before {
                animation-name: hvr-ripple-out;
                border-color: #cecece;
            }
        }
        &:focus,
        &:active {
            box-shadow: none;
            border: 0;
            outline: 0;
        }
        &.btn-primary {
            background: #7984de;
            color: #fff;
            &::before {
                border-color: #7984de;
            }
        }
        &.btn-secundary {
            background: #822323;
            color: #fff;
            &::before {
                border-color: #822323;
            }
        }
    }
    /* responsive */
    @media only screen and (max-width: 991px) {
        .sec-intro {
            padding: 60px 0;
            h3 {
                font-size: 35px;
            }
            p {
                font-size: 25px;
            }
        }
    }
    @media only screen and (max-width: 575px) {
        .sec-intro {
            padding: 30px 0;
            h3 {
                font-size: 22px;
            }
            p {
                font-size: 16px;
            }
        }
    }
</style>