ymaps.ready(init);
function init(){
	var myMap = new ymaps.Map("map", {
		center:[61.79439282984466,34.36863160089869],
		zoom:17
	});
	var myPlacemark = new ymaps.GeoObject({
		geometry:{
			type:"Point",
			coordinates:[61.79439282984466,34.36863160089869]},
			properties:{hintContent:'Тэйко'}
		},{
			preset:'islands#oliveVegetationIcon'});
	myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom')
}