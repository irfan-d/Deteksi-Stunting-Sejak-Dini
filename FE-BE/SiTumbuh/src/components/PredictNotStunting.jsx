import '/src/index.css';
import tryAgain from "../assets/reset.svg";
import { useNavigate } from 'react-router-dom';

export default function NotStunting() {
    const navigate = useNavigate()
    return (
        <div className="min-h-0 bg-white px-4 flex justify-center pb-24 pt-8 mt-32">
            <div className="w-full max-w-4xl">
                {/*Judul*/}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-2 text-sky-400">
                Hasil Prediksi
                </h1>
                <p className="text-[var(--color-darkgrey)] mb-8 text-center text-sm md:text-base">
                    Berdasarkan data yang Anda masukkan, anak Anda tidak terindikasi stunting.
                </p>

                {/*Box Hasil*/}
                <div className="bg-gray-100 rounded-3xl p-6 sm:p-10 shadow-md">
                    <h2 className="text-lg sm:text-2xl font-semibold text-center text-sky-400 mb-4">
                        Tidak Stunting
                    </h2>
                    <p className="text-sm sm:text-base text-justify text-black mb-10 px-2 sm:px-6">
                        Selamat! Anak Anda terdeteksi tidak memiliki risiko stunting. Tetap jaga pola makan sehat, pemantauan tumbuh kembang secara rutin, serta pastikan imunisasi dan asupan gizi anak selalu terpenuhi. Konsultasikan secara berkala dengan tenaga kesehatan untuk memastikan tumbuh kembang optimal.
                    </p>
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