import { Clock8, MapPin } from "lucide-react"
import Image from "next/image"

const Address = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 mt-5 shadow-lg rounded-lg overflow-hidden p-5">
            {/* IMAGE */}
            <div className="max-w-full w-full relative aspect-[2/1]">
                <Image src="/kup.jpg" alt="kup" className="rounded-lg" fill />
            </div>
            {/* ADDRESS */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 w-full px-4">
                {/* MAP */}
                <div className="w-full md:w-1/2">
                    <iframe
                        className="w-full h-64 md:h-80 rounded-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.756365711075!2d109.5432307!3d-7.601471800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e654b69b50a334f%3A0x3669878b7634caf9!2sKUP%20Margo%20Rahayu%2C%20Karanganyar!5e0!3m2!1sid!2sid!4v1755660879832!5m2!1sid!2sid"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                {/* ADDRESS LIST */}
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                    <div className="flex items-start gap-2">
                        <MapPin className="text-emerald-700" width={30} height={30}/>
                        <div className="flex items-start gap-2">
                            <span className="text-md font-medium">Alamat:</span>
                            <p className="text-sm md:text-base text-gray-700">
                                9GXV+C79, Setonokunci, Grenggeng, Kec. Karanganyar, Kabupaten
                                Kebumen, Jawa Tengah 54364
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <Clock8 className="text-emerald-700" width={20} height={20} />
                        <div className="flex items-start gap-2">
                            <span className="text-md font-medium">Buka:</span>
                            <p className="text-sm md:text-base text-gray-700">
                                08.00 - 16.00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Address