(function(_) {
    _.mixin({
        pluckNested: function(obj, key, allow_empty) {
            var keys = _.isArray(key) ? key : key.split('.');
            if(!_.isArray(obj)) { obj = [obj]; }
            return _.compact(_.map(obj, function(item) { 
                    var memo = item;
                    var k = [];
                    var key;
                    k.push.apply(k, keys);
                    while((key = k.shift())) {
                        if(key === '*') {
                            memo = _.pluckNested(_.values(memo), k);
                        } else if(memo[key]) {
                            memo = memo[key];
                        } else if(allow_empty) {
                            return memo; 
                        } else {
                            throw "No such key: "+key;
                        }
                    }
                    return memo;
                }));
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
