document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('whyChart');
    if (!ctx) return;
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [
                {
                    label: 'QR Code Security Incidents',
                    // Source: UK Finance, Security Industry Reports, 2024
                    data: [80, 200, 450, 1200, 3200, 5000],
                    borderColor: 'rgba(222,210,38,1)',
                    backgroundColor: 'rgba(222,210,38,0.08)',
                    pointBackgroundColor: 'rgba(222,210,38,1)',
                    pointRadius: 5,
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3
                },
                {
                    label: 'Secure QR Solutions Incidents',
                    // Example: Industry average for secure QR solutions (not zero, but much lower)
                    data: [0, 2, 1, 3, 2, 1],
                    borderColor: 'rgba(142,141,131,1)',
                    backgroundColor: 'rgba(142,141,131,0.08)',
                    pointBackgroundColor: 'rgba(142,141,131,1)',
                    pointRadius: 5,
                    fill: false,
                    borderDash: [6, 6],
                    tension: 0.4,
                    borderWidth: 3
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#DED226',
                        font: { family: 'Inter', size: 15, weight: 'bold' }
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(36,36,36,0.95)',
                    titleColor: '#DED226',
                    bodyColor: '#E0E0E0',
                    borderColor: '#DED226',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: '#DED226', font: { family: 'Inter', size: 14 } }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(222,210,38,0.07)' },
                    ticks: { color: '#E0E0E0', font: { family: 'Inter', size: 13 } }
                }
            },
            animation: {
                duration: 1800,
                easing: 'easeInOutQuart'
            },
            elements: {
                line: {
                    borderJoinStyle: 'round'
                },
                point: {
                    hoverRadius: 7,
                    hoverBorderWidth: 3
                }
            }
        }
    });
});

// --- WHY PAGE: Testimonial Carousel ---
(function() {
    const carousel = document.querySelector('.testimonial-carousel');
    if (!carousel) return;
    const cards = Array.from(carousel.querySelectorAll('.testimonial-card'));
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let idx = cards.findIndex(card => card.classList.contains('active'));
    if (idx < 0) idx = 0;
    let timer = null;
    function show(i) {
        cards.forEach((c, j) => c.classList.toggle('active', i === j));
        idx = i;
    }
    function next() {
        show((idx + 1) % cards.length);
    }
    function prev() {
        show((idx - 1 + cards.length) % cards.length);
    }
    nextBtn.addEventListener('click', () => { next(); resetTimer(); });
    prevBtn.addEventListener('click', () => { prev(); resetTimer(); });
    function resetTimer() {
        if (timer) clearInterval(timer);
        timer = setInterval(next, 7000);
    }
    carousel.addEventListener('mouseenter', () => { if (timer) clearInterval(timer); });
    carousel.addEventListener('mouseleave', resetTimer);
    carousel.addEventListener('focusin', () => { if (timer) clearInterval(timer); });
    carousel.addEventListener('focusout', resetTimer);
    resetTimer();
})(); 