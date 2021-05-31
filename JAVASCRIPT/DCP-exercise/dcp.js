const counters = document.querySelectorAll('.counter');
const speed = 2000;

counters.forEach(counter => {
    const updateCount = () => {
        const target = counter.getAttribute('data-target');
        
        console.log(target);
    }
    updateCount();
});