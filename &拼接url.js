function    queryStringify (obj) {

        function toQueryPair(key,value) {

            if (!value) {

                return key;

            }

            return key + '=' + encodeURIComponent(!value ? '' : String(value));

        }

        var result = [];

        for (var key in obj) {

            key = encodeURIComponent(key);

            var values = obj[key];

            if (values && values.constructor == Array) {

                var queryValues = [];

                for (var i = 0, len = values.length; i < len; i++) {

                    queryValues.push(toQueryPair(key, values[i]));

                }

                result = result.concat(queryValues);

            } else {

                result.push(toQueryPair(key,values));

            }

        }

        return result.join('&');

    }
    queryStringify({name:'leafront',list:[1,2,3]})