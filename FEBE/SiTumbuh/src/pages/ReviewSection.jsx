import React, { useEffect, useState } from "react";
import { getTestimoniesByBidan, postTestimoni } from "../data/api";
import { useAuth } from "../utils/authContext";

export default function ReviewSection({ bidanId }) {
  const { isLoggedIn } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Ambil testimoni dari DB
  useEffect(() => {
    setLoading(true);
    getTestimoniesByBidan(bidanId)
      .then(setReviews)
      .catch(() => setReviews([]))
      .finally(() => setLoading(false));
  }, [bidanId]);

  // Submit testimoni baru
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!isLoggedIn) {
      setErrorMsg("Anda harus login untuk memberi testimoni.");
      return;
    }
    if (rating === 0 || review.trim() === "") {
      setErrorMsg("Rating dan isi testimoni wajib diisi.");
      return;
    }
    try {
      await postTestimoni({ bidan_id: bidanId, content: review, rating });
      setSuccess(true);
      setReview("");
      setRating(0);
      // Refresh list testimoni
      const updated = await getTestimoniesByBidan(bidanId);
      setReviews(updated);
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      setErrorMsg("Gagal mengirim testimoni.", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-blue)] mb-2">
        Penilaian
      </h2>
      <p className="text-[var(--color-darkgrey)] mb-6">
        Bagikan pengalaman Anda dengan bidan ini.
      </p>

      {/* Form Penilaian */}
      {isLoggedIn && (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg border-2 border-[var(--color-grey)] rounded-2xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-[var(--color-blue)] mb-1">Bagikan Pengalaman Anda</h3>
          <div className="flex items-center gap-2 mb-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                type="button"
                key={num}
                className={`text-xl transition-colors ${num <= rating ? 'text-[var(--color-yellow)]' : 'text-gray-300'}`}
                onClick={() => setRating(num)}
                aria-label={`Beri rating ${num}`}
              >
                ★
              </button>
            ))}
          </div>
          <textarea
            className="bg-[var(--color-grey)] w-full border-1 border-[var(--color-grey)] rounded-xl p-3 text-sm text-[var(--color-darkgrey)] resize-none h-16 mb-4"
            placeholder="Ketikkan pengalaman Anda"
            value={review}
            onChange={e => setReview(e.target.value)}
          />
          <div className="text-right">
            <button
              type="submit"
              className="bg-[var(--color-blue)] hover:bg-sky-600 text-white px-6 py-2 rounded-full text-sm"
              disabled={rating === 0 || review.trim() === ""}
            >
              Kirim
            </button>
          </div>
          {success && <div className="text-green-600 text-sm mt-2">Terima kasih atas ulasan Anda!</div>}
          {errorMsg && <div className="text-red-600 text-sm mt-2">{errorMsg}</div>}
        </form>
      )}

      {/* Daftar Review */}
      {loading ? (
        <div className="text-center py-6">Loading...</div>
      ) : reviews.length === 0 ? (
        <div className="text-center text-gray-400 py-6">Belum ada testimoni.</div>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl border-2 border-[var(--color-grey)] shadow-md p-4 mb-4">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-10 rounded-full bg-[var(--color-grey)] flex items-center justify-center font-bold text-[var(--color-blue)]">
                {review.user_id?.slice(0, 2).toUpperCase() || "U"}
              </div>
              <div>
                <p className="font-semibold">Pengguna</p>
                <p className="text-sm text-[var(--color-darkgrey)]">{new Date(review.created_at).toLocaleDateString("id-ID")}</p>
              </div>
              <div className="ml-auto text-[var(--color-yellow)] text-sm">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
            </div>
            <p className="text-sm text-black mb-2">{review.content}</p>
          </div>
        ))
      )}
    </div>
  );
}