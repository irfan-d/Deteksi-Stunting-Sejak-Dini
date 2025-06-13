# 💡 SiTumbuh — Sistem Deteksi Dini Risiko Stunting Berbasis Machine Learning

**SiTumbuh** adalah aplikasi web yang dirancang untuk membantu deteksi dini risiko stunting pada anak usia dini di Indonesia. Aplikasi ini memanfaatkan teknologi *machine learning* untuk memprediksi kemungkinan stunting berdasarkan data pertumbuhan anak, serta menyediakan rekomendasi dan edukasi kesehatan. SiTumbuh menyasar pengguna seperti orang tua, kader kesehatan, dan tenaga medis di daerah dengan akses terbatas terhadap alat ukur dan layanan kesehatan.

---

## 👨‍👩‍👧‍👦 Tim Pengembang

| Nama | Peran | Institusi |
|------|-------|-----------|
| Parveen Uzma Habidin | Machine Learning Engineer | Universitas Tarumanagara |
| Christ Thaddeus | Machine Learning Engineer | Universitas Tarumanagara |
| I Gede Widnyana | Machine Learning Engineer | Universitas Udayana |
| Muhammad Irfan Dharmalanga | Front-End & Back-End Developer | Universitas Semarang |
| Ni Komang Purnami | Front-End & Back-End Developer | Universitas Udayana |
| Marheska Oktalia | Front-End & Back-End Developer | Universitas Indo Global Mandiri |

---
## Hasil Website SiTumbuh

https://situmbuh-fe.vercel.app/ 


---
## 📊 Hasil Model Machine Learning

Model machine learning dikembangkan menggunakan TensorFlow berbasis arsitektur *Sequential* yang terdiri dari:

- 2 Hidden Layer (`Dense(64, relu)` dan `Dense(32, relu)`)
- Dropout layer untuk regularisasi
- Output Layer (`Dense(1, sigmoid)`)

Model dilatih dengan data stunting dari Kaggle dan menggunakan 5 fitur utama:
- Gender
- Age
- Birth Weight
- Body Length
- Breastfeeding

📈 **Hasil akhir model mencapai akurasi sebesar 94% pada data uji**, dengan validasi melalui confusion matrix dan classification report.

Model disimpan dalam berbagai format untuk deployment:
- `stunting_model.h5`
- `stunting_model.tflite`
- `stunting_model.weights.h5`
- `stunting_model_architecture.json`
- `scaler.pkl` dan `feature_selector.pkl` menggunakan `joblib`

---

## 🛠️ Teknologi & Tools

### 💻 Front-End
- **React.js** – Framework UI
- **Tailwind CSS** – Styling responsif
- **Leaflet.js** – Peta interaktif

### ⚙️ Back-End
- **Hapi.js** – REST API Framework
- **Supabase (PostgreSQL)** – Database dan autentikasi
- **Axios** – HTTP Request
- **Dotenv, Nodemon, JsonWebToken, Nanoid** – Manajemen backend

### 🧠 Machine Learning
- **TensorFlow** – Pengembangan model ML
- **Scikit-Learn, Pandas, NumPy** – Data preprocessing & feature selection
- **Matplotlib & Seaborn** – Visualisasi data
- **Joblib & Pickle** – Penyimpanan model

---

## 🌐 Tautan Penting

- 🔗 **Website SiTumbuh**: *(Coming Soon / Isi jika sudah ada URL hosting)*  
- 📓 **Notebook Pembuatan Model ML**: [Google Colab Notebook](https://colab.research.google.com/drive/1ugQdU_AfxgPV_2kFJF1DM3MCDjzqFn4E?usp=sharing)  
- 🎨 **Desain UI Figma**: [Figma Design File](https://www.figma.com/design/hL9f5Vbkie4F6iWBXCAMOc/Untitled?node-id=0-1&t=xErtJqkFSEhI2o2X-1)  
- 🧬 **GitHub Repository**: [irfan-d/Deteksi-Stunting-Sejak-Dini](https://github.com/irfan-d/Deteksi-Stunting-Sejak-Dini)

---

## 📚 Fitur Aplikasi

- ✅ Prediksi risiko stunting berbasis AI
- 📑 Rekomendasi tindakan dan edukasi gizi
- 👨‍⚕️ Daftar bidan & dokter anak (manual/statis)
- 🔐 Login pengguna & riwayat pengecekan
- 📱 Responsif & mobile-friendly

---

## 🚀 Cara Menjalankan Proyek (Singkat)

1. **Clone repository**
   ```bash
   git clone https://github.com/irfan-d/Deteksi-Stunting-Sejak-Dini.git
   cd Deteksi-Stunting-Sejak-Dini


2. **Install & jalankan Front-End**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Install & jalankan Back-End**

   ```bash
   cd ../backend
   npm install
   npm run dev
   ```

4. **Konfigurasi file `.env`**
   Tambahkan variabel Supabase, URL model Flask (jika terpisah), dan JWT Secret di direktori backend.

5. **Jalankan model Flask (opsional)**
   Jalankan `app.py` dari folder `ml-api` dan pastikan file `model.h5`, `scaler.pkl`, dll tersedia.

6. **Testing & akses aplikasi**
   Frontend: `http://localhost:5173`
   Backend: `http://localhost:3000`

---

## 📝 Lisensi

Proyek ini dikembangkan untuk keperluan edukasi dalam program **Capstone Project - Dicoding Coding Camp 2025** dan tidak diperuntukkan untuk penggunaan medis profesional secara langsung tanpa supervisi.

---

## 🙌 Kontribusi

Kami terbuka terhadap pengembangan lanjutan dan kontribusi dari komunitas. Silakan fork repo ini dan ajukan pull request jika memiliki saran atau perbaikan.

