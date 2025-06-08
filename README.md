# SiTumbuh — Sistem Prediksi Risiko Stunting Berbasis Web dan Machine Learning

![SiTumbuh Banner](https://img.shields.io/badge/stunting-prediction-blue)
> Website untuk deteksi dini dan intervensi stunting pada anak usia dini berbasis teknologi machine learning.

---

## 📌 Deskripsi Proyek

**SiTumbuh** adalah platform berbasis web yang bertujuan untuk membantu orang tua dan tenaga kesehatan mendeteksi risiko stunting pada anak sejak dini. Menggunakan model klasifikasi machine learning dengan akurasi tinggi, SiTumbuh menyajikan prediksi berbasis lima parameter utama pertumbuhan anak. Selain prediksi, aplikasi juga menyediakan informasi edukatif, daftar tenaga medis, serta riwayat pemeriksaan pengguna.

---

## 🎯 Tujuan

- Meningkatkan kesadaran masyarakat tentang risiko stunting.
- Memberikan akses deteksi dini yang mudah dan akurat.
- Mendukung tenaga kesehatan dalam pemantauan gizi anak.
- Membantu pencapaian target nasional penurunan angka stunting.

---

## ⚙️ Fitur Utama

- ✅ Prediksi risiko stunting dengan **akurasi 94%**.
- 🧠 Model Machine Learning berbasis TensorFlow (Sequential).
- 📥 Input data: Gender, Age, Birth Weight, Body Length, Breastfeeding.
- 📊 Hasil klasifikasi + rekomendasi tindakan.
- 👩‍⚕️ Daftar statis bidan & dokter anak terdekat.
- 📚 Artikel edukasi seputar kesehatan anak.
- 🔐 Sistem login & penyimpanan riwayat pemeriksaan.
- 📦 Deployment web berbasis React.js, Hapi.js, dan Supabase.

---

## 🧠 Model Machine Learning

### 🔸 Arsitektur Model

Model klasifikasi dibangun menggunakan TensorFlow `Sequential`:

```

Model: "sequential"
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━┓
┃ Layer (type)                    ┃ Output Shape           ┃       Param # ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━┩
│ dense (Dense)                   │ (None, 64)             │           384 │
│ dropout (Dropout)               │ (None, 64)             │             0 │
│ dense\_1 (Dense)                 │ (None, 32)             │         2,080 │
│ dense\_2 (Dense)                 │ (None, 1)              │            33 │
└─────────────────────────────────┴────────────────────────┴───────────────┘
Total params: 2,497 (9.75 KB)
Trainable params: 2,497 (100%)

```

### 🔹 Hasil Evaluasi

Model mencapai performa berikut pada data uji (1.300 sampel):

```

```
          precision    recall  f1-score   support
```

No Stunting       0.92      0.95      0.94       638
Stunting       0.95      0.93      0.94       662

```
accuracy                           0.94      1300
```

macro avg       0.94      0.94      0.94      1300
weighted avg       0.94      0.94      0.94      1300

```

Model disimpan dalam format:  
- `stunting_model.h5`  
- `stunting_model.tflite`  
- `stunting_model.weights.h5`  
- `stunting_model_architecture.json`  
- `scaler.pkl`, `feature_selector.pkl`

---

## 💻 Teknologi yang Digunakan

| Layer        | Teknologi                          |
|--------------|-------------------------------------|
| Front-End    | React.js, Tailwind CSS              |
| Back-End     | Hapi.js, Axios                      |
| Database     | PostgreSQL (Supabase)               |
| ML Model     | TensorFlow, Scikit-Learn            |
| Deployment   | Vercel, Render                      |
| Desain UI/UX | Figma                               |

---

## 🗃️ Struktur Folder

```

📁 /src
├── frontend/         → Kode React (form, hasil, login, artikel)
├── backend/          → API Hapi.js, koneksi Supabase
├── model/            → TensorFlow model + .pkl files
├── assets/           → Gambar, ilustrasi, ikon
├── README.md

````

---

## 🚀 Cara Menjalankan Proyek

1. **Clone repositori:**
   ```bash
   git clone https://github.com/username/situmbuh.git
   cd situmbuh
````

2. **Install dependensi frontend:**

   ```bash
   cd frontend
   npm install
   ```

3. **Jalankan frontend:**

   ```bash
   npm run dev
   ```

4. **Jalankan backend:**

   ```bash
   cd ../backend
   node server.js
   ```

5. **Testing endpoint API:**
   Gunakan Postman untuk uji `POST /predict`

---

## 🧪 Uji dan Validasi

* ✅ Confusion Matrix & Classification Report
* ✅ Cross-validation dan akurasi validasi
* ✅ Manual testing via Postman
* ✅ Row-Level Security (RLS) aktif di Supabase

---

## 👥 Tim Pengembang

| Nama                 | Role            | Institusi                |
| -------------------- | --------------- | ------------------------ |
| Parveen Uzma Habidin | ML Engineer     | Universitas Tarumanagara |
| Christ Thaddeus      | ML Engineer     | Universitas Tarumanagara |
| I Gede Widnyana      | ML Engineer     | Universitas Udayana      |
| Muhammad Irfan D.    | FE/BE Developer | Universitas Semarang     |
| Ni Komang Purnami    | FE/BE Developer | Universitas Udayana      |
| Marheska Oktalia     | FE/BE Developer | Universitas IGM          |

---

