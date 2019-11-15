import * as mutations from '../types/mutationTypes'
import * as actions from '../types/actionTypes'
import axios from 'axios';

export default {
    state: {
        logged_user: {}
    },
    mutations: {
        [ mutations.LOGGED_USER ] (state, user) {
            state.logged_user = user
        }
    },
    actions: {
        [ actions.LOGGED_USER ] (context) {
            return new Promise((resolve, reject) => {
                // users.fetch().then(response => {
                //     context.commit(mutations.LOGGED_USER, response.data)
                //     resolve(response)
                // }).catch(error => {
                //     reject(error)
                // })
                console.log("OK");
                resolve();
            })
        },
        [ actions.LOGIN ] (context, payload) {
            console.log(payload);
            // return new Promise((res, rej) => {
            //     axios.post('api/auth/login', this.form).then(res => {
            //         console.log(res);
            //         res();
            //     });
            // });
        }
    },
    getters: {
        loggedUser: state => state.logged_user
    },
}
