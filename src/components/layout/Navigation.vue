<template>
    <div class="c-nav">
        <b-navbar toggleable="lg" type="dark" class="p-0">
            <b-container>
                <b-navbar-brand href="#" class="p-0">&nbsp;</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="javascript:;" v-scroll-to="'#about'">sobre mi</b-nav-item>

                        <b-nav-item href="javascript:;" v-scroll-to="'#portfolio'">portafolio</b-nav-item>

                        <b-nav-item href="javascript:;" v-scroll-to="'#contact'">contacto</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: 'Navigation'
}
</script>
<style lang="scss">
    .c-nav {
        padding: 15px 0;
        .navbar-dark .navbar-nav .nav-link {
            font-size: 20px;
            color: #cecece;
            position: relative;
            letter-spacing: 1.5px;
            padding: 0 15px;
            &::after {
                content: "";
                height: 2px;
                width: 0;
                background: #cecece;
                position: absolute;
                left: auto;
                right: 15px;
                bottom: 0;
                -webkit-transition: all .25s ease-out;
                transition: all .25s ease-out;
            }
            &:hover::after {
                width: calc(100% - 30px);
                left: 15px;
            }
        }
    }
    /* responsive */
    @media only screen and (max-width: 991px) {
        .c-nav {
            padding: 10px 0;
            .navbar-toggler {
                z-index: 999;
            }
            .collapse {
                    // display: inline-block !important;
                    position: fixed;
                    top: 0;
                    right: -300px;
                    background: #822323;
                    background: rgba(62, 18, 18, 0.9);
                    width: 100%;
                    max-width: 300px;
                    padding: 80px 15px 15px 15px;
                    min-height: 100vh;
                    transition: all .5s;
                    z-index: 99;
                &.show {
                    right: 0px;
                }
            }
        }
    }
</style>