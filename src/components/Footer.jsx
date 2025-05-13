export default function Footer() {
    return (
        <>
            <footer class="bg-gray-900 text-white py-12">
                <div class="container mx-auto px-6 md:px-12">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Kopi Hening</h3>
                            <p class="text-gray-400">Tempat sempurna untuk menulis, membaca, atau sekadar menenangkan pikiran.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Jam Buka</h3>
                            <p class="text-gray-400">Senin - Jumat: 08.00 - 22.00</p>
                            <p class="text-gray-400">Sabtu - Minggu: 09.00 - 23.00</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Kontak</h3>
                            <p class="text-gray-400">Email: info@kopihening.com</p>
                            <p class="text-gray-400">Telepon: +62 812 3456 7890</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold mb-4">Ikuti Kami</h3>
                            <div class="flex space-x-4">
                                <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-instagram text-xl"></i></a>
                                <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-facebook text-xl"></i></a>
                                <a href="#" class="text-gray-400 hover:text-white transition"><i class="fab fa-twitter text-xl"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-gray-800 mt-10 pt-6 text-center">
                        <p class="text-gray-400">&copy; 2025 Kopi Hening. Hak Cipta Dilindungi.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}