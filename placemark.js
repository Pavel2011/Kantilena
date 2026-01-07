ymaps.ready(init)
function init() {
  let myMap = new ymaps.Map('ah-map', {
    center: [55.807845, 37.813558],
    zoom: 16,
  })

  let placemark = new ymaps.Placemark(
    [55.807845, 37.813558],
    {
      // baloonContentHeader:'ООО Агрохолдинг',
      // balloonContentBody:'ООО \"Агрохолдинг\"'
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

  myMap.controls.remove('geolocationControl') // удаляем геолокацию
  myMap.controls.remove('searchControl') // удаляем поиск
  myMap.controls.remove('trafficControl') // удаляем контроль трафика
  myMap.controls.remove('typeSelector') // удаляем тип
  myMap.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
  // myMap.controls.remove('zoomControl') // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl') // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']) // отключаем скролл карты (опционально)
  myMap.geoObjects.add(placemark)
  placemark.balloon.open()
}
