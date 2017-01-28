'use strict';

/**
 * @ngdoc service
 * @name padFinderApp.main
 * @description
 * # main
 * Factory in the padFinderApp.
 */
angular.module('padFinderApp', [])
.factory('neighborhood', ['$resource', 'x2js' function ($resource, x2js) {
    // Service logic
    // ...


    // Public API here
    return $resource('http://www.zillow.com/webservice/GetRegionChildren.htm?q=city=&zws-id=X1-ZWz19h9aqz93ij_7oq0o&state=wa&city=seattle&childtype=neighborhood' , {}, {
        query: {
         method:'GET',
         params:{
           city: 'Seattle,us',
           bogus: null
         },
         isArray:true,
         transformResponse:function(data) {
        // convert the data to JSON and provide
        // it to the success function below
          var x2js = new X2JS();
          var json = x2js.xml_str2json( data );
          return json;
          } 
         }  
      });
  }]);

