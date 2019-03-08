import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import 'slick-carousel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web';

  constructor(public router: Router) {

  }

  public ngOnInit() {

    $(document).ready(function () {
      // TODO: Burasi iletisime alinabilir mi?
      /*   let geocoder;
         let map;
         let geoMarker;
         // @ts-ignore
         const bounds = new google.maps.LatLngBounds();

         // @ts-ignore
         const styledMapType = new google.maps.StyledMapType(
           [
             {
               'elementType': 'geometry',
               'stylers': [
                 {
                   'color': '#f5f5f5'
                 }
               ]
             },
             {
               'elementType': 'labels.icon',
               'stylers': [
                 {
                   'visibility': 'off'
                 }
               ]
             },
             {
               'elementType': 'labels.text.fill',
               'stylers': [
                 {
                   'color': '#616161'
                 }
               ]
             },
             {
               'elementType': 'labels.text.stroke',
               'stylers': [
                 {
                   'color': '#f5f5f5'
                 }
               ]
             },
             {
               'featureType': 'administrative.land_parcel',
               'elementType': 'labels.text.fill',
               'stylers': [
                 {
                   'color': '#bdbdbd'
                 }
               ]
             },
             {
               'featureType': 'poi',
               'elementType': 'geometry',
               'stylers': [
                 {
                   'color': '#eeeeee'
                 }
               ]
             },
             {
               'featureType': 'poi',
               'elementType': 'labels.text.fill',
               'stylers': [
                 {
                   'color': '#757575'
                 }
               ]
             },
             {
               'featureType': 'poi.park',
               'elementType': 'geometry',
               'stylers': [
                 {
                   'color': '#e5e5e5'
                 }
               ]
             },
             {
               'featureType': 'poi.park',
               'elementType': 'labels.text.fill',
               'stylers': [
                 {
                   'color': '#9e9e9e'
                 }
               ]
             },
             {
               'featureType': 'road',
               'elementType': 'geometry',
               'stylers': [
                 {
                   'color': '#ffffff'
                 }
               ]
             },
             {
               'featureType': 'road.arterial',
               'elementType': 'labels.text.fill',
               'stylers': [
                 {
                   'color': '#757575'
                 }
               ]
             },
             {
               'featureType': 'road.highway',
               'elementType': 'geometry',
               'stylers': [
                 {
                   'color': '#dadada'
                 }
               ]
             },
             {
               'featureType': 'road.highway',
               'elementType': 'labels.text.fill',
               'stylers': [
                 {
                   'color': '#616161'
                 }
               ]
             },
             {
               'featureType': 'road.local',
               'elementType': 'labels.text.fill',
               'stylers': [
                 {
                   'color': '#9e9e9e'
                 }
               ]
             },
             {
               'featureType': 'transit.line',
               'elementType': 'geometry',
               'stylers': [
                 {
                   'color': '#e5e5e5'
                 }
               ]
             },
             {
               'featureType': 'transit.station',
               'elementType': 'geometry',
               'stylers': [
                 {
                   'color': '#eeeeee'
                 }
               ]
             },
             {
               'featureType': 'water',
               'elementType': 'geometry',
               'stylers': [
                 {
                   'color': '#c9c9c9'
                 }
               ]
             },
             {
               'featureType': 'water',
               'elementType': 'labels.text.fill',
               'stylers': [
                 {
                   'color': '#9e9e9e'
                 }
               ]
             }
           ],
           {name: 'Styled Map'});

         function initialize() {
           // @ts-ignore
           map = new google.maps.Map(
             document.getElementById('map_canvas'), {
               // @ts-ignore
               center: new google.maps.LatLng(40.992820, 29.127530),
               zoom: 13,
               disableDefaultUI: true,
               mapTypeControlOptions: {
                 mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                   'styled_map']
               }
             });
           map.mapTypes.set('styled_map', styledMapType);
           map.setMapTypeId('styled_map');

           // @ts-ignore
           geoMarker = new google.maps.Marker();
           geoMarker.setPosition(map.getCenter());
           geoMarker.setMap(map);
           const txtArray = $('#location option').each(function () {
             console.log($(this).text());
             geocodeAddress($(this).text());
           });
           $('#location').change(function () {
             const addr = ($('#location :selected').text());
             console.log(addr);

             // @ts-ignore
             const geocoder = new google.maps.Geocoder();
             geocoder.geocode({
               'address': addr
             }, function (results, status) {
               // @ts-ignore
               if (status === google.maps.GeocoderStatus.OK) {
                 if (results[0].geometry.viewport) {
                   map.fitBounds(results[0].geometry.viewport);
                 } else if (results[0].geometry.bounds) {
                   map.fitBounds(results[0].geometry.bounds);
                 } else {
                   map.setCenter(results[0].geometry.location);
                 }
               } else {
                 // @ts-ignore
                 alert('Error geocoding address: ' + address + 'status=' + status);
               }
             });
           });

         }

         // @ts-ignore
         google.maps.event.addDomListener(window, 'load', initialize);

         function geocodeAddress(address) {
           // @ts-ignore
           const geocoder = new google.maps.Geocoder();
           geocoder.geocode({
             'address': address
           }, function (results, status) {
             // @ts-ignore
             if (status === google.maps.GeocoderStatus.OK) {
               // @ts-ignore
               var iconBase = '../assets/img/';
               // @ts-ignore
               const marker = new google.maps.Marker({
                 position: results[0].geometry.location,
                 icon: iconBase + 'map-pin.svg',
                 map: map,
                 title: address
               });
               bounds.extend(results[0].geometry.location);
               map.fitBounds(bounds);
             } else {
               alert('Error geocoding address: ' + address + 'status=' + status);
             }
           });
         }*/


      $('.timeline-carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        autoplay: false,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      /*$('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        dots: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });*/

      var $st = $('.pagination');
      var $slickEl = $('.center');

      $slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $st.text(i + ' of ' + slick.slideCount);
      });

      $slickEl.slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '80px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

      /*var $el, $ps, $up, totalHeight;

      $('.item .button').click(function () {

        totalHeight = 0;

        $el = $(this);
        // @ts-ignore
        $p = $el.parent();
        // @ts-ignore
        $up = $p.parent();
        $ps = $up.find('p:not(\'.read-more\')');

        // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
        $ps.each(function () {
          totalHeight += $(this).outerHeight();
        });

        $up
          .css({
            // Set height to prevent instant jumpdown when max height is removed
            'height': $up.height(),
            'max-height': 9999
          })
          .animate({
            'height': totalHeight
          });

        // fade out read-more
        // @ts-ignore
        $p.fadeOut();

        // prevent jump-down
        return false;

      });*/

    });

  }
}


