function resultController($scope, $http) {

  $scope.results = [];
  var page = 'http://en.wikipedia.org/?curid=';
  $("#searchwiki").click(function() {
    var searchentry = $scope.searchText;
    if (searchentry !== 'undefined') {
      $scope.results.length = 0;
      searchentry = searchentry.replace(/\s+/g, "%");

      console.log(searchentry);

      var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + searchentry + "&callback=JSON_CALLBACK";
      $http.jsonp(url).success(function(response) {
        var results = response.query.pages;
        angular.forEach(results, function(v, k) {
            $scope.results.push({
                title: v.title,
                body: v.extract,
                page: page + v.pageid
              }) //end push to results
          }) //end for each
      }); //end http call
    }

  }); //end searchwiki pressed

}
