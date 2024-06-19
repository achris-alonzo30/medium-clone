import "./Articles.scss"

export const Articles = () => {
  return (
    <section className="articles">
      <h2 className="articles__heading">More Articles</h2>
      <article className="articles__card">
        <aside className="articles__card--post">
          <div className="articles__card--imagewrapper">
            <img
              src="/images/bg-placeholder.jpg"
              alt="Blog Image"
              className="articles__card--image"
            />
          </div>
          <hgroup className="articles__card--details">
            <h2 className="articles__card--title">
              Learn How to Pre-render Pages Using Static Generation with Next.js
            </h2>
            <date className="articles__card--date">March 16, 2020</date>
            <p className="articles__card--description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Praesent elementum facilisis leo vel fringilla est ullamcorper
              eget. At imperdiet dui accumsan sit amet nulla facilities morbi
              tempus.
            </p>
            <p className="articles__card--author">Tim Neutkens</p>
          </hgroup>
        </aside>
        <aside className="articles__card--post">
          <div className="articles__card--imagewrapper">
            <img
              src="/images/bg-placeholder.jpg"
              alt="Blog Image"
              className="articles__card--image"
            />
          </div>
          <hgroup className="articles__card--details">
            <h2 className="articles__card--title">
              Learn How to Pre-render Pages Using Static Generation with Next.js
            </h2>
            <date className="articles__card--date">March 16, 2020</date>
            <p className="articles__card--description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Praesent elementum facilisis leo vel fringilla est ullamcorper
              eget. At imperdiet dui accumsan sit amet nulla facilities morbi
              tempus.
            </p>
            <p className="articles__card--author">Tim Neutkens</p>
          </hgroup>
        </aside>
      </article>
    </section>
  );
};
