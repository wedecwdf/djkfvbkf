import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  published_at: string;
}

export default function LatestArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("articles")
      .select("id, title, excerpt, published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(5)
      .then(({ data }) => {
        if (data) setArticles(data);
        setLoading(false);
      });
  }, []);

  if (loading || articles.length === 0) return null;

  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 h-6 bg-red-100 text-red-600 rounded-lg flex items-center justify-center text-xs">
            <i className="fas fa-bolt"></i>
          </span>
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">最新动态</span>
        </div>
        <h2 className="text-3xl text-gray-800">策略心得与行业洞察</h2>
        <p className="text-gray-500 text-sm mt-1">分享量化交易知识，提升策略思维</p>
      </div>

      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.id} className="timeline-item">
            <span className="text-xs text-gray-400 block mb-1">
              <i className="far fa-calendar mr-1"></i>
              {new Date(article.published_at).toLocaleDateString()}
            </span>
            <a href={`/article.html?id=${article.id}`} className="article-link group block">
              <h3 className="text-lg text-gray-800 group-hover:text-red-600 transition-colors mb-1 line-clamp-1">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>
            </a>
          </div>
        ))}
      </div>

      {articles.length >= 5 && (
        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-red-600 text-sm hover:text-red-700 transition">
            查看更多文章 <i className="fas fa-arrow-right text-xs"></i>
          </a>
        </div>
      )}
    </section>
  );
}
