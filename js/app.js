$(function() {

    document.addEventListener('init', function(event) {
        var page = event.target;

        console.log(page.id);
        if (page.id === 'Home') {
            $('#back').hide();
            page.querySelector('#ironman').onclick = function() {
                document.querySelector('#myNavigator').pushPage('views/detail.html');

            };
            page.querySelector('#spiderman').onclick = function() {
                document.querySelector('#myNavigator').pushPage('views/detail2.html');
            };
            page.querySelector('#frozen').onclick = function() {
                document.querySelector('#myNavigator').pushPage('views/detail3.html');
            };
        } else if (page.id === 'ironman' || page.id === 'spiderman' || page.id === 'frozen') {
            $('#back').show();
            document.querySelector('ons-back-button').onclick = function(event) {
                document.querySelector('#myNavigator').popPage();
            };

        }



    });
})