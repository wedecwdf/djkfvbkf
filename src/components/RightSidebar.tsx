import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  published_at: string;
}

export default function RightSidebar() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    supabase
      .from("articles")
      .select("id, title, excerpt, published_at")
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(3)
      .then(({ data }) => {
        if (data && data.length > 0) {
          setArticles(data);
        } else {
          setArticles([
            { id: "demo-1", title: "劳动，一切幸福的源泉", excerpt: "从城市街巷到田间沃野，我们的根扎在劳动人民之中。", published_at: "2026-05-03" },
            { id: "demo-2", title: "双均线策略的优化思路", excerpt: "均线交叉经典策略，如何避免震荡行情中的反复止损？", published_at: "2026-04-28" },
            { id: "demo-3", title: "量化交易入门：从零开始搭建策略", excerpt: "无需深厚编程基础，跟着本文完成一个简单的均线策略。", published_at: "2026-04-20" },
          ]);
        }
      });
  }, []);

  return (
    <div className="space-y-5">
      {/* 最新文章卡片 */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
          <span className="w-6 h-6 bg-red-100 text-red-600 rounded-lg flex items-center justify-center text-xs">
            ⚡
          </span>
          <span className="text-base font-bold text-gray-800">最新文章</span>
        </div>
        <div className="space-y-0.5">
          {articles.map((article) => (
            <a
              key={article.id}
              href={`/article.html?id=${article.id}`}
              className="article-side-item flex flex-col py-2.5 group cursor-pointer"
            >
              <span className="text-[10px] text-gray-400">
                {new Date(article.published_at).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" })}
              </span>
              <h4 className="text-sm text-gray-700 group-hover:text-red-600 transition mt-0.5 line-clamp-1">
                {article.title}
              </h4>
              <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{article.excerpt}</p>
            </a>
          ))}
        </div>
        <a href="#" className="mt-3 text-xs text-red-500 font-medium hover:underline inline-flex items-center gap-1">
          阅读更多 <i className="fas fa-arrow-right text-[10px]"></i>
        </a>
      </div>

      {/* 联系卡片 */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-5">
        <h4 className="text-base font-bold text-gray-800 mb-3 pb-3 border-b border-gray-100">联系我们</h4>
        <div className="space-y-2.5 text-sm text-gray-600">
          <div className="flex items-center gap-2"><i className="far fa-envelope text-red-500 w-4"></i>code@strategy.works</div>
          <div className="flex items-center gap-2"><i className="fab fa-weixin text-green-500 w-4"></i>quant_code</div>
          <div className="flex items-center gap-2"><i className="far fa-clock text-amber-500 w-4"></i>工作日 9:00-18:00</div>
        </div>
      </div>
    </div>
  );
}


