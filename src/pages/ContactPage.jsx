import { CreateElement, CreateLink, CreateQuestions } from "../components/CreateElements";

export default function ContactPage() {
    return (
        <>
            <CreateElement 
                title={"Hubungi Kami"}
                descriptions={"Apakah Anda memiliki pertanyaan, ingin membuat reservasi, atau mengadakan acara khusus? Jangan ragu untuk menghubungi kami, dan kami akan segera merespons Anda."}
            />
            <section class="py-20 bg-white">
                <div class="container mx-auto px-6 md:px-12">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div class="lg:col-span-1">
                            <div class="bg-white rounded-lg shadow-md p-8 h-full">
                                <h3 class="text-2xl font-medium mb-8 font-lora">Informasi Kontak</h3>

                                <div class="space-y-8">
                                    <div class="flex items-start">
                                        <div class="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <i class="fas fa-map-marker-alt text-white text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 class="text-lg font-medium mb-2">Alamat</h4>
                                            <p class="text-gray-600">Jalan Raya Kopi Hening No. 42, Kawasan Rindang Jaya, Jakarta Selatan, Indonesia 12345</p>
                                        </div>
                                    </div>

                                    <div class="flex items-start">
                                        <div class="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <i class="fas fa-phone-alt text-white text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 class="text-lg font-medium mb-2">Telepon</h4>
                                            <p class="text-gray-600">+62 812 3456 7890</p>
                                        </div>
                                    </div>

                                    <div class="flex items-start">
                                        <div class="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <i class="fas fa-envelope text-white text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 class="text-lg font-medium mb-2">Email</h4>
                                            <p class="text-gray-600">info@kopihening.com</p>
                                        </div>
                                    </div>

                                    <div class="flex items-start">
                                        <div class="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                            <i class="fas fa-clock text-white text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 class="text-lg font-medium mb-2">Jam Operasional</h4>
                                            <p class="text-gray-600">Senin - Jumat: 08.00 - 22.00</p>
                                            <p class="text-gray-600">Sabtu - Minggu: 09.00 - 23.00</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-10">
                                    <h4 class="text-lg font-medium mb-4">Ikuti Kami</h4>
                                    <div class="flex space-x-4">
                                        <CreateLink 
                                            link={"#"}
                                            logo={"fab fa-instagram"}
                                        />
                                        <CreateLink 
                                            link={"#"}
                                            logo={"fab fa-facebook-f"}
                                        />
                                        <CreateLink 
                                            link={"#"}
                                            logo={"fab fa-twitter"}
                                        />
                                        <CreateLink 
                                            link={"#"}
                                            logo={"fab fa-tiktok"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-2">
                            <div class="bg-white rounded-lg shadow-md p-8">
                                <h3 class="text-2xl font-medium mb-8 font-lora">Kirim Pesan</h3>

                                <form 
                                    action="https://formspree.io/f/xzzrkpvy" 
                                    method="POST" 
                                    class="space-y-6"
                                >
                                    <input type="hidden" name="_subject" value="Pesan dari website kopi hening" />
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label for="name" class="block text-gray-700 mb-2">Nama Lengkap</label>
                                            <input type="text" id="name" name="name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800" placeholder="Nama Anda" required />
                                        </div>
                                        <div>
                                            <label for="email" class="block text-gray-700 mb-2">Email</label>
                                            <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800" placeholder="email@anda.com" required />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="phone" class="block text-gray-700 mb-2">Nomor Telepon</label>
                                        <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800" placeholder="+62 8xx xxxx xxxx" />
                                    </div>

                                    <div>
                                        <label for="subject" class="block text-gray-700 mb-2">Subjek</label>
                                        <select id="subject" name="subject" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800">
                                            <option value="" disabled selected>Pilih Subjek</option>
                                            <option value="reservasi">Reservasi</option>
                                            <option value="acara">Mengadakan Acara</option>
                                            <option value="kerjasama">Kerjasama</option>
                                            <option value="info">Informasi Umum</option>
                                            <option value="lainnya">Lainnya</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="message" class="block text-gray-700 mb-2">Pesan</label>
                                        <textarea id="message" name="message" rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-800" placeholder="Tulis pesan Anda di sini..." required></textarea>
                                    </div>

                                    <div class="flex items-start">
                                        <input type="checkbox" id="privacy" name="privacy" class="mt-1 mr-2" required />
                                            <label for="privacy" class="text-gray-600 text-sm">Saya setuju bahwa data saya akan disimpan dan diproses sesuai dengan <a href="#" class="text-amber-800 hover:underline">kebijakan privasi</a>.</label>
                                    </div>

                                    <div>
                                        <button type="submit" class="w-full md:w-auto bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-700 transition focus:outline-none">
                                            Kirim Pesan
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="mt-20">
                        <h3 class="text-2xl font-medium mb-10 text-center font-lora">Pertanyaan yang Sering Diajukan</h3>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <CreateQuestions 
                                title={"Apakah Kopi Hening menerima reservasi?"} 
                                text={"Ya, kami menerima reservasi, terutama untuk grup dengan 4 orang atau lebih. Silakan hubungi kami melalui telepon atau email minimal 24 jam sebelumnya."}  
                            />
                            <CreateQuestions 
                                title={"Apakah tersedia WiFi gratis?"} 
                                text={"Ya, kami menyediakan WiFi gratis untuk para pengunjung. Namun, kami mendorong pengunjung untuk menikmati momen ketenangan dan membatasi penggunaan gadget."}  
                            />
                            <CreateQuestions 
                                title={"Bisakah saya mengadakan acara privat di Kopi Hening?"} 
                                text={"Tentu! Kami memiliki ruang khusus yang dapat disewa untuk acara privat seperti workshop, gathering, atau ulang tahun. Silakan hubungi kami untuk informasi lebih lanjut."}  
                            />
                            <CreateQuestions 
                                title={"Apakah ada menu untuk kebutuhan diet khusus?"} 
                                text={"Ya, kami menyediakan opsi vegetarian, vegan, gluten-free, dan bebas laktosa. Harap beri tahu staf kami tentang kebutuhan diet khusus Anda."}  
                            />
                        </div>
                    </div>

                    <div class="mt-20 bg-amber-800 text-white rounded-lg shadow-md p-8 lg:p-12">
                        <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                            <div class="lg:col-span-3">
                                <h3 class="text-2xl font-medium mb-4 font-lora">Berlangganan Newsletter</h3>
                                <p class="text-gray-100">Dapatkan informasi terbaru tentang menu baru, acara spesial, dan promosi eksklusif langsung ke email Anda.</p>
                            </div>
                            <div class="lg:col-span-2">
                                <form 
                                    action="https://formspree.io/f/xgvkpwzb"
                                    method="POST"
                                    class="flex flex-col sm:flex-row"
                                >
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Email Anda" 
                                        required
                                        class="flex-grow px-4 py-3 rounded-l-lg sm:rounded-r-none focus:outline-none text-gray-900" 
                                    />
                                        <button type="submit" class="bg-gray-900 text-white px-6 py-3 rounded-r-lg sm:rounded-l-none mt-2 sm:mt-0 hover:bg-gray-800 transition">Berlangganan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}