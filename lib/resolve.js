define(["require"], function(require) {

    var resolve = function(dependency){

        return function(){
            if(!(dependency instanceof Array)){
                dependency = [dependency];
            }
            var deferred = Promise.defer();
            require(dependency,function(res){
                deferred.resolve(res);
            });

            return deferred.promise;
        }
    };

    return resolve;

});