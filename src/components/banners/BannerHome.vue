<template>
    <div class="banner-home d-flex align-items-center" :style="{ backgroundImage: 'url(' + require('@/assets/images/code2.png') + ')' }">
        <div class="container">
            <div>
                <div class="bor-top"></div>
                <div class="box-banner d-flex align-items-center justify-content-between">
                    <img src="@/assets/images/code.png" alt="code">
                    <h2>
                      <vue-typer
                        :text='["front-end", "back-end"]'
                        :repeat='Infinity'
                        :shuffle='false'
                        initial-action='typing'
                        :pre-type-delay='70'
                        :type-delay='70'
                        :pre-erase-delay='3000'
                        :erase-delay='250'
                        erase-style='clear'
                        :erase-on-complete='false'
                        caret-animation='blink'
                      ></vue-typer>
                    </h2>
                </div>
                <div class="bor-bottom"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BannerHome'
}
</script>
<style lang="scss">
  .banner-home {
    width: 100%;
    min-height: 560px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: -2;
    margin-top: -60px;
    padding-top: 60px;
    margin-bottom: 40px;
    &::before {
      content: '';
      position: absolute;
      background: rgba(20, 22, 38, 0.8);
      background: linear-gradient(90deg, rgb(20, 22, 38) 0%, rgba(20, 22, 38, 0.5) 100%);
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    &::after {
      content: '';
      width: 60%;
      height: 40px;
      background: #822323;
      position: absolute;
      right: 0;
      bottom: -40px;
    }
    img {
      width: 100%;
      max-width: 250px;
    }
    h2 {
      color: #cecece;
      font-size: 80px;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 2px;
      span {
        color: inherit !important;
        &.caret {
          background-color: #cecece;
          width: 5px;
        }
      }
    }
    .bor-top,
    .bor-bottom {
      width: calc(100% - 250px);
      margin: 0 auto;
      height: 12px;
      background: #822323;
      position: relative;
      &::before,
      &::after {
        content: '';
        width: 12px;
        height: 60px;
        background: #822323;
        position: absolute;
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }
    .bor-top {
      margin-bottom: 60px;
      &::before,
      &::after {
        top: 12px;
      }
    }
    .bor-bottom {
      margin-top: 60px;
      &::before,
      &::after {
        bottom: 12px;
      }
    }
  }
  /* responsive */
  @media only screen and (max-width: 991px) {
    .banner-home {
      min-height: 460px;
      img {
        max-width: 170px;
      }
      h2 {
        font-size: 45px;
      }
      .bor-top,
      .bor-bottom {
        height: 8px;
        width: calc(100% - 200px);
        &::before,
        &::after {
          content: '';
          width: 8px;
          height: 54px;
        }
      }
      .bor-top {
        margin-bottom: 54px;
        &::before,
        &::after {
          top: 8px;
        }
      }
      .bor-bottom {
        margin-top: 54px;
        &::before,
        &::after {
          bottom: 8px;
        }
      }
    }
    
  }
  @media only screen and (max-width: 767px) {
    .banner-home {
      min-height: 360px;
      img {
        max-width: 120px;
      }
      h2 {
        font-size: 45px;
      }
      .bor-top,
      .bor-bottom {
        width: calc(100% - 100px);
      }
    }
  }
  @media only screen and (max-width: 575px) {
    .banner-home {
      min-height: 320px;
      margin-bottom: 20px;
      &::after {
        height: 20px;
        bottom: -20px;
      }
      .box-banner {
        flex-direction: column;
      }
      img {
        max-width: 80px;
      }
      h2 {
        font-size: 30px;
      }
      .bor-top,
      .bor-bottom {
        height: 5px;
        width: 100%;
        &::before,
        &::after {
          content: '';
          width: 5px;
          height: 35px;
        }
      }
      .bor-top {
        margin-bottom: 35px;
        &::before,
        &::after {
          top: 5px;
        }
      }
      .bor-bottom {
        margin-top: 35px;
        &::before,
        &::after {
          bottom: 5px;
        }
      }
    }
  }
</style>