import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  cover_url: string;
  published_at: string;
}

export default function LatestArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("articles")
      .select("id, title, excerpt, cover_url, published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(3)
      .then(({ data }) => {
        if (data) setArticles(data);
        setLoading(false);
      });
  }, []);

  if (loading || articles.length === 0) return null;

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">最新动态</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">策略心得与行业洞察</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <a
            key={article.id}
            href={`/article.html?id=${article.id}`}
            className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
          >
            {article.cover_url && (
              <img src={article.cover_url} alt={article.title} className="w-full h-40 object-cover" />
            )}
            <div className="p-5">
              <h3 className="font-bold text-gray-800 group-hover:text-red-600 transition mb-2 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-3">{article.excerpt}</p>
              <p className="text-xs text-gray-400 mt-4">
                {new Date(article.published_at).toLocaleDateString()}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
