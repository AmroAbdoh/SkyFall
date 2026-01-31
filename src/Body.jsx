import { useState, useEffect, useRef, forwardRef } from "react";
import "./Body.css";
import cardsData from "./CardsData";

const Card = forwardRef(
  ({ title, imageUrl, subHeading, linkUrl, description }, ref) => (
    <div className="card" ref={ref}>
      <section>{title}</section>

      <div className="card-container">
        <img src={imageUrl} alt={title} className="card-img" />

        <main className="card-contact">
          <div>
            <h3>{subHeading}</h3>
            <a
              href={linkUrl}
              className="card-url"
              target="_blank"
              rel="noreferrer"
            >
              {linkUrl}
            </a>
          </div>

          <a
            className="card-icon"
            href={linkUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/Icon.svg" alt="visit" />
          </a>
        </main>

        <p>{description}</p>
      </div>
    </div>
  ),
);

function Body() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [page, setPage] = useState(0);
  const firstCardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let cardsPerRow;
  if (windowWidth <= 390) {
    cardsPerRow = 4;
  } else if (windowWidth <= 768) {
    cardsPerRow = 6;
  } else if (windowWidth <= 1200) {
    cardsPerRow = 8;
  } else {
    cardsPerRow = 10;
  }

  const BATCH_SIZE = cardsPerRow; // arrows move exactly one row

  const totalPages = Math.ceil(cardsData.length / BATCH_SIZE);

  const scrollToFirstCard = () => {
    if (!firstCardRef.current) return;

    const yOffset = -100; // height of header in px
    const y =
      firstCardRef.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const goToPage = (p) => {
    if (p < 0 || p >= totalPages) return;
    setPage(p);
    setTimeout(scrollToFirstCard, 0);
  };

  const getPages = () => {
    const pages = [];
    const current = page + 1; // human number
    const last = totalPages;

    if (current > 2) pages.push(1);
    if (current > 3) pages.push("...");

    if (current > 1) pages.push(current - 1);
    pages.push(current);
    if (current < last) pages.push(current + 1);

    if (current < last - 2) pages.push("...");
    if (current < last - 1) pages.push(last);

    return pages;
  };

  // const next = () => {
  //   if ((page + 1) * BATCH_SIZE < cardsData.length) {
  //     setPage(page + 1);
  //     setTimeout(scrollToFirstCard, 0);
  //   }
  // };

  // const prev = () => {
  //   if (page > 0) {
  //     setPage(page - 1);
  //     setTimeout(scrollToFirstCard, 0);
  //   }
  // };

  const visibleCards = cardsData.slice(
    page * BATCH_SIZE,
    page * BATCH_SIZE + BATCH_SIZE,
  );

  return (
    <>
      <div className="main-work">
        <article className="body-title">
          <section className="body-title-intro">
            <h1>At SkyFall</h1>
            <p>
              We have had the privilege of working with a diverse range of
              clients and delivering exceptional digital products that drive
              success.
            </p>
          </section>

          <div>Here are examples of our notable works:</div>
        </article>

        <div className="cards-grid">
          {visibleCards.map((card, i) => (
            <Card
              key={page * BATCH_SIZE + i}
              {...card}
              ref={i === 0 ? firstCardRef : null} // attach ref to first card
            />
          ))}
        </div>
      </div>

      <div className="cards-controls">
        {/* Previous */}
        {page > 0 && (
          <button onClick={() => goToPage(page - 1)} disabled={page === 0}>
            <img
              src="/images/icon-arrow-right.svg"
              className="arrow-control left"
            />
          </button>
        )}

        {/* Numbers */}
        {getPages().map((p, i) =>
          p === "..." ? (
            <span key={i} className="dots">
              <img src="/images/dots-3.svg"/>
              {/* … */}

            </span>
          ) : (
            <button
              key={i}
              className={`page-btn ${p === page + 1 ? "active" : ""}`}
              onClick={() => goToPage(p - 1)}
            >
              {p}
            </button>
          ),
        )}

        {/* Next */}
        {page < totalPages - 1 && (
          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages - 1}
          >
            <img src="/images/icon-arrow-right.svg" className="arrow-control" />
          </button>
        )}
      </div>
    </>
  );
}

export default Body;
