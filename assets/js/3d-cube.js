(function() {
    function onFocus(evt) {
        evt.target.parentElement.classList.add('focus');
    }
    function onBlur(evt) {
        evt.target.parentElement.classList.remove('focus');
    }
    document.querySelectorAll('a.cubeface').forEach(function(face) {
        face.addEventListener('blur', onBlur);
        face.addEventListener('focus', onFocus);
    });
})();
