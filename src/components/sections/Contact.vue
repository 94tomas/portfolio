<template>
    <div id="contact" class="sec-contact" :style="{ backgroundImage: 'url(' + require('@/assets/images/background_custom.png') + ')' }">
        <b-container>
            <h3 class="text-center">Contacto</h3>
            <b-row align-v="center">
                <b-col md="6">

                    <div class="datas-contact">
                        <h4 class="main-title">Datos de Contacto</h4>
                        <p>No dude en buscar soluciones a sus ideas de pryectos, contactate conmigo y te respondere lo mas antes posible.</p>
                        <ul class="list-icon">
                            <li>
                                <b-icon icon="phone"></b-icon>
                                Celular:<br>
                                <a href="tel:+59161920576">+591 61920576</a>
                            </li>
                            <li>
                                <b-icon icon="envelope"></b-icon>
                                Email:<br>
                                <a href="mailto:nos18de@gmail.com">nos18de@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </b-col>
                <b-col md="6">
                    <!-- @submit="onSubmit" -->
                    <b-form @submit.prevent="sendEmail" @reset="onReset" v-if="show" class="c-form">
                        <b-form-group label-for="name">
                            <b-form-input
                            id="user_name"
                            name="user_name"
                            v-model="form.name"
                            required
                            placeholder="Nombre *"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group label-for="email">
                            <b-form-input
                            id="user_email"
                            name="user_email"
                            v-model="form.email"
                            type="email"
                            required
                            placeholder="Email *"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group label-for="affair">
                            <b-form-input
                            id="affair"
                            name="affair"
                            v-model="form.affair"
                            required
                            placeholder="Asunto *"
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group label-for="message">
                            <b-form-textarea
                            id="message"
                            name="message"
                            v-model="form.msg"
                            placeholder="Mensaje... *"
                            rows="3"
                            max-rows="6"
                            ></b-form-textarea>
                        </b-form-group>

                        <b-button type="submit" variant="primary">Enviar mensaje</b-button>
                        <b-button type="reset" variant="secundary">Reestablecer datos</b-button>
                    </b-form>
                    <!-- <b-card class="mt-3" header="Form Data Result">
                        <pre class="m-0">{{ form }}</pre>
                    </b-card> -->
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import emailjs from 'emailjs-com';
// let emailjs = require("emailjs-com");

export default {
    name: 'Contact',
    data() {
        return {
            form: {
                name: '',
                email: '',
                affair: '',
                msg: ''
            },
            show: true
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.name = ''
            this.form.email = ''
            this.form.affair = ''
            this.form.msg = ''
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        sendEmail (e) {
            emailjs.sendForm('service_gmail', 'template_TAO5f4QE', e.target, 'user_iW54EEB0C2K2tXK9iXh3o')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
                // Reset our form values
                this.form.name = ''
                this.form.email = ''
                this.form.affair = ''
                this.form.msg = ''
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
                this.$notify({
                    group: 'contact',
                    type: 'success',
                    title: 'ENVIADO!',
                    text: 'Mensaje enviado con éxito',
                });
                e.preventDefault();
                
            }, (error) => {
                console.log('FAILED...', error);
                this.$notify({
                    group: 'contact',
                    type: 'error',
                    title: 'ERROR',
                    text: 'Error al enviar el mensaje',
                });
            });
        }
    }
}
</script>
<style lang="scss">
    .sec-contact {
        padding: 40px 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        color: #CECECE;
        h3 {
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: bold;
            font-size: 35px;
            margin-bottom: 30px;
        }
        p {
            letter-spacing: 1.5px;
        }
    }
    .c-form {
        .form-control {
            background: transparent;
            border-radius: 0;
            color: #CECECE;
            border: 1px solid #CECECE;
            letter-spacing: 1.5px;
            transition: all .2s ease-out;
            &:focus {
                outline: 0;
                border-color: #822323;
                box-shadow: 0 0 8px 0px #822323;
                border-radius: 5px;
            }
        }
    }
    .list-icon {
        list-style-type: none;
        padding-left: 0;
        margin-bottom: 0;
        li {
            position: relative;
            padding-left: 30px;
            letter-spacing: 1.5px;
            margin-bottom: 15px;
            svg {
                font-size: 25px;
                position: absolute;
                left: 0;
                top: 0;
                color: #812323;
            }
            a {
                color: #7984de;
                font-family: "Bubblegum Sans", cursive;
            }
        }
    }
    @media only screen and (max-width: 575px) {
        .sec-contact {
            h3 {
                font-size: 22px;
            }
            h4 {
                font-size: 18px;
            }
            p {
                font-size: 14px;
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