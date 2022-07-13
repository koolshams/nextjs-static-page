import { useRouter } from "next/router";
import { useMemo } from "react";
import Layout from "../../components/layout";
import projects from "../../content/projects";

const Project = () => {
  const router = useRouter();
  const { pid } = router.query;
  const p = useMemo(() => projects.find((p) => p.id === pid) || projects[0], [pid]);
  return (
    <Layout>
      <article className="blog-post">
        <h2 className="blog-post-title">{p.title}</h2>
        <p>&nbsp;</p>
        <p>
          Repository:{" "}
          <a href={p.repo} rel="noreferrer" target="_blank">
            {p.repo}
          </a>
        </p>
        {p.link ? (
          <p>
            Link to demo:{" "}
            <a href={p.link} rel="noreferrer" target="_blank">
              {p.link}
            </a>
          </p>
        ) : undefined}
        {p.description.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </article>
    </Layout>
  );
};

export default Project;

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => ({
      params: {
        pid: p.id,
      },
    })),
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
