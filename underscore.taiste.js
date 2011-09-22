(function(_) {
    _.mixin({
        pluckNested: function(obj, key, allow_empty) {
            var keys = _.isArray(key) ? key : key.split('.');
            if(!_.isArray(obj)) { obj = [obj]; }
            var result = _.compact(_.map(obj, function(item) { 
                    var memo = item;
                    var k = [];
                    var subkey;
                    k.push.apply(k, keys);
                    while((subkey = k.shift())) {
                        if(subkey === '*') {
                            return _.pluckNested(_.values(memo), k);
                        } else if(memo[subkey]) {
                            memo = memo[subkey];
                        } else if(allow_empty) {
                            return undefined;
                        } else {
                            throw "No such key: "+subkey;
                        }
                    }

                    return !_.isEmpty(memo) ? memo : undefined;
                }));
            return result;
        },
        bipartite: function(list, criterion) {
            return _.reduce(list, 
                function(p, item) { 
                    p[ criterion(item) ? 0 : 1 ].push(item); 
                    return p;
                }, 
                [[], []]);
        }
    });
})(_);
