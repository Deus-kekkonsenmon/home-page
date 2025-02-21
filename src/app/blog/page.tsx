import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/blog";

const BlogListPage = () => {
  const posts = getBlogPosts();

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">ブログ一覧</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="bg-white rounded-lg shadow-md p-6 flex items-center gap-6">
              <Image src={post.thumbnail} alt={post.title} width={100} height={100} className="rounded-lg object-cover" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
                <p className="text-gray-500 text-sm">{post.date}</p>
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline mt-2 block">
                  記事を読む →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogListPage;