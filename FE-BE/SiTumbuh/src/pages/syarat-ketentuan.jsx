import React from "react";

const SyaratKetentuan = () => {
  return (
    <div className="bg-[var(--color-grey)] min-h-screen px-6 py-10 md:px-20 lg:px-32 mt-20">
      <div className="bg-[var(--color-white)] p-8 rounded-[var(--radius-5xl)] pt-32 shadow-md text-[var(--color-black)] max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[var(--color-blue)] mb-6 text-center">
          Syarat dan Ketentuan
        </h1>
        <div className="space-y-4 text-base leading-relaxed text-justify scrollbar-hide overflow-y-auto max-h-[70vh]">
          <p>
            Selamat datang di aplikasi kami. Dengan menggunakan aplikasi ini,
            Anda menyetujui untuk terikat oleh syarat dan ketentuan berikut.
            Mohon baca dengan seksama sebelum melanjutkan.
          </p>
          <p>
            1. <strong>Penggunaan Aplikasi:</strong> Aplikasi ini disediakan
            hanya untuk keperluan pribadi dan non-komersial. Dilarang
            mendistribusikan ulang atau mengeksploitasi konten tanpa izin.
          </p>
          <p>
            2. <strong>Privasi:</strong> Kami menghormati privasi Anda. Data
            yang dikumpulkan hanya digunakan untuk meningkatkan pengalaman
            pengguna dan tidak akan dibagikan ke pihak ketiga tanpa persetujuan
            Anda.
          </p>
          <p>
            3. <strong>Hak Cipta:</strong> Seluruh konten, desain, dan fitur
            dalam aplikasi ini adalah milik kami atau pihak ketiga yang memiliki
            lisensi sah.
          </p>
          <p>
            4. <strong>Perubahan Syarat:</strong> Kami berhak mengubah syarat
            dan ketentuan ini kapan saja. Perubahan akan diberlakukan segera
            setelah diperbarui di aplikasi.
          </p>
          <p>
            Dengan menggunakan aplikasi ini, Anda menyatakan bahwa Anda telah
            membaca, memahami, dan menyetujui semua isi syarat dan ketentuan
            ini.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SyaratKetentuan;