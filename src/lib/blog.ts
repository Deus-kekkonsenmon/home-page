import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogDir = path.join(process.cwd(), "src/content/blog");

export const processMarkdownImages = (imgPath: string, content: string) => {
  // slug = slug.replace(/\/[^\/]*$/, "");
  // 記事のディレクトリパスを作成
  const basePath = `/blog/${imgPath}/`;
  console.log(basePath);

  // 画像のパスを Next.js で扱いやすい `/public` のパスに変換
  return content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, altText, imagePath) => {
    if (!imagePath.startsWith("http")) {
      return `![${altText}](${basePath}${imagePath})`;
    }
    return match;
  });
};

// 指定したディレクトリ内の Markdown ファイルを再帰的に取得
const getAllMarkdownFiles = (dir: string): string[] => {
  let results: string[] = [];
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      // フォルダなら再帰的に探索
      results = results.concat(getAllMarkdownFiles(fullPath));
    } else if (fullPath.endsWith(".md")) {
      // `.md` ファイルのみ追加
      results.push(fullPath);
    }
  });

  return results;
};

// 📌 ブログ一覧を取得（サムネイルを `public/blog/` に変換）
export const getBlogPosts = () => {
  const files = getAllMarkdownFiles(blogDir);

  return files.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    // 記事のパスから `slug` を作成
    const relativePath = path.relative(blogDir, filePath);
    const slug = relativePath.replace(/\.md$/, "").replace(/\\/g, "/");

    // サムネイルが相対パスの場合、記事のディレクトリパスを基準に変換
    const imgPath = slug.replace(/\/[^\/]*$/, "");
    const thumbnailPath = data.thumbnail?.startsWith("http")
      ? data.thumbnail
      : `/blog/${imgPath}/${data.thumbnail}`;

    return {
      slug,
      title: data.title,
      thumbnail: thumbnailPath,
      date: data.date,
    };
  });
};

// 📌 指定した `slug` の Markdown を取得（サムネイルも変換）
export const getBlogPost = async (slug: string) => {
  const filePath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error("Blog post not found");
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Markdown 内の画像パスを変換
  const imgPath = slug.replace(/\/[^\/]*$/, "");
  const processedContent = processMarkdownImages(imgPath, content);
  const processedHtml = await remark().use(html).process(processedContent);

  // サムネイルのパスも変換
  const thumbnailPath = data.thumbnail?.startsWith("http")
    ? data.thumbnail
    : `/blog/${imgPath}/${data.thumbnail}`;

  return {
    title: data.title,
    thumbnail: thumbnailPath,
    date: data.date,
    contentHtml: processedHtml.toString(),
  };
};