import "./HeroBlog.scss";

export const HeroBlog = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">Blog.</h1>

      <article className="hero__article">
        <aside className="hero__article--boundary">
          <img src="/images/bg-placeholder.jpg" alt="Blog Image" className="hero__article--image" />
        </aside>
        <aside className="hero__article--details">
          <hgroup className="hero__article--left">
            <h2 className="hero__article--title">Static Routing and Static Generation</h2>
            <date className="hero__article--data">March 16, 2020</date>
          </hgroup>
          <hgroup className="hero__article--right">
            <p className="hero__article--description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Praesent elementum facilisis leo vel fringilla est ullamcorper
              eget. At imperdiet dui accumsan sit amet nulla facilities morbi
              tempus.
            </p>
            <p className="hero__article--author">JJ Kasper</p>
          </hgroup>
        </aside>
      </article>
    </section>
  );
};
