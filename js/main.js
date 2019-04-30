

require(['router',"components/header/header"], function (router,regHeader) {
    regHeader()
    new Vue({
        router
    }).$mount('#app')
});