<template>
    <form id="app" @submit="checkForm" action="/api/auth/login" method="post">
        <p v-if="errors.length">
            <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>

        <p>
            <label for="email">Email</label>
            <input
                id="email"
                v-model="form.email"
                type="email"
                name="email"
            >
        </p>

        <p>
            <label for="password">Password</label>
            <input
                id="password"
                v-model="form.password"
                type="password"
                name="password"
            >
        </p>

        <p>
            <input
                type="submit"
                value="Enviar"
            >
        </p>
    </form>
</template>

<script>
    import axios from 'axios';
    // import actions from '../store/types/actionTypes';

    export default {
      data(){
        return {
            form: {
              email: '',
              password: '',
            },
            errors: [],
        }
      },

      methods: {
        checkForm(e){
          e.preventDefault();

          if (this.form.email !== '' && this.form.password !== '') {
            axios.post('login', this.form).then(res => {
              console.log(res);
            });
            // this.$store.dispatch(actions.LOGIN, this.form);
          } else {
              this.errors = [];

              if (this.form.email === '') {
                this.errors.push('Email required');
              }
              if (this.form.password === '') {
                this.errors.push('Password required');
              }
          }
        }
      }
    }
</script>
