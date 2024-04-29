import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import { is } from "date-fns/locale";
import GithubSlugger, { slug } from "github-slugger";
import NotFound from "../../not-found";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  const allCategories = ["all"]; // Initialize with 'all' category
  allBlogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
    });
  });

  if (allCategories.includes(params.slug)) {
    return {
      title: `${(
        params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
      ).replaceAll("-", " ")} Blogs`,
      description: `Tìm hiểu thêm về ${
        params.slug === "all" ? "web development" : params.slug
      } qua các bài viết chất lượng từ Devful Blog. Hãy khám phá ngay!`,
    };
  } else {
    return;
  }
}

const CategoryPage = ({ params }) => {
  // Separating logic to create list of categories from all blogs
  const allCategories = ["all"]; // Initialize with 'all' category
  allBlogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
    });
  });

  // Sort allCategories to ensure they are in alphabetical order
  allCategories.sort();

  const isCategoryExist = allCategories.includes(params.slug);

  // Step 2: Filter blogs based on the current category (params.slug)
  const blogs = allBlogs.filter((blog) => {
    if (params.slug === "all") {
      return true; // Include all blogs if 'all' category is selected
    }

    return blog.tags.some((tag) => slug(tag) === params.slug);
  });

  return (
    <>
      {isCategoryExist ? (
        <article className="mt-12 flex flex-col text-dark dark:text-light">
          <div className=" px-5 sm:px-10  md:px-24 sxl:px-32 flex flex-col">
            <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
              #{params.slug.charAt(0).toUpperCase() + params.slug.slice(1)}
            </h1>
            <span className="mt-2 inline-block">
              Khám phá những bài viết về{" "}
              {params.slug === "all"
                ? "web development"
                : params.slug.charAt(0).toUpperCase() +
                  params.slug.slice(1)}{" "}
              qua bộ sưu tập blog và hướng dẫn chuyên nghiệp của chúng tôi
            </span>
          </div>
          <Categories categories={allCategories} currentSlug={params.slug} />

          <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
            {blogs.map((blog, index) => (
              <article key={index} className="col-span-1 row-span-1 relative">
                <BlogLayoutThree blog={blog} />
              </article>
            ))}
          </div>
        </article>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default CategoryPage;
