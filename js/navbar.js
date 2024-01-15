    var myFullpage = new fullpage('#fullpage', {
        anchors: ['1', '2', '3', '4', '5', '6'],
        controlArrows: false,
        navigation: true,
        slidesNavigation: true,
        afterLoad: function(origin, destination, direction){
                var activeSection = destination.item;

        // Remove previous section's styles
        document.getElementById('navbar').classList.remove('dark');

// Add styles for the current section
if (activeSection.id === 'section1' || activeSection.id === 'footer') {
    document.getElementById('navbar').classList.add('dark');
}
}
    });
