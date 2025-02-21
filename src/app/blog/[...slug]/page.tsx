import { getBlogPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";

const BlogDetailPage = async ({ params }: { params: { slug: string[] } }) => {
  if (!params.slug) return notFound();

  const slug = decodeURIComponent(params.slug.join("/")); // URL のパラメータを結合
  let post;

  try {
    post = await getBlogPost(slug);
  } catch (error) {
    return notFound();
  }

  return (
    <article className="py-12 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-4">{post.date}</p>
        <Image src={post.thumbnail} alt={post.title} width={800} height={400} className="rounded-lg object-cover" />
        <div className="prose max-w-none mt-6 text-gray-800" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </div>
    </article>
  );
};

export default BlogDetailPage;