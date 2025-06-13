import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import '/src/index.css';
import { loginUser } from "../../data/api";
import { useAuth } from "../../utils/authContext"
import nathan from "../../assets/nathan.jpg"

export default function LoginPage() {
    const {login} = useAuth();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(form);
            if (data.session && data.session.access_token) {
            login(data.session.access_token);
            navigate("/");
            } else {
            setError({ email: "Login gagal: token tidak ditemukan" });
            }
        } catch (err) {
            setError({ email: err.message });
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-4xl bg-white rounded-3xl shadow-none flex flex-col md:flex-row overflow-hidden">
                    {/* Form */}
                    <div className="flex-1 p-8 md:p-12">
                        <div className="flex items-center mb-8">
                            <img src="/situmbuh.svg" alt="SiTumbuh" className="h-10 mr-2" />
                            <span className="text-2xl font-bold text-sky-400">SiTumbuh</span>
                        </div>
                        <h2 className="text-3xl font-bold text-sky-400 mb-2">Masuk</h2>
                        <p className="mb-6 text-gray-500">Selamat datang, silakan masuk untuk melanjutkan</p>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block mb-1 text-sm">Email</label>
                            {error.email && <span className="text-red-500 text-xs">{error.email}</span>}
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Masukkan email"
                                className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm">Kata Sandi</label>
                            {error.password && <span className="text-red-500 text-xs">{error.password}</span>}
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Masukkan kata sandi"
                                className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-sky-400 hover:bg-sky-500 text-white rounded px-4 py-2 font-semibold mt-2"
                        >
                            Masuk
                        </button>
                        </form>
                        <p className="mt-4 text-center text-gray-500 text-sm">
                            Belum punya akun?{" "}
                        <Link to="/register" className="text-sky-400 underline">Daftar</Link>
                        </p>
                    </div>
                    {/* Image */}
                    <div className="hidden md:flex flex-1 items-center justify-center">
                        <img
                            src={nathan}
                            alt="Anak-anak"
                            className="object-cover w-full h-full rounded-3xl"
                            style={{ maxWidth: "350px", maxHeight: "350px" }}
                        />
                    </div>
                </div>
            </div>
            <footer className="bg-sky-300 text-center py-4 text-sm text-black mt-auto">
                ©2025 SiTumbuh. All rights reserved
            </footer>
        </div>
    );
}