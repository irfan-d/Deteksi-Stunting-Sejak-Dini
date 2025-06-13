import '/src/index.css';
import React, { useRef, useState, useEffect } from 'react';
import person1 from '../assets/person-1.svg';
import EditPicture from '../assets/edit-picture.svg';
import { useNavigate } from 'react-router-dom';
import { getProfile, getAddress, updateProfile, updateAddress, addAddress } from '../data/api';

export default function EditProfilUser() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState(null);
  const [form, setForm] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showSaved, setShowSaved] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [formAddress, setFormAddress] = useState({
    country: "",
    province: "",
    regency_city: "",
    subdistrict: "",
    village: "",
    street_name: "",
    house_number: "",
    postal_code: "",
  });

  useEffect(() => {
    Promise.all([
      getProfile().then(res => {
        const profile = res.profile || res;
        setUser(profile);
        setForm({
          full_name: profile.full_name || "",
          email: profile.email || "",
          gender: profile.gender,
          birth_date: profile.birth_date || "",
          job: profile.job || "",
          phone_number: profile.phone_number || "",
        });
      }),
      getAddress().then(res => {
        const addr = res.address || res;
        setAddress(addr);
        setFormAddress(f => ({
          ...f,
          country: addr?.country || "",
          province: addr?.province || "",
          regency_city: addr?.regency_city || "",
          subdistrict: addr?.subdistrict || "",
          village: addr?.village || "",
          street_name: addr?.street_name || "",
          house_number: addr?.house_number || "",
          postal_code: addr?.postal_code || "",
        }));
      }),
    ]).finally(() => setLoading(false));
  }, []);

  function handleEdit(e) {
    e.preventDefault();
    const addressData = {
      ...formAddress,
      user_id: user?.user_id,
    };  
    const addressPromise = address && address.country
      ? updateAddress(addressData)
      : addAddress(addressData);

    Promise.all([
      updateProfile(form),
      addressPromise
    ])
      .then(() => {
        setShowSaved(true);
        setTimeout(() => setShowSaved(false), 2000);
      })
      .catch(() => alert("Gagal update data!"));
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  }

  function handleEditPictureClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  function handleAddressChange(e) {
    const { name, value } = e.target;
    setFormAddress(f => ({ ...f, [name]: value }));
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 pt-32 pb-20">
      <h2 className="text-center text-[var(--color-blue)] text-2xl font-semibold mb-6">Edit Profil Pengguna</h2>
        {/* Foto Profil */}
        <div className="flex flex-col items-center py-10 justify-center mb-6 gap-4">
        <div className="w-32 h-32 rounded-full bg-[var(--color-grey)] overflow-hidden relative group">
              <img
                src={previewUrl || person1}
                alt="Foto Profil"
                className="w-32 h-32 rounded-full object-cover"
              />
              <label
                htmlFor="profile-image-upload"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={handleEditPictureClick}
              >
                <img src={EditPicture} className="h-8" alt="Edit" />
              </label>
              <input
                id="profile-image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageChange}
              />
        </div>
        <span className="text-sm text-[var(--color-darkgrey)] pt-4">Klik untuk mengubah foto profil</span>
      </div>

      <form className="space-y-8 pb-24" onSubmit={handleEdit}>
            {/* Data Diri */}
            <div>
              <h3 className="text-[var(--color-blue)] font-semibold text-lg mb-4">Data Diri</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  placeholder="Nama Lengkap"
                  className="w-full p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="Email"
                  className="w-full p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]"
                  disabled
                />

                {/* Jenis Kelamin */}
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      checked={form.gender === true}
                      onChange={() => setForm(f => ({ ...f, gender: true }))}
                      className="accent-[var(--color-blue)]"
                    />
                    <span>Laki-Laki</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      checked={form.gender === false}
                      onChange={() => setForm(f => ({ ...f, gender: false }))}
                      className="accent-[var(--color-blue)]"
                    />
                    <span>Perempuan</span>
                  </label>
                </div>

                <input
                  type="date"
                  name="birth_date"
                  value={form.birth_date}
                  onChange={handleChange}
                  placeholder="Tanggal Lahir"
                  className="w-full p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]"
                />
                <input
                  type="text"
                  name="job"
                  value={form.job}
                  onChange={handleChange}
                  placeholder="Pekerjaan"
                  className="w-full p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]"
                />
                <input
                  type="text"
                  name="phone_number"
                  value={form.phone_number}
                  onChange={handleChange}
                  placeholder="No. Telepon"
                  className="w-full p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]"
                />
              </div>
            </div>

            {/* Alamat */}
            <div>
              <h3 className="text-[var(--color-blue)] font-semibold text-lg mb-4">Alamat</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="country"
                  value={formAddress.country}
                  onChange={handleAddressChange}
                  placeholder="Negara"
                  className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]"
                />
                <input
                  type="text"
                  name="province"
                  value={formAddress.province}
                  onChange={handleAddressChange}
                  placeholder="Provinsi"
                  className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]"
                />
                <input
                  type="text"
                  name="regency_city"
                  value={formAddress.regency_city}
                  onChange={handleAddressChange}
                  placeholder="Kabupaten/Kota"
                  className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]"
                />
                <input
                  type="text"
                  name="subdistrict"
                  value={formAddress.subdistrict}
                  onChange={handleAddressChange}
                  placeholder="Kecamatan"
                  className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]"
                />
                <input
                  type="text"
                  name="village"
                  value={formAddress.village}
                  onChange={handleAddressChange}
                  placeholder="Desa"
                  className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]"
                />
                <input
                  type="text"
                  name="street_name"
                  value={formAddress.street_name}
                  onChange={handleAddressChange}
                  placeholder="Jalan"
                  className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]"
                />
                <input
                  type="text"
                  name="house_number"
                  value={formAddress.house_number}
                  onChange={handleAddressChange}
                  placeholder="Nomor"
                  className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]"
                />
                <input
                  type="text"
                  name="postal_code"
                  value={formAddress.postal_code}
                  onChange={handleAddressChange}
                  placeholder="Kode Pos"
                  className="p-3 rounded-md bg-white outline-none text-black border-2 border-[var(--color-grey)]"
                />
              </div>
            </div>

            {/* Tombol Ubah */}
            <div className="text-center">
              <button type="submit" className="bg-[var(--color-blue)] text-white px-6 py-2 rounded-md hover:bg-sky-500 transition">
                Simpan
              </button>
              {showSaved && (
                <div className="mt-4 text-green-600 font-semibold">Data telah tersimpan</div>
              )}
            </div>
      </form>
    </div>
  );
}