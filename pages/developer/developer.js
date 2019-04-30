define(['text!./developer.html'], function(template) {
    return {
        data(){
            return {
                list:["开发商1","开发商2","开发商3","开发商4"]
            }
        },
        template
    }
});