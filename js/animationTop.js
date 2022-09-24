const animation = () => {
    window.scrollBy({
        top: -window.pageYOffset,
        left: 0,
        behavior: 'smooth'
    });
}