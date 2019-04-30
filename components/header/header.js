define([
    'text!./header.html',
    'css!./header.css'
], function (template) {
    return () => {
        Vue.component('v-header', {
            template,
            methods: {
                onGoBack(){
                    this.$router.go(-1)
                }
            },
        })
    }
});