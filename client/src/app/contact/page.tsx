import { Phone } from "lucide-react"
import Link from "next/link"

const Contact = () => {
    return (
        <div className="flex justify-center items-center mt-8">
            <section className="shadow-xl/30 rounded-lg overflow-hidden">
                <div className="relative py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    {/* Header */}
                    <div className="">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-sky-700">Kontak Kami</h2>
                        <p className="mb-8 lg:mb-16 font-medium  text-center text-gray-600 sm:text-xl">Tertarik dengan produk kami? hubungi kontak berikut:</p>
                    </div>
                    {/* CONTACT */}
                    <div className="flex items-center justify-center">
                        <Link href=" https://wa.me/+628996536310" target="_blank" className="text-white bg-emerald-700 hover:bg-emerald-600/90 focus:ring-4 focus:outline-none focus:ring-emerald-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
                            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fillRule="evenodd" d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" clipRule="evenodd" />
                            </svg>
                            +62 899-6536-310
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact