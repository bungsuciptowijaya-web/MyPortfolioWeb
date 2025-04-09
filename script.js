document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let wave = document.createElement('div');
    wave.className = 'wave';
    header.appendChild(wave);

    function animateWave() {
        wave.style.transform = 'translateY(0)';
        setTimeout(() => {
            wave.style.transform = 'translateY(-20px)';
        }, 1000);
    }

    setInterval(animateWave, 2000);

    // Animasi ikan berenang
    let fish = document.querySelector('.fish');

    function moveFish() {
        let screenWidth = window.innerWidth;
        let randomY = Math.random() * 50 + 20; // Random posisi vertikal

        fish.style.top = randomY + "px";
        fish.style.left = "-100px"; // Mulai dari luar layar
        fish.style.transition = "left 5s linear, top 2s ease-in-out";
        
        setTimeout(() => {
            fish.style.left = screenWidth + "px"; // Berenang ke kanan
        }, 100);
    }

    setInterval(moveFish, 6000);
});
  function toggleEvent(id) {
    // Sembunyikan semua div org-info dulu
    const allOrgInfo = document.querySelectorAll('.org-info');
    allOrgInfo.forEach(div => {
      if (div.id !== id) div.style.display = 'none';
    });

    // Toggle hanya elemen yang diklik
    const el = document.getElementById(id);
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
  }

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM sudah siap!");

    const texts = [
        "Database administrator enthusiast",
        "Administrative staff enthusiast",
       "Data engineer enthusiast",
        "Web developer enthusiast",
        "Data analyst enthusiast",
    ]; // List teks yang akan berganti

    let textIndex = 0;
    let charIndex = 0;
    const speed = 100; // Kecepatan mengetik
    const eraseSpeed = 50; // Kecepatan menghapus
    const delayBeforeErase = 1000; // Jeda sebelum menghapus
    const typedText = document.getElementById("typed-text");
    
    if (!typedText) {
        console.error("Elemen #typed-text tidak ditemukan!");
        return;
    }

    function typeEffect() {
        if (charIndex < texts[textIndex].length) {
            typedText.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, speed);
        } else {
            setTimeout(eraseEffect, delayBeforeErase);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            typedText.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, eraseSpeed);
        } else {
            // Ganti ke teks berikutnya setelah terhapus
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeEffect, 500);
        }
    }

    typeEffect(); // Jalankan animasi pertama kali
});

const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("contact-canvas"), alpha: true });

        renderer.setSize(window.innerWidth, 500);
        document.body.appendChild(renderer.domElement);

        const light = new THREE.PointLight(0xffffff, 2);
        light.position.set(0, 0, 0);
        scene.add(light);
        scene.add(new THREE.AmbientLight(0x404040));

        const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);

        const planetsData = [
            { size: 0.5, distance: 4, speed: 0.02, color: 0xaaaaaa },
            { size: 0.8, distance: 6, speed: 0.015, color: 0xff9900 },
            { size: 1, distance: 8, speed: 0.01, color: 0x0000ff },
            { size: 0.7, distance: 10, speed: 0.008, color: 0xff0000 },
            { size: 2, distance: 14, speed: 0.005, color: 0xffaa00 },
            { size: 1.8, distance: 18, speed: 0.004, color: 0xddaa77 },
            { size: 1.5, distance: 22, speed: 0.003, color: 0x77ccff },
            { size: 1.4, distance: 26, speed: 0.002, color: 0x5555ff }
        ];

        const planets = [];
        planetsData.forEach(data => {
            const geometry = new THREE.SphereGeometry(data.size, 32, 32);
            const material = new THREE.MeshStandardMaterial({ color: data.color });

            const planet = new THREE.Mesh(geometry, material);
            planet.position.set(data.distance, 0, 0);
            scene.add(planet);
            planets.push({ mesh: planet, data, angle: Math.random() * Math.PI * 2 });
        });

        camera.position.set(0, 30, 40);
        camera.lookAt(0, 0, 0);

        function animate() {
            requestAnimationFrame(animate);
            planets.forEach(planet => {
                planet.angle += planet.data.speed;
                planet.mesh.position.x = Math.cos(planet.angle) * planet.data.distance;
                planet.mesh.position.z = Math.sin(planet.angle) * planet.data.distance;
                planet.mesh.rotation.y += 0.01;
            });
            renderer.render(scene, camera);
        }

        animate();