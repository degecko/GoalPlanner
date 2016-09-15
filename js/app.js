var app = angular.module('GoalPlanner', []);

app.controller('ListCtrl', function ($scope) {
    $scope.goals = localStorage.goals ? JSON.parse(localStorage.goals) : [];

    $scope.$watch('goals', function (goals) {
    	if (goals) {
    	    localStorage.goals = JSON.stringify(goals);
        }
    }, true);$scope.goals = localStorage.goals ? JSON.parse(localStorage.goals) : [];
});

app.directive('photoRotator', function () {
    return {
        restrict: 'E',
        template: '<div id="photo"></div><div id="photo-next"></div>',
        link: function ($scope, $elem) {
            var innerImage = $elem.find('#photo-next'),
                image = $elem.find('#photo'),
                images = [
                    'http://freetopwallpaper.com/wp-content/uploads/2013/09/free-beautiful-place-wallpaper-hd-114.jpg',
                    'http://www.publicdomainpictures.net/pictures/30000/velka/beautiful-image-of-mayon-volcano.jpg',
                    'http://www.borongaja.com/data_images/out/23/656777-beautiful-beach-sri-lanka.jpg',
                    'http://hdwallpaperbackgrounds.net/wp-content/uploads/2015/11/Beautiful-Night-City-Lights-Rooftop-Wallpaper.jpg',
                    'http://www.nicehdwallpapers.com/wp-content/uploads/2016/02/Beautiful-Starry-Night.jpg',
                    'https://www.goodfreephotos.com/albums/ireland/other-ireland/beautiful-landscape-of-anascaul-ireland.jpg',
                    'http://www.beautiful-views.net/views/leaf-glass-autumn-rain.jpg',
                    'http://lovelyhdwallpaper.com/wp-content/uploads/2016/02/Beautiful-Attractive-Red-Rose-Desktop-Wallpaper.jpg',
                    'http://www.beautiful-views.net/views/palace-garden-england-hall-waddesdon.jpg',
                    'http://animalwall.xyz/wp-content/uploads/2016/01/birds-pretty-bird-birds-wonderful-amazing-forest-animals-awesome-outstanding-spiderweb-limb-sun-rays-stunning-nice-nature-woods-animal-beautiful-moss-desktop-wallpapers.jpg',
                    'http://exploremediterranean.com/wp-content/uploads/Dubrovnik-1.jpg',
                    'http://cdn.paper4pc.com/images/beautiful-dusk-wallpaper-2.jpg',
                    'http://cdn.paper4pc.com/images/beautiful-seascape-wallpaper-1.jpg'
                ];

            function setImage(src) {
                innerImage
                    .removeClass('old')
                    .css('background-image', image.css('background-image'))
                    .addClass('old');
                image.css('background-image', 'url(' + src + ')');

                setTimeout(setRandomImage, 5000);
            }

            function setRandomImage() {
                var src = images[Math.floor(Math.random() * images.length)];
                var image = new Image();

                image.src = src;
                image.onload = function () { setImage(src) };
            }

            setRandomImage();
        }
    };
});