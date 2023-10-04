window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    console.log(document.domain);

    const setDomain = () => {
        const domain = window.location.hostname;

        const $domainInner = document.querySelectorAll('.domain');

        $domainInner.forEach((elem) => {
            elem.innerHTML = domain;
        });
    };

    setDomain();
});