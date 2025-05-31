ymaps.ready(init);
var myMap, myPlacemark, myPlacemark2;
function init() {
	myMap = new ymaps.Map('map', {
		center: [61.799, 34.35],
		zoom: 13,
		controls: [],
	});

	myPlacemark = new ymaps.GeoObject({
		geometry: { type: 'Point', coordinates: [61.78989282985466, 34.37863160089869] },
		properties: {
			iconContent: 'Художественная студия Ирины Теремовской (Куйбышева)',
			hintContent: 'ул. Куйбышева 10, 5 подъезд (домофон 1), г. Петрозаводск, республика Карелия',
		},
	}, { preset: 'islands#blueStretchyIcon' });

	myPlacemark2 = new ymaps.GeoObject({
		geometry: { type: 'Point', coordinates: [61.768156, 34.308637] },
		properties: {
			iconContent: 'Художественная студия Ирины Теремовской (Древлянка)',
			hintContent: 'улица Древлянка, 18А, 2 этаж' +
			' г. Петрозаводск, республика Карелия',
		},
	}, { preset: 'islands#blueStretchyIcon' });
	
	myMap.geoObjects.add(myPlacemark);
	myMap.geoObjects.add(myPlacemark2);
	myMap.controls.add('geolocationControl', { position: { bottom: 294, left: 10 } });
	myMap.controls.add('zoomControl', { size: 'small', position: { bottom: 220, left: 10 }	});
	myMap.controls.add('routeEditor', {	position: { bottom: 180, left: 10 } });
	myMap.behaviors.disable('scrollZoom');
}