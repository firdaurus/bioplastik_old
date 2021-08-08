import polytrichum from '../assets/polytrichum.jpg'
import rhodobryum from '../assets/rhodobryum.jpg'
import fissidens from '../assets/fissidens.jpg'

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
        materi: `<p class="text-justify">Polytrichum sp. memiliki bentuk tubuh tegak menyerupai tanaman tingkat tinggi dengan batang keras, ditutupi daun semu pada hampir setengah batangnya. Sporogonium dari Polytrichum sp. berbentuk lonjong bersifat elastis membentuk koloni yang luas dan membentuk benang dengan panjang batang 1-8 cm.  Sporogonium atau kapsul yang belum matang ditutupi oleh kaliptra yang berambut berwarna kuning kecokelatan dengan tangkai kapsul yang berwarna merah. Kapsul yang sudah matang bersudut dan memiliki 4 sisi. Spora berwarna cokelat dikeluarkan oleh kapsul yang sudah matang. Talus pada Polytrichum sp. berbentuk seperti jarum dan berwarna hijau karena habitatnya berada di zona amofibious. Polytrichum sp. juga memiliki kaliptra seta yang merupakan tangkai kaliptra serta rhizoid yang menyerupai seperti akar. </p>
        <p class="mt-3 text-justify">Polytrichum sp. disebut juga sebagai lumut haircap atau lumut rambut yang tersebar di daerah tropis, khususnya di tanah humus yang lembab dan tanah mineral di dekat air. Biasanya Polytrichum sp. juga cukup banyak ditemukan di pinggir sungai, tanah liat, batuan, kayu-kayu kering, lumpur serta gundukan pasir. Polytrichum sp. memiliki tinggi hingga mencapai 1.400 m dpl.</p>
        <p class="mt-3 text-justify">Polytrichum sp. ini dapat dimanfaatkan sebagai bahan pembuat kasur yang memiliki nilai ekonomi yang cukup tinggi sebagai tanaman hias. Tidak hanya itu, Polytrichum sp. juga dapat dimanfaatkan sebagai obat penyakit radang hati atau hepatitis, sebagai bahan bakar (<i className="italic">sphagnum</i>) atau atap rumah. Sedangkan manfaat bagi lingkungan adalah mampu menyobek struktur batu menjadi tanah, berperan dalam ketersediaan air dan mencegah banjir dalam ekosistem hutan. Selain itu, tumbuhan ini juga digunakan untuk menjaga tanah dari erosi dan kekeringan pada musim kemarau.</p>`.replaceAll('Polytrichum', '<i className="italic">Polytrichum</i>')
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
        materi: `<p class="text-justify">Genus Rhodobryum tergolong sebagai tanaman besar dalam keluarga Bryaceae. Rhodobryum memiliki tinggi 1-5 cm dengan tangkai daun yang tidak bercabang. Panjang tangkai 4-10 mm, daun tersusun dalam roset antara 18-55 helai, biasanya lebih dari 20 helai. Daun melebar di bagian tengah, kemudian mengerucut di bagian ujung. Sporangium berbentuk kapsul. Banyak tumbuh di tanah yang subur di hutan, sepanjang pinggir hutan, pada kayu lapuk, di bawah pohon, tanah di sekitar bebatuan atau pada batuan, kadang-kadang di karang pada ketinggian 0-3000 m dpl.</p>`
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
        materi: `<p class="text-justify">Genus Fissidens termasuk dalam keluarga Fissidentaceae. Genus ini memiliki ciri morfologi seperti: tumbuh dengan tegak atau menjalar pada tanah yang teduh dan lembab, di batuan yang lembab, di dalam hutan, di permukaan tebing atau tepi sungai. Panjang batang dapat mencapai 12 cm. Fissidens biasanya hidup secara berkelompok membentuk semak dan bentuknya mirip pakis. Batang dari Fissidens ini tumbuh tegak dengan daun yang tersusun rapat. Susunan daun membentuk 2 baris di sisi kiri dan kanan tangkai. Di setiap helai daun kecil, ujungnya meruncing. Sedangkan di sisi adaksialnya terdapat duplikat daun berbentuk perahu dengan panjang sekitar 2/3 dari panjang daunnya. Fissidens juga memiliki daun yang berwarna hijau kekuningan hingga coklat emas. Sporangium dari Fissidens ini berbentuk kapsul, agak merunduk dengan tangkai yang lurus (Erzerberger, 2016).</p>`
    },
]

export default materi