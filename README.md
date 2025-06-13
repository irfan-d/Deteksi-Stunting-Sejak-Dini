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
## Video Demo Website

Link demo website : https://drive.google.com/drive/folders/1M-HtCDt3BpmB3xjYluZiqeAsGc2o1HHC?usp=drive_link 

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

# 📘 Situmbuh API Documentation

API untuk aplikasi Situmbuh. Mendukung fitur autentikasi, manajemen profil (termasuk foto profil), prediksi stunting, alamat, rekomendasi dokter/bidan, testimoni, contact us, dan artikel edukasi.

---

## Endpoint: `https://situmbuh-api-production-832d.up.railway.app/`

---

## 🌐 Root

### 👋 Welcome

**Endpoint:** `GET /`  
**Response:** `200 OK`  
**Returns:**
```json
{
  "status": "succes",
  "message": "Welcome to Situmbuh API"
}
```

---

## 🔐 Authentication

### 📝 Register

**Endpoint:** `POST /register`  
**Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword",
  "full_name": "User Name"
}
```
**Response:** `201 Created`

---

### 🔓 Login

**Endpoint:** `POST /login`  
**Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```
**Response:** `200 OK`  
**Returns:** Session token

---

### 🔒 Logout

**Endpoint:** `POST /logout`  
**Header:**
```
Authorization: Bearer <token>
```
**Response:** `200 OK`

---

## 👤 Profile

### 🔍 Get Profile

**Endpoint:** `GET /profile`  
**Header:**
```
Authorization: Bearer <token>
```
**Response:** `200 OK`  
**Returns:** Data profil user, contoh:
```json
{
  "user_id": "uuid",
  "email": "user@email.com",
  "full_name": "Nama User",
  "gender": "Male",
  "birth_date": "1990-01-01",
  "phone_number": "081234567890",
  "job": "Student",
  "foto_url": "https://.../profile.jpg"
}
```

---

### ➕ Add/Update Profile

**Endpoint:** `POST /profile`  
**Header:**
```
Authorization: Bearer <token>
```
**Body:**
```json
{
  "gender": "Male",
  "birth_date": "1990-01-01",
  "phone_number": "081234567890",
  "job": "Student",
  "foto_url": "https://.../profile.jpg"
}
```
**Response:** `200 OK`

---

### ✏️ Edit Profile

**Endpoint:** `PUT /profile`  
**Header:**
```
Authorization: Bearer <token>
```
**Body:**
```json
{
  "full_name": "Updated Name",
  "gender": "Female",
  "birth_date": "1995-05-05",
  "phone_number": "089876543210",
  "job": "Engineer",
  "foto_url": "https://.../profile.jpg"
}
```
**Response:** `200 OK`

---

## 📈 Prediction

### 📄 Get All Predictions

**Endpoint:** `GET /predict`  
**Header:**
```
Authorization: Bearer <token>
```
**Response:** `200 OK`  
**Returns:** Daftar riwayat prediksi

---

### 🔎 Get Prediction Detail

**Endpoint:** `GET /predict/{id}`  
**Header:**
```
Authorization: Bearer <token>
```
**Response:** `200 OK`  
**Returns:** Detail prediksi

---

### ➕ Add Prediction

**Endpoint:** `POST /predict`  
**Header:**
```
Authorization: Bearer <token>
```
**Body:**  
```json
{
  "child_name": "Budi",
  "gender": 1,
  "age": 24,
  "body_length": 80,
  "birth_weight": 3.2,
  "breastfeeding": 1
}
```
**Response:** `200 OK`  
**Returns:** Hasil prediksi

---

### ❌ Delete Prediction

**Endpoint:** `DELETE /predict/{id}`  
**Header:**
```
Authorization: Bearer <token>
```
**Response:** `200 OK`

---

## 🏠 Address

### 📍 Get Address

**Endpoint:** `GET /address`  
**Header:**
```
Authorization: Bearer <token>
```
**Response:** `200 OK`  
**Returns:** Data alamat user

---

### ➕ Add Address

**Endpoint:** `POST /address`  
**Header:**
```
Authorization: Bearer <token>
```
**Body:**
```json
{
  "country": "Indonesia",
  "province": "Jawa Barat",
  "regency_city": "Bandung",
  "subdistrict": "Coblong",
  "village": "Dago",
  "street_name": "Jl. Merdeka",
  "house_number": "123",
  "postal_code": "40135"
}
```
**Response:** `200 OK`

---

### ✏️ Update Address

**Endpoint:** `PUT /address`  
**Header:**
```
Authorization: Bearer <token>
```
**Body:** *(sama seperti Add Address)*  
**Response:** `200 OK`

---

## 🩺 Rekomendasi Dokter/Bidan Terdekat

### 🏥 Get Nearby Doctor/Bidan

**Endpoint:** `GET /nearby-doctor`  
**Header:**
```
Authorization: Bearer <token>
```
**Response:** `200 OK`  
**Returns:** Daftar dokter/bidan terdekat (berdasarkan alamat user)

---

## 👩‍⚕️ Daftar Bidan

### 📋 Get All Bidan

**Endpoint:** `GET /bidan`  
**Header:**
```
Authorization: Bearer <token>
```
**Response:** `200 OK`  
**Returns:** Daftar bidan/dokter dari database, contoh:
```json
[
  {
    "id": "uuid",
    "nama": "dr. Markus",
    "pendidikan": "Spesialis Anak",
    "tempat_praktik": "RS Pondok Indah",
    "rating": 5,
    "foto_url": "https://.../bidan.jpg",
    "latitude": -6.2,
    "longitude": 106.8,
    "harga": 400000,
    "jadwal_praktik": "Senin–Jumat, 09.00–12.00 WIB",
    "no_str": "1234567890"
  }
]
```

---

### 📄 Get Bidan Detail

**Endpoint:** `GET /bidan/{id}`  
**Header:**
```
Authorization: Bearer <token>
```
**Response:** `200 OK`  
**Returns:** Detail bidan sesuai id

---

## ⭐ Testimoni Bidan

### ➕ Add Testimoni

**Endpoint:** `POST /testimonies`  
**Header:**
```
Authorization: Bearer <token>
```
**Body:**
```json
{
  "bidan_id": "uuid-bidan",
  "content": "Bidan sangat ramah dan profesional.",
  "rating": 5
}
```
**Response:** `201 Created`

---

### 📋 Get Testimoni Bidan

**Endpoint:** `GET /bidan/{id}/testimonies`  
**Header:**
```
Authorization: Bearer <token>
```
**Response:** `200 OK`  
**Returns:** Daftar testimoni untuk bidan tersebut

---

## 📬 Contact Us

### Kirim Pesan

**Endpoint:** `POST /contact-us`  
**Header:**
```
Authorization: Bearer <token>
Content-Type: application/json
```
**Body:**
```json
{
  "name": "Nama User",
  "email": "user@email.com",
  "message": "Isi pesan"
}
```
**Response:** `201 Created`

---

## 📚 Artikel Edukasi

### 📰 Get Articles

**Endpoint:** `GET /articles?topic=stunting`  
**Header:**
```
Authorization: Bearer <token>
```
**Response:** `200 OK`  
**Returns:** Daftar artikel edukasi dari NewsAPI (topik bisa diganti)

---

> 🔐 Semua endpoint (kecuali `/register`, `/login`, dan `/`) membutuhkan header `Authorization: Bearer <token>`.  
> Untuk gambar bidan dan user, gunakan field `foto_url` pada response.

---

## 📝 Lisensi

Proyek ini dikembangkan untuk keperluan edukasi dalam program **Capstone Project - Dicoding Coding Camp 2025** dan tidak diperuntukkan untuk penggunaan medis profesional secara langsung tanpa supervisi.

---

## 🙌 Kontribusi

Kami terbuka terhadap pengembangan lanjutan dan kontribusi dari komunitas. Silakan fork repo ini dan ajukan pull request jika memiliki saran atau perbaikan.

