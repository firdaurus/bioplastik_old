import React from 'react'

import polytrichum from '../assets/polytrichum.jpg'
import rhodobryum from '../assets/rhodobryum.jpg'
import fissidens from '../assets/fissidens.jpg'
import siklusHidupPolytrichum from '../assets/materi/siklusHidupPolytrichum.png'
import siklusHidupRhodobryum from '../assets/materi/siklusHidupRhodobryum.png'
import siklusHidupFissidens from '../assets/materi/siklusHidupFissidens.jpg'


/* 
<i>amino acids</i>
<i>Asian Journal of Biodiversity.</i>
<i>Botani Tumbuhan Rendah.</i>
<i>Buku Deskripsi dan Kunci Determinasi Bryophyta.</i>
<i>cardiovascular</i>
<i>Collections of <i>Fissidens</i> (Fissidentaceae, Bryopsida)</i>
<i>dioecious</i>
<i>Fissidens</i>
<i>hair cap</i>
<i>lactones</i>
<i>Mengenal Bryophyta (Lumut) Tanam Nasional Gunung Gede Pangrango Volum 1.</i>
<i>Online</i>
<i>Polytrichum</i>
<i>Polytrichum commune. J. Nat. Prod.</i>
<i>Rhodobryum</i>
<i>Rhodobryum giganteum</i>
<i>Rhodobryum roseum</i>
<i>sphagnum</i>
<i>Studia Botanica Hungarica.</i>
<i>Taksonomi Tumbuhan (Scyzophyta, Thallophyta, Bryophyta, Pteridophyta).</i>
<i>volatile oils,</i>
*/

const materi = [
    {
        genus: 'Polytrichum',
        gambar: {
            img: polytrichum,
            sumber: 'Landry, 2010',
        },
        taksonomi: {
            kingdom: 'Plantae',
            divisio: 'Bryophyta',
            classis: 'Bryopsida',
            ordo: 'Polytricales',
            familia: 'Polytrichacaceae',
            genus: 'Polytrichum',
        },
        materi: {
            morfologi: <>
                            <p><i>Polytrichum</i> sp. memiliki bentuk tubuh tegak menyerupai tanaman tingkat tinggi dengan batang keras, ditutupi daun semu pada hampir setengah batangnya. Sporogonium dari <i>Polytrichum</i> sp. berbentuk lonjong bersifat elastis membentuk koloni yang luas dan membentuk benang dengan panjang batang 1-8 cm.  Sporogonium atau kapsul yang belum matang ditutupi oleh kaliptra yang berambut berwarna kuning kecoklatan dengan tangkai kapsul yang berwarna merah. Kapsul yang sudah matang bersudut dan memiliki 4 sisi. Spora berwarna coklat dikeluarkan oleh kapsul yang sudah matang. Talus pada <i>Polytrichum</i> sp. berbentuk seperti jarum dan berwarna hijau karena habitatnya berada di zona amphibious. <i>Polytrichum</i> sp. juga memiliki kaliptra seta yang merupakan tangkai kaliptra serta rizoid yang menyerupai seperti akar.</p>
                            <p>Menurut Fu, Peng (2009), <i>Polytrichum</i> sp. disebut juga sebagai lumut <i>hair cap</i> atau lumut rambut yang tersebar di daerah tropis. Tidak hanya itu, jenis ini umumnya juga ditemukan di daerah yang cerah dengan sedikit naungan, sehingga dapat menahan paparan sinar matahari, karena <i>Polytrichum</i> umumnya berada di tanah organik dengan kelembaban yang terus menerus, sehingga biasanya <i>Polytrichum</i> sp. banyak ditemukan di pinggir sungai, tanah liat, batuan, kayu-kayu kering, lumpur serta gundukan pasir. <i>Polytrichum</i> sp. memiliki tinggi hingga mencapai 1.400 m dpl.</p>
                            <p><i>Polytrichum</i> sp. ini dapat dimanfaatkan sebagai bahan pembuat kasur yang memiliki nilai ekonomi yang cukup tinggi sebagai tanaman hias. Tidak hanya itu, <i>Polytrichum</i> sp. juga dapat dimanfaatkan sebagai obat demam dan penyakit radang hati atau hepatitis, sebagai bahan bakar (<i>sphagnum</i>) atau atap rumah. Sedangkan manfaat bagi lingkungan adalah mampu menyobek struktur batu menjadi tanah, berperan dalam ketersediaan air dan mencegah banjir dalam ekosistem hutan. Selain itu, tumbuhan ini juga digunakan untuk menjaga tanah dari erosi dan kekeringan pada musim kemarau.</p>
                        </>,
            siklusHidup:    <>
                                <div className="flex flex-col items-center gap-2">
                                    <img src={siklusHidupPolytrichum} alt="Gambar Siklus Hidup Polytrichum" className="md:max-w-screen-sm"/>
                                    <span className="text-center text-sm text-gray-500">Siklus hidup Polytrichum (sumber: Hasanuddin &amp; Mulyadi, 2015)</span>
                                </div>
                                <p><i>Polytrichum</i> bereproduksi sama seperti jenis lumut lainnya yaitu melalui dua tahapan sporofit dan gametofit. Tahapan reproduksinya dimulai dari spora yang berkembang menjadi protonema. Protonema kemudian berkembang dengan pemisahan cabang-cabangnya yang menjadi lumut muda. Pada lumut muda ini terdapat gametofit yang menghasilkan arkegonium dan antheridium. Arkegonium penghasil sel induk dan antheridium penghasil sel sperma akan bergabung menjadi satu sehingga terjadi fertilisasi membentuk zigot. Zigot merupakan tahap awal terbentuknya generasi sporofit yang akan tumbuh menjadi tangkai, kapsul di bagian ujungnya dan sporofit dewasa yang tersusun dari kaki untuk pelekat pada gametofit yang terbentuk dari pembelahan zigot. Sporangium merupakan tempat penghasil spora melalui meiosis. <i>Polytrichum</i> mempunyai sifat <i>dioecious</i> yang artinya organ reproduksinya yang berupa arkegonium dan anteridium berada terpisah pada tumbuhan yang berbeda. <i>Polytrichum</i> mempunyai bentuk arkegonium seperti labu dengan tangkai yang sangat pendek yang mengandung sel induk, sedangkan mempunyai anteridium berbentuk seperti gada dengan tangkai pendek yang didalamnya terdapat sel sperma.</p>
                            </>,
            habitat:    <>
                            <p><i>Polytrichum</i> tersebar di daerah tropis, khususnya tanah humus lembab dan tanah mineral di dekat air. tumbuh hingga ketinggian 1.400m dpl. <i>Polytrichum</i> umumnya tumbuh di tanah, tebing-tebing basah, dan di atas batu cadas.</p>
                        </>,
            daftarPustaka:  <>
                                <p>Fu, Peng. et al. 2009. Constituents of the Moss <i>Polytrichum commune. J. Nat. Prod.</i> https://doi.org/10.1021/np800830v</p>
                                <p>Hasanuddin &amp; Mulyadi. 2015. <i>Botani Tumbuhan Rendah.</i> Banda Aceh: USK Press.</p>
                                <p>Landry, Louis-M. 2010. <i>Polytrichum</i> sp. Photo Database. (<i>Online</i>) https://calphotos.berkeley.edu/cgi/img_query?enlarge=0000+0000+0610+0505. diakses pada 27 Juni 2021.</p>
                                <p>Tim Pudak Scientific. 2014. <i>Buku Deskripsi dan Kunci Determinasi Bryophyta.</i> Bandung: Pudak Scientific</p>
                            </>,
        },
    },
    {
        genus: 'Rhodobryum',
        gambar: {
            img: rhodobryum,
            sumber: 'Azuelo. dkk, 2010',
        },
        taksonomi: {
            kingdom: 'Plantae',
            divisio: 'Bryophyta',
            classis: 'Bryopsida',
            ordo: 'Bryales',
            familia: 'Bryaceae',
            genus: 'Rhodobryum',
        },
        materi: {
            morfologi: <>
                            <p>Genus <i>Rhodobryum</i> tergolong sebagai tanaman besar dalam keluarga Bryaceae. <i>Rhodobryum</i> memiliki tinggi 1-5 cm dengan tangkai daun yang tidak bercabang. Panjang tangkai 4-10 mm, daun tersusun dalam roset antara 18-55 helai, biasanya lebih dari 20 helai. Daun melebar di bagian tengah, kemudian mengerucut di bagian ujung. Sporangium berbentuk kapsul. Lumut ini berkembangbiak secara aseksual melalui batang primernya yang seperti stolon. Terkadang juga dengan batang sekundernya. Lumut dari genus ini merupakan tanaman tahunan yang selalu berwarna hijau dan membentuk koloni. <i>Rhodobryum</i> ini cenderung bertahan di kondisi yang lembab, sehingga banyak tumbuh di tanah yang subur di hutan, sepanjang pinggir hutan, pada batang kayu lapuk, di bawah pohon, tanah di sekitar bebatuan atau pada batuan, kadang-kadang di karang pada ketinggian 0-3000 m dpl. Beberapa lumut dari genus ini banyak dimanfaatkan, misalnya  <i>Rhodobryum giganteum</i> dan <i>Rhodobryum roseum</i> dalam bidang kesehatan digunakan untuk membantu mengatasi gangguan <i>cardiovascular</i> dan sistem saraf. Tidak hanya itu, biasanya juga digunakan untuk obat angin karena mengandung <i>volatile oils,</i> <i>lactones</i> dan <i>amino acids</i>.</p>
                        </>,
            siklusHidup:<>
                            <div className="flex flex-col items-center gap-2">
                                <img src={siklusHidupRhodobryum} alt="Gambar Siklus Hidup Rhodobryum" className="md:max-w-screen-sm"/>
                                <span className="text-center text-sm text-gray-500">Siklus hidup Rhodobryum (sumber: Hasanuddin &amp; Mulyadi, 2015)</span>
                            </div>
                            <p>Siklus hidup lumut <i>Rhodobryum</i> sama seperti siklus hidup secara umum. Terdapat sedikit perbedaan pada struktur daun yaitu melebar di bagian tengah dan mengerucut di ujung. Sporangium berbentuk kapsul. Siklus hidup dimulai dari spora yang tumbuh menjadi protonema. Kemudian protonema akan menghasilkan gametofit. Pada generasi gametofit ini menghasilkan anteridium dan arkegonium. Anteridium menghasilkan sel sperma akan bergabung dengan arkegonium yang menghasilkan sel telur sehingga terjadi fertilisasi membentuk zigot. Zigot merupakan tahap awal terbentuknya generasi sporofit yang akan tumbuh menjadi tangkai, kapsul di bagian ujungnya dan sporofit dewasa yang tersusun dari kaki untuk pelekat pada gametofit yang terbentuk dari pembelahan zigot. Sporangium merupakan tempat penghasil spora melalui meiosis. Siklus hidup lumut dikatakan lengkap apabila spora telah dewasa dan terbebas dari sporangium (Hasan &amp; Ariyanti, 2004).</p>
                        </>,
            habitat:    <>
                            <p>Banyak tumbuh di tanah yang subur di hutan, sepanjang pinggir hutan, pada kayu lapuk, di bawah pohon, tanah di sekitar bebatuan atau pada batuan, kadang-kadang di karang, pada ketinggian 0 - 3.000 m dpl.</p>
                        </>,
            daftarPustaka:  <>
                                <p>Azuelo, Andrea., dkk. 2010. Diversity Ecological Status of Bryophytes in Mt. Kitanglad, Bukidnom. <i>Asian Journal of Biodiversity.</i> Vol. 1 No. 1. doi: http://dx.doi.org/10.7828/ajob.v1i1.102.</p>
                                <p>Hasan, M &amp; Ariyanti, N.S. 2004. <i>Mengenal Bryophyta (Lumut) Tanam Nasional Gunung Gede Pangrango Volum 1.</i> Balai Tanam Nasional Gunung Gede Pangrango. Cibodas.</p>
                                <p>Hasanuddin &amp; Mulyadi. 2015. <i>Botani Tumbuhan Rendah.</i> Banda Aceh: USK Press.</p>
                                <p>Tim Pudak Scientific. 2014. <i>Buku Deskripsi dan Kunci Determinasi Bryophyta.</i> Bandung: Pudak Scientific</p>
                            </>,
        },
    },
    {
        genus: 'Fissidens',
        gambar: {
            img: fissidens,
            sumber: 'Suzuki dan Iwatsuki, 2013',
        },
        taksonomi: {
            kingdom: 'Plantae',
            divisio: 'Bryophyta',
            classis: 'Bryopsida',
            ordo: 'Dicranales',
            familia: 'Fissidentaceae',
            genus: 'Fissidens',
        },
        materi: {
            morfologi: <>
                            <p>Genus <i>Fissidens</i> termasuk dalam keluarga Fissidentaceae. Genus ini memiliki ciri morfologi seperti: tumbuh dengan tegak atau menjalar pada tanah yang teduh dan lembab, di batuan yang lembab, di dalam hutan, di permukaan tebing atau tepi sungai. Panjang batang dapat mencapai 12 cm. <i>Fissidens</i> biasanya hidup secara berkelompok membentuk semak dan bentuknya mirip pakis. Batang dari <i>Fissidens</i> ini tumbuh tegak dengan daun yang tersusun rapat. Susunan daun membentuk 2 baris di sisi kiri dan kanan tangkai. Di setiap helai daun kecil, ujungnya meruncing. Sedangkan di sisi adaksialnya terdapat duplikat daun berbentuk perahu dengan panjang sekitar 2/3 dari panjang daunnya. <i>Fissidens</i> juga memiliki daun yang berwarna hijau kekuningan hingga coklat emas. Sporangium dari <i>Fissidens</i> ini berbentuk kapsul, agak merunduk dengan tangkai yang lurus. Lumut dari genus ini dapat dimanfaatkan sebagai antibakteri serta juga dapat melegakan pernapasan (Erzerberger, 2016).</p>
                        </>,
            siklusHidup:<>  
                            <div className="flex flex-col items-center gap-2">
                                <img src={siklusHidupFissidens} alt="Gambar Siklus Hidup Fissidens" className="md:max-w-screen-sm"/>
                                <span className="text-center text-sm text-gray-500">Siklus hidup Fissidens (sumber: Gembong, 2003)</span>
                            </div>,
                            <p>Sama seperti siklus hidup lumut pada umumnya, hanya saja terdapat sedikit perbedaan pada <i>Fissidens</i> mempunyai sporangium berbentuk kapsul, agak merunduk dan bertangkai lurus. Siklus hidup dimulai dari spora yang tumbuh menjadi protonema. Kemudian protonema akan menghasilkan gametofit. Pada generasi gametofit ini menghasilkan anteridium dan arkegonium. Anteridium menghasilkan sel sperma akan bergabung dengan arkegonium yang menghasilkan sel telur sehingga terjadi fertilisasi membentuk zigot. Zigot merupakan tahap awal terbentuknya generasi sporofit yang akan tumbuh menjadi tangkai, kapsul di bagian ujungnya dan sporofit dewasa yang tersusun dari kaki untuk pelekat pada gametofit yang terbentuk dari pembelahan zigot. Sporangium merupakan tempat penghasil spora melalui meiosis. Siklus hidup lumut dikatakan lengkap apabila spora telah dewasa dan terbebas dari sporangium (Hasan &amp; Ariyanti, 2004).</p>,
                        </>,
            habitat:    <>
                            <p>Menurut Eddy (1988), suku ini hanya mempunyai satu marga atau genus yaitu <i>Fissidens</i>. Marga ini terdiri dari beberapa ratus jenis yang tersebar diseluruh belahan dunia dan ditemukan dalam beberapa tipe habitat.  <i>Fissidens</i> ditemukan tumbuh pada substrat tanah, batu, pasir akar pohon dan kulit pohon. Tumbuhan ini banyak ditemukan tumbuh di batu dengan persebaran <i>Fissidens</i> hampir ada di seluruh belahan bumi, di Indonesia ekologi dan persebaran umumnya ditemukan pada batuan lembab di area pegunungan, persebarannya di daerah dan kawasan Malesia yang hanya ditemukan di Jawa dan Filipina, dan juga dari kepulauan Galapagos hingga samudra Pasifik. <i>Fissidens</i> tumbuh tersebar, rapi, hingga dapat tumbuh berkelompok, dengan tinggi 3-6 mm. Lumut <i>Fissidens intromarginatulus</i> tumbuh tegak dengan sesekali terlihat batang terjadi percabangan 2-3 cabang, duduk daun berdekatan atau agak berjauhan dan lanset (Eddy, 1988).</p>
                        </>,
            daftarPustaka:  <>
                                
                                <p>Eddy, A. 1988. <i>A Handbook of Malesian Mossesvolume 1 Spagnales to Dicranales.</i> London: British Musium (Natural History).</p>
                                <p>Erzerberger, Peter. 2016. The Genus <i>Fissidens</i> (Fissidentaceae, Bryophyta) In Hungary. <i>Studia Botanica Hungarica.</i> 47 (1). DOI: 10.17110/StudBot.2016.47.1.41.</p>
                                <p>Gembong, T. 2003. <i>Taksonomi Tumbuhan (Scyzophyta, Thallophyta, Bryophyta, Pteridophyta).</i> Yogyakarta: UGM Press.</p>
                                <p>Hasan, M &amp; Ariyanti, N.S. 2004. <i>Mengenal Bryophyta (Lumut) Tanam Nasional Gunung Gede Pangrango Volum 1.</i> Balai Tanam Nasional Gunung Gede Pangrango. Cibodas.</p>
                                <p>Suzuki dan Iwatsuki. 2013. <i>Collections of Fissidens (Fissidentaceae, Bryopsida)</i> Made by Messrs. T. Kamiyama and K. Shiina in Laos. Hattoria 4: 47–70.</p>
                                <p>Tim Pudak Scientific. 2014. <i>Buku Deskripsi dan Kunci Determinasi Bryophyta.</i> Bandung: Pudak Scientific</p>
                            </>,
        },
    },
]

export default materi