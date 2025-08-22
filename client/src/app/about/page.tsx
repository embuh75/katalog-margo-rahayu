import { User } from "lucide-react"

const people = [
    {
        name: 'Kepala Desa Grenggeng',
        role: 'Pembina',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Anung Pratama',
        role: 'Ketua',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Tika Ranantika',
        role: 'Sekertaris',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Dhamar Dwi K',
        role: 'Seksi Penanaman',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Dasimin',
        role: 'Seksi Pembibitan',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Hassya Leandrew K',
        role: 'Divisi Wanawiata',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Titi Anjarwati',
        role: 'Divisi Koperasi',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Supriyadi',
        role: 'Ketua',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Sugiyem',
        role: 'Bendahara',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Mucharom',
        role: 'Seksi Penanaman ',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Slamet',
        role: 'Seksi Pemeliharaan',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Juliyah',
        role: 'Divisi KUP',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

const About = () => {
    return (
        <div className="shadow-lg rounded-lg overflow-hidden mt-10">
            {/* HERO SECTION */}
            <section className="inset-shadow-sm rounded-lg overflow-hidden">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-normal sm:text-lg text-gray-600">
                        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-sky-700">KUP MARGO RAHAYU</h2>
                        <p className="mb-4">Berawal dari inisiatif sederhana pada tahun 2012, kami memulai perjalanan panjang dalam melestarikan seni anyaman pandan. Awalnya, para pengrajin bekerja dari rumah masing-masing, memanfaatkan sumber daya pandan yang melimpah. Meskipun demikian, keterbatasan ruang kerja menjadi kendala utama dalam meningkatkan produktivitas. Melihat potensi yang besar, kami berinisiatif membangun gedung kerja bersama dengan bantuan Dinas Kehutanan. Keputusan ini terbukti sangat tepat, karena memungkinkan kami untuk bekerja secara lebih efisien dan meningkatkan kualitas produk secara signifikan.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src="/kup.jpg" alt="office content 1" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://framerusercontent.com/images/Y0gtYrsGVrL4mP3TLctHfzM2C88.jpg?scale-down-to=1024" alt="office content 2" />
                    </div>
                </div>
            </section>
            {/* TEAM SECTION */}
            <section className="flex items-center justify-center">
                <div className="py-24">
                    <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div className="max-w-xl">
                            <h2 className="text-2xl font-extrabold tracking-tight text-pretty text-sky-700">
                                STRUKTUR ORGANISASI PERUSAHAAN
                            </h2>
                            <p className="mt-6 text-lg/8 font-medium text-gray-600">
                                Struktur organisasi perusahaan ini dibagi menjadi beberapa bagian sperti disamping.
                            </p>
                        </div>
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className="flex items-center gap-x-6">
                                        <User className="size-16 rounded-full text-gray-400 bg-gray-100" />
                                        <div>
                                            <h3 className="text-base/7 font-semibold tracking-tight">
                                                {person.name}
                                            </h3>
                                            <p className="text-sm/6 font-semibold text-emerald-600">{person.role}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            {/* VISI & MISI SECTION */}
            <section className="-mt-20">
                <div className="py-24">
                    <div className="mx-auto max-w-7xl gap-20 px-6 lg:px-8">
                        <div className="max-w-full">
                            <h2 className="flex items-center justify-center text-3xl font-extrabold tracking-tight text-pretty text-sky-700">
                                VISI DAN MISI
                            </h2>
                            <ul className="flex flex-col justify-center px-8 md:px-20 text-wrap list-disc mt-6 text-lg/8 font-medium text-gray-600">
                                <li>Terwujudnya kelompok yang mandiri di atas potensi sumber daya lokal yang dimiliki.</li>
                                <li>Mengembangkan dan menganekaragam komoditas pertanian dalam arti luas lengkap memperhatikan aspek kelestariannya.</li>
                                <li>Mengembangkan tanaman hasil hutan kayu maupun hasil hutan bukan kayu untuk menyediakan bahan baku industri kayu dan kerajinan.</li>
                                <li>Terbentuknya koperasi sebagai wadah kegiatan usaha-usaha yang berkembang bagi anggota kelompok.</li>
                                <li>Meningkatkan produksi bahan baku barang setengah jadi dan produk jadi berbahan baku daun pandan</li>
                                <li>Meningkatkan sumber daya manusia dan jejaring kerja.</li>
                                <li>Mengutamakan konservasi dalam setiap aktivitas pemanfaatan keanekaragaman hayati.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION VIDEO */}
            <section className="-mt-10">
                <h1 className="flex items-center justify-center max-h-full w-full text-3xl font-extrabold tracking-tight text-pretty text-sky-700">VIDEO</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 m-8">
                    {/* VIDEO 1 */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg md:text-2xl font-semibold tracking-tight text-emerald-700 md:mb-13">
                            Video Company Profile KUP Margo Rahayu
                        </h1>
                        <div className="aspect-video w-full max-w-full rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/RVkeq3Ykk5c?iv_load_policy=3&amp;rel=0&amp;modestbranding=1&amp;playsinline=1&amp;autoplay=0"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    {/* VIDEO 2 */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg md:text-2xl font-semibold tracking-tight text-emerald-700 md:mb-5">
                            Mengenal Lebih Dekat KUP Margo Rahayu dan Produk Anyaman Unggulannya
                        </h1>
                        <div className="aspect-video w-full max-w-full rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/sP-DuAHRDbU?iv_load_policy=3&amp;rel=0&amp;modestbranding=1&amp;playsinline=1&amp;autoplay=0"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About