// --- SCRIPT UNTUK TOMBOL CTA (ORDER NOW) DI index.html ---
const allCtaButtons = document.querySelectorAll('.cta-button');

allCtaButtons.forEach(function(button) {
    // Kita hanya tambahkan event listener jika tombol itu BUKAN tombol di modal
    if (button.id !== 'modalOrderButton') {
        button.addEventListener('click', function(event) {
            if (this.getAttribute('href') === '#menu') {
                event.preventDefault(); 
                alert('Thank you for ordering!');
            }
        });
    }
});


// --- SCRIPT UNTUK MODAL DETAIL MENU DI menu.html ---

// Cek dulu apakah kita ada di halaman menu.html
// Ini agar script tidak error saat di index.html
if (document.getElementById('menuModal')) {

    // Dapatkan elemen modal
    const menuModal = document.getElementById('menuModal');
    const closeButton = document.querySelector('.close-button');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    const modalOrderButton = document.getElementById('modalOrderButton');

    // Dapatkan semua item menu
    const menuItems = document.querySelectorAll('.grid-menu-item');

    // Tambahkan event listener ke setiap item menu
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Isi konten modal dengan data dari item menu yang diklik
            modalImage.src = this.querySelector('img').src;
            modalTitle.textContent = this.dataset.title;
            modalDescription.textContent = this.dataset.description;
            modalPrice.textContent = this.dataset.price;
            
            // Atur tautan tombol "Pesan Sekarang" secara dinamis
            modalOrderButton.href = this.dataset.orderLink;
            modalOrderButton.target = "_blank"; // Buka di tab baru
            
            // Tampilkan modal
            menuModal.style.display = 'flex';
        });
    });

    // Tutup modal saat tombol 'x' diklik
    closeButton.addEventListener('click', function() {
        menuModal.style.display = 'none';
    });

    // Tutup modal saat mengklik di luar area modal content
    window.addEventListener('click', function(event) {
        if (event.target == menuModal) {
            menuModal.style.display = 'none';
        }
    });
}