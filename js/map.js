ymaps.ready(init);
var myMap, myPlacemark, myPlacemark2;
function init() {
	myMap = new ymaps.Map('map', {
		center: [61.799, 34.35],
		zoom: 13,
		controls: [],
	});

	var myPlacemark = new ymaps.GeoObject({
		geometry: { type: 'Point', coordinates: [61.78989282985466, 34.37863160089869] },
		properties: {
			iconContent: 'Художественная студия Ирины Теремовской (на Куйбышева)',
			hintContent: 'ул. Куйбышева 10, 5 подъезд (домофон 1), г. Петрозаводск, республика Карелия',
		},
	}, { preset: 'islands#blueStretchyIcon' });

	var myPlacemark2 = new ymaps.GeoObject({
		geometry: { type: 'Point', coordinates: [61.765526, 34.315428] },
		properties: {
			iconContent: 'Художественная студия Ирины Теремовской (на Лососинском ш.)',
			hintContent: 'Лососинское шоссе 26 (ТЦ Столица), 2 этаж, пом. 23 (вход со стороны Березовой аллеи),' +
			' г. Петрозаводск, республика Карелия',
		},
	}, { preset: 'islands#blueStretchyIcon' });
	
	myMap.geoObjects.add(myPlacemark);
	myMap.geoObjects.add(myPlacemark2);
	myMap.controls.add('zoomControl', { size: 'small', position: { top: 860, left: 10 }	});
	myMap.controls.add('geolocationControl', { position: { top: 820, left: 10 } });
	myMap.controls.add('routeEditor', {	position: { top: 934, left: 10 } });
	myMap.behaviors.disable('scrollZoom');
}