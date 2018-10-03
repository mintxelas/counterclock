// based on from https://github.com/wasilak/angular-raphael-gauge/blob/master/src/angular-raphael-gauge.js
// using Raphael.js (be sure to include it earlier)
(function(Raphael) {
    'use strict';

    // module definition, this has to be included in your app
    angular.module('angular-raphael-gauge', [])
    // directive definition, if you want to use itm you have to include it in controller
    .directive('raphaelGauge', function() {
        return {
          // this directive can be used as an Element or an Attribute
          restrict: 'EA',
          scope: {
            // setting config attribute to isolated scope
            // config object is 1:1 configuration C3.js object, for avaiable options see: http://c3js.org/examples.html
            config: '='
          },
          template: '<div></div>',
          replace: true,
          controller: function($scope, $element) {

            var options = {
              name: false,
              image: false,
              icon: false,
              text: false,
              textColor: '#000000',
              arcColor: '#57E0EA',
              bgArcColor: '#000',
              opacity: false,
              duration: 1600,
              easing: 'bounce', // Raphael easing effect. Don't use backIn or Elastic, they mess up animation :/
              startValue: 0, 
            };

            // merging default options with user options
            options = $.extend(options, $scope.config);
            
            // dynamic id for selectors
            $element[0].id = options.element;
              
            $('#' + options.element).html('');

            // radius is caluculated from element's width
            var radius = $('#' + options.element).width();

            // new Raphael canvas
            var paper = new Raphael(options.element, radius, radius);

            //  Make the SVG canvas fill its container - both initially and after resizing
            $('#' + options.element + ' svg').css({ height: '100%', width: '100%'});

            // setting canvas scaling on element resize
            paper.setViewBox(0, 0, radius, radius, true );
            paper.canvas.setAttribute('preserveAspectRatio', 'none');

            // custom arc attribute for easy arc drawing :)
            paper.customAttributes.arc = function (xloc, yloc, value, total, R) {
                var alpha = 360 / total * value,
                    a = (90 - alpha) * Math.PI / 180,
                    x = xloc + R * Math.cos(a),
                    y = yloc - R * Math.sin(a),
                    path;
                if (total === value) {
                    path = [
                        ["M", xloc, yloc - R],
                        ["A", R, R, 0, 1, 1, xloc - 0.01, yloc - R]
                    ];
                } else {
                    path = [
                        ["M", xloc, yloc - R],
                        ["A", R, R, 0, +(alpha > 180), 1, x, y]
                    ];
                }
                return {
                    path: path
                };
            };

            // new image - gauge's background (if it is set)
            if (options.image) {
              var image = paper.image(options.image, 0, 0, radius, radius);
            }

            // adding text in the middle (if it is set)
            if (options.text) {
              var text = paper.text(radius / 2, radius / 2, options.text)
                  .attr({
                    'font-size': radius / 16,
                    "stroke": options.textColor,
                    "fill": options.textColor
                });
            }

            var newArc = false,newArcBg = false;

            $scope.$watch('config.value', function() {

              options.value = $scope.config.value;

              if (newArc) newArc.remove();
              if (newArcBg) newArcBg.remove();

              // background arc
              newArcBg = paper.path().attr({
                  "stroke-opacity": (options.opacity) ? options.opacity : "1",
                  "stroke": options.bgArcColor,
                  "stroke-width": radius * 0.1,
                  arc: [radius / 2, radius / 2, 100, 100, radius * 0.425]
              });

              // new arc
              newArc = paper.path().attr({
                  "stroke-opacity": (options.opacity) ? options.opacity : "1",
                  "stroke": options.arcColor,
                  "stroke-width": radius * 0.15,
                  arc: [radius / 2, radius / 2, 0, 100, radius * 0.425]
              });

              // hover effect (if it is enabled in options)
              newArc.hover(
                function(event) {
                  if (options.opacity) {
                    newArc.animate({ "stroke-opacity": "1" }, 200);
                  }
                },
                function(event) {
                  if (options.opacity) {
                    newArc.animate({ "stroke-opacity": options.opacity }, 200);
                  }
                }
              );

              // rotating new arc
              newArc.rotate(0, 100 ,100).animate({
                  arc: [radius / 2, radius / 2, options.value, 100, radius * 0.425]
              }, options.duration, options.easing);

            });

          }
        };
    });
}(Raphael));