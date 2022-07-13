import Head from "next/head";
import Link from "next/link";
import { Fragment, useCallback, useState } from "react";
import {
  Col,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import projects from "../content/projects";

export default function Layout({ children }) {
  const [isOpen, setOpen] = useState(false);
  const onNavClick = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen, setOpen]);
  return (
    <Fragment>
      <Head>
        <title>KoolShams - My Space</title>
        <meta name="description" content="Some works by koolshams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">KoolShams</NavbarBrand>
          <NavbarToggler onClick={onNavClick} />
          <Collapse navbar isOpen={isOpen}>
            <Nav className="me-auto" navbar></Nav>
            <NavLink
              href="https://github.com/koolshams"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </NavLink>
            <NavLink
              href="https://www.linkedin.com/in/shamseerss/"
              target="_blank"
              rel="noreferrer"
            >
              Linked In
            </NavLink>
          </Collapse>
        </Navbar>
        <p>&nbsp;</p>
        <Row>
          <Col md={8}>{children}</Col>
          <Col md={4}>
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="fst-italic">About</h4>
              <p className="mb-0">
                I am shamseer from Almere, The Netherlands, Please see my page
                containing my experiments with various frameworks/libraries
              </p>
            </div>
            <div className="p-4">
              <h4 className="fst-italic">Projects</h4>
              <ol className="list-unstyled mb-0">
                {projects.map((p) => (
                  <li key={p.id}>
                    <Link href={`/projects/${p.id}`} passHref={true}>
                      <a href="#">{p.title}</a>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </Col>
        </Row>
      </Container>

      <footer className="blog-footer">
        <p>
          Blog template built for{" "}
          <a target="_blank" rel="noreferrer" href="https://getbootstrap.com/">
            Bootstrap
          </a>{" "}
          by{" "}
          <a target="_blank" rel="noreferrer" href="https://twitter.com/mdo">
            @mdo
          </a>{" "}
          and{" "}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            NEXT.js
          </a>
          .
        </p>
        <p>
          <a target="_blank" rel="noreferrer" href="#">
            Back to top
          </a>
        </p>
      </footer>
    </Fragment>
  );
}
