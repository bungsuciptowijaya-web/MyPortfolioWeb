document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM sudah siap!");

  // Typing effect (kalau kamu masih pakai elemen dengan id="typed-text")
  const typedText = document.getElementById("typed-text");
  if (typedText) {
    const texts = [
      "Database administrator enthusiast",
      "Administrative staff enthusiast",
      "Data engineer enthusiast",
      "Web developer enthusiast",
      "Data analyst enthusiast"
    ];
    let textIndex = 0, charIndex = 0;
    const speed = 100, eraseSpeed = 50, delayBeforeErase = 1000;

    function typeEffect() {
      if (charIndex < texts[textIndex].length) {
        typedText.textContent += texts[textIndex].charAt(charIndex++);
        setTimeout(typeEffect, speed);
      } else {
        setTimeout(eraseEffect, delayBeforeErase);
      }
    }

    function eraseEffect() {
      if (charIndex > 0) {
        typedText.textContent = texts[textIndex].substring(0, --charIndex);
        setTimeout(eraseEffect, eraseSpeed);
      } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeEffect, 500);
      }
    }

    typeEffect();
  }
});

// Toggle div organisasi (untuk bagian seperti pengalaman organisasi)
function toggleEvent(id) {
  const allOrgInfo = document.querySelectorAll('.org-info');
  allOrgInfo.forEach(div => {
    if (div.id !== id) div.style.display = 'none';
  });

  const el = document.getElementById(id);
  if (el) el.style.display = el.style.display === 'block' ? 'none' : 'block';
}
s
