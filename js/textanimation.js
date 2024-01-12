    document.addEventListener("DOMContentLoaded", function() {
        var sections = document.querySelectorAll(".section");

        var options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove("active");
                }
            });
        }, options);

        sections.forEach(function(section) {
            observer.observe(section);
        });
    });
