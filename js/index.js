const html = document.documentElement;

window.addEventListener('scroll', () => {
    
    const scrollTop = html.scrollTop;
    const maxScroll = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScroll;
    
})