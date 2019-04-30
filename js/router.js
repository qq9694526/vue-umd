define(["pages/developer/developer",], function (pDeveloper) {
    Vue.use(VueRouter);

    const Foo = { template: '<div>业务介绍</div>' }
    const Bar = { template: '<div>使用指南</div>' }

    const routes = [
        { path: '/', redirect: "/dev" },
        { path: '/dev', component: pDeveloper, meta:{title:"购房意向金"}},
        { path: '/foo', component: Foo, meta:{title:"业务介绍"} },
        { path: '/bar', component: Bar, meta:{title:"使用指南"} }
    ]
    return new VueRouter({
        // mode: "history",
        routes
    })
});