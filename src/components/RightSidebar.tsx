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
          // 静态示例数据（当数据库无文章时展示）
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
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-5 bg-red-100 text-red-500 rounded flex items-center justify-center text-[10px]"><i className="fas fa-bolt"></i></span>
          <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">最新文章</span>
        </div>
        <div className="space-y-0.5">
          {articles.map((article) => (
            <a
              key={article.id}
              href={`/article.html?id=${article.id}`}
              className="article-side-item flex flex-col py-2.5 group"
            >
              <span className="text-[10px] text-gray-400">
                {new Date(article.published_at).toLocaleDateString("zh-CN", { month: "2-digit", day: "2-digit" })}
              </span>
              <h4 className="text-sm text-gray-700 group-hover:text-red-600 transition line-clamp-1">{article.title}</h4>
              <p className="text-[11px] text-gray-400 line-clamp-1 mt-0.5">{article.excerpt}</p>
            </a>
          ))}
        </div>
        <a href="#" className="mt-2 text-[11px] text-red-500 font-medium hover:underline inline-flex items-center gap-1">
          阅读更多 <i className="fas fa-arrow-right text-[10px]"></i>
        </a>
      </div>

      {/* 联系卡片 */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-4">
        <h4 className="text-sm font-semibold text-gray-800 mb-3">联系我们</h4>
        <div className="space-y-2.5 text-xs text-gray-600">
          <div className="flex items-center gap-2"><i className="far fa-envelope text-red-400 w-3.5"></i>code@strategy.works</div>
          <div className="flex items-center gap-2"><i className="fab fa-weixin text-green-500 w-3.5"></i>quant_code</div>
          <div className="flex items-center gap-2"><i className="far fa-clock text-amber-500 w-3.5"></i>工作日 9:00-18:00</div>
        </div>
      </div>
    </div>
  );
}
