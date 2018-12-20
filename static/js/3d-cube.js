{
    function onFocus(evt) {
        evt.target.parentElement.classList.add('focus');
    }
    function onBlur(evt) {
        evt.target.parentElement.classList.remove('focus');
    }
    for (const face of document.querySelectorAll('a.cubeface')) {
        face.addEventListener('blur', onBlur);
        face.addEventListener('focus', onFocus);
    }
}
