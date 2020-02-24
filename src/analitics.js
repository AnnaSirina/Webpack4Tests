function createAnalitics() {
    let counter = 0;
    let isDestroyd;
    const listener = () => counter++;

    document.addEventListener('click', listener)
    return {
        destroy() {
            document.removeEventListener('click', listener)
            isDestroyd = true;
        },
        getClicks() {
            if (isDestroyd) {
                return 'analitics is destroyd';
            }
            return counter
        }
    }
}

window.analitics = createAnalitics()