// =============MAP-2====at Main Page ....start========
ymaps.ready(init)
function init() {
  let myMap2 = new ymaps.Map('ah-map2', {
    center: [55.807845, 37.813558],
    zoom: 16,
  })

  let placemark = new ymaps.Placemark(
    [55.807845, 37.813558],
    {
      balloonContent: `
  <div class='balloon'>
  <div class='ball-name'>Вокально-хоровая студия «Кантилена»</div>
  <div class='ball-phone'>Телефон\:, 
         </div>
  <div class='ball-phone'>Телефон\:</div>
  <div class='ball-address'>Адрес\:Москва, 13-я Парковая улица, 38к3</div>
  </div>
  `,
    },
    {
      iconLayout: 'default#image',
      // iconImageHref:'',
      iconImageSize: [40, 30],
      iconImageOffset: [-10, 0],
    }
  )

  myMap2.controls.remove('geolocationControl') // удаляем геолокацию
  myMap2.controls.remove('searchControl') // удаляем поиск
  myMap2.controls.remove('trafficControl') // удаляем контроль трафика
  myMap2.controls.remove('typeSelector') // удаляем тип
  myMap2.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
  // myMap.controls.remove('zoomControl') // удаляем контрол зуммирования
  myMap2.controls.remove('rulerControl') // удаляем контрол правил
  myMap2.behaviors.disable(['scrollZoom']) // отключаем скролл карты (опционально)
  myMap2.geoObjects.add(placemark)
  placemark.balloon.open()
}
