import React from "react";
import "./Body.css";

function Card({ title, imgSrc, semiTitle, url, desc }) {
  return (
    <div className="card">
      <section>{title}</section>
      <div className="card-container">
        <img src={imgSrc} alt={title} className="card-img" />
        <main className="card-contact">
          <div>
            <h3>{semiTitle}</h3>
            <a href="#" className="card-url">
              {url}
            </a>
          </div>
          <a className="card-icon" href="#">
            <img src="/images/Icon.svg" />
          </a>
        </main>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="main-work">
      <article className="body-title">
        <section className="body-title-intro">
          <h1>At SkyFall</h1>
          <p>
            We have had the privilege of working with a diverse range of clients
            and delivering exceptional digital products that drive success.
          </p>
        </section>

        <div>Here are examples of our notable works:</div>
      </article>
      <div className="cards-grid">
        <Card
          title="Web Portal For Real Estate Listings"
          imgSrc="/images/DreamHouseRealty.png"
          semiTitle="Dream House Realty"
          url="htttps:/www.dreamhomesrealty.com"
          desc="Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."
        />
        <Card
          title="Web Portal For Real Estate Listings"
          imgSrc="/images/DreamHouseRealty.png"
          semiTitle="Dream House Realty"
          url="htttps:/www.dreamhomesrealty.com"
          desc="Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."
        />
        <Card
          title="Web Portal For Real Estate Listings"
          imgSrc="/images/DreamHouseRealty.png"
          semiTitle="Dream House Realty"
          url="htttps:/www.dreamhomesrealty.com"
          desc="Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."
        />
        <Card
          title="Web Portal For Real Estate Listings"
          imgSrc="/images/DreamHouseRealty.png"
          semiTitle="Dream House Realty"
          url="htttps:/www.dreamhomesrealty.com"
          desc="Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."
        />
      </div>
    </div>
  );
}

export default Body;
