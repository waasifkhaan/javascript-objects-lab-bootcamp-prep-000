var recipes = new Object();
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(recipes, {[key]:[value]})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

  recipes[key]='value';
  return recipes
}
