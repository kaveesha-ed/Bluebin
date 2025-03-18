ScrollReveal({ 
    reset: true,
    distance:'60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.main-title, .section-title', { delay: 0, origin:'left'});
ScrollReveal().reveal('.sec-01 .image, .info', { delay: 200, origin:'bottom'});
ScrollReveal().reveal('.text-box', { delay: 300, origin:'right'});
ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 200, origin:'top'});
