import '/src/index.css';
import tryAgain from "../assets/reset.svg";
import arrowRightBlack from '../assets/arrow-right-black.svg';
import { useNavigate } from 'react-router-dom';

export default function Stunting() {
    const navigate = useNavigate()
    return (
        <div className="min-h-0 bg-white px-4 flex justify-center pb-24 pt-8 mt-32">
            <div className="w-full max-w-4xl">
                {/*Judul*/}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-2 text-sky-400">
                Hasil Prediksi
                </h1>
                <p className="text-[var(--color-darkgrey)] mb-8 text-center text-sm md:text-base">
                Berikut adalah hasil prediksi risiko stunting pada anak berdasarkan data yang Anda masukkan.
                </p>

                {/*Box Hasil*/}
                <div className="bg-gray-100 rounded-3xl p-6 sm:p-10 shadow-md">
                    <h2 className="text-lg sm:text-2xl font-semibold text-center text-sky-400 mb-4">
                        Stunting
                    </h2>
                    <p className="text-sm sm:text-base text-justify text-black mb-10 px-2 sm:px-6">
                        Anak Anda terdeteksi memiliki risiko stunting. Segera konsultasikan hasil ini dengan tenaga kesehatan atau bidan untuk mendapatkan penanganan dan saran yang tepat. Pastikan anak mendapatkan asupan gizi seimbang, imunisasi lengkap, serta pemantauan tumbuh kembang secara rutin. Jangan ragu untuk mencari informasi dan dukungan lebih lanjut demi kesehatan optimal buah hati Anda.
                    </p>
                    <div className="flex justify-center mt-8">
                        <button className="inline-flex items-center border-1 text-black px-5 py-2.5 rounded-md text-sm md:text-base hover:bg-[var(--color-darkgrey)]">
                            Konsultasi dengan bidan
                            <img  src={arrowRightBlack} className="ml-2 h-4 md:h-6" />
                        </button>
                    </div>
                </div>

                {/*Tombol Coba Lagi*/}
                <div className="flex justify-center mt-8">
                    <button 
                        className="inline-flex items-center bg-black text-white px-5 py-2.5 rounded-md text-sm md:text-base hover:bg-gray-800 transition"
                        onClick={() => navigate('/predict')}
                    >
                        Coba Lagi
                        <img  src={tryAgain} className="ml-2 h-4 md:h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}