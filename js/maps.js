function Map(testName){
  this.test=testName;
}

 Map.prototype.test=function(test2){
   return test2;
 };
exports.mapsModule = Map;
