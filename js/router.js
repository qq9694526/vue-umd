define(["pages/developer/developer",], function (pDeveloper) {
    Vue.use(VueRouter);

    const pFoo = { template: '<div>业务介绍</div>' }
    const pBar = { template: '<div>使用指南</div>' }

    const routes = [
        { path: '/', redirect: "/developer" },
        { path: '/developer', component: pDeveloper, meta: { title: "购房意向金" } },
        { path: '/foo', component: pFoo, meta: { title: "业务介绍" } },
        { path: '/bar', component: pBar, meta: { title: "使用指南" } }
    ]
    return new VueRouter({
        routes
    })
});