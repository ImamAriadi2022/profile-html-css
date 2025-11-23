// Menunggu hingga DOM sepenuhnya dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Efek fade-in saat halaman dimuat
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 100);

    // Fungsi untuk tombol "Hubungi Saya"
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            alert('Halo! Terima kasih telah mengunjungi profil Kelompok 6. Anda dapat menghubungi kami melalui ketua kelompok Yosinta Ariyani di email: kelompok6.pti@example.com');
        });
    }

    // Fungsi untuk tombol "Baca artikel lengkap di blog"
    const readFullBtn = document.getElementById('readFullBtn');
    if (readFullBtn) {
        readFullBtn.addEventListener('click', function() {
            window.open('https://mahasiswiptipunyahobiunik.blogspot.com/2025/11/1-yosinta-ariyani-cewek-capricorn.html', '_blank');
        });
    }

    // Efek hover pada kartu blog
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Efek hover pada interest items
    const interestItems = document.querySelectorAll('.interests-list li');
    interestItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#3498db';
            this.style.color = 'white';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#ecf0f1';
            this.style.color = '#2c3e50';
        });
    });

    // Smooth scrolling untuk navigasi
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animasi fade-in untuk elemen saat scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observasi elemen-elemen yang akan dianimasi
    const animatedElements = document.querySelectorAll('.blog-card, .interests-list li, .profile-card, .blog-cta, .member-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Menambahkan efek ripple pada tombol
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    // Menerapkan efek ripple pada semua tombol
    const buttons = document.querySelectorAll('button, .read-btn, .back-btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // CSS untuk efek ripple
    const rippleCSS = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 600ms linear;
            background-color: rgba(255, 255, 255, 0.6);
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        button, .read-btn, .back-btn {
            position: relative;
            overflow: hidden;
        }
    `;

    // Menambahkan CSS ripple ke head
    const style = document.createElement('style');
    style.textContent = rippleCSS;
    document.head.appendChild(style);

    console.log('Website berhasil dimuat! Semua fitur JavaScript aktif.');
});