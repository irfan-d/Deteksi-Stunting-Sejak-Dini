import React, {useEffect, useState} from "react";
import { getArticle } from "../data/api";
import '/src/index.css';

export default function ArticlePage() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getArticle()
        .then(data => {
            setArticles(data);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }, []);

  return (
    <div className="bg-white pt-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="flex items-center gap-2 mb-2 mt-6">
          <span className="text-[var(--color-blue)] bg-[var(--color-grey)] px-2 py-1 rounded text-xs font-medium flex items-center">
            <svg className="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01.88 7.9A4.5 4.5 0 1112 6.5c.16 0 .32.01.48.02A4 4 0 0116 7z" /></svg>
            Blog
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Our Trending Artikel <span className="text-gray-300 font-normal">[{articles.length}]</span>
        </h1>
        <hr className="my-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-0 space-y-10">
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : (
          articles.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center gap-6  border-b-4 border-[var(--color-grey)] pb-8">
              <div className="flex-1 order-2 md:order-1">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01.88 7.9A4.5 4.5 0 1112 6.5c.16 0 .32.01.48.02A4 4 0 0116 7z" /></svg>
                  <span className="text-xs text-gray-500 font-medium">Blog</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline">Baca Selengkapnya</a>
              </div>
              <div className="order-1 md:order-2 md:w-1/3 flex-shrink-0">
                <img
                  src={item.urlToImage || "/artikel-1.jpg"}
                  alt="Artikel"
                  className="rounded-xl w-full h-44 md:h-36 object-cover"
                  onError={e => { e.target.src = "/artikel-1.jpg"; }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}