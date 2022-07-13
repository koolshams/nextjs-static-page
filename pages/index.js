import Link from "next/link";
import { Fragment, useCallback, useState } from "react";
import Layout from "../components/layout";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const onNavClick = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen, setOpen]);
  return (
    <Layout>
      <article className="blog-post">
        <h2 className="blog-post-title">Welcome</h2>
        <p>&nbsp;</p>
        <p>
          Welcome to my page. I have been expermeting with different programming languages and frameworks. 
          I would like to call me as a front-end developer. 
        </p>
        <p>So far i worked with HTML, CSS, JS, PHP, JAVA, JSP, Node.js, Python, .NetCore and Typescript.</p>
      </article>
    </Layout>
  );
}
