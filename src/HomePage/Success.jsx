import "./Success.css";
import Hero from "../Hero";

function SuccessMessage({
  title,
  description,
  authorName,
  authorImageSource,
  authorDescription,
}) {
  return (
    <div className="success-message">
      <header>
        <h2>{title}</h2>

        <p>{description}</p>
      </header>

      <footer>
        <div className="author">
          <figure>
            <img src={authorImageSource} />
          </figure>

          <div className="author-name">
            <h3>{authorName}</h3>
            <div>{authorDescription}</div>
          </div>
        </div>

        <div className="open-website">Open Website</div>
      </footer>
    </div>
  );
}

function Success() {
  return (
    <div className="success-container">
      <Hero
        title="Wall of Success"
        description="What our Clients says About us"
        image="/images/services-cta.jpg"
        showButton={false}
        isSpaceUp={false}

      />
      <div className="success">
        <SuccessMessage
          title="SquareUp has been Instrumental in Transforming our Online Presence. "
          description="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier."
          authorName="John Smith"
          authorImageSource="/images/JohnSmith.jpg"
          authorDescription="CEO of Chic Boutique"
        />
        <SuccessMessage
          title="SquareUp has been Instrumental in Transforming our Online Presence. "
          description="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier."
          authorName="John Smith"
          authorImageSource="/images/JohnSmith.jpg"
          authorDescription="CEO of Chic Boutique"
        />
        <SuccessMessage
          title="SquareUp has been Instrumental in Transforming our Online Presence. "
          description="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier."
          authorName="John Smith"
          authorImageSource="/images/JohnSmith.jpg"
          authorDescription="CEO of Chic Boutique"
        />
        <SuccessMessage
          title="SquareUp has been Instrumental in Transforming our Online Presence. "
          description="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier."
          authorName="John Smith"
          authorImageSource="/images/JohnSmith.jpg"
          authorDescription="CEO of Chic Boutique"
        />
        <SuccessMessage
          title="SquareUp has been Instrumental in Transforming our Online Presence. "
          description="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier."
          authorName="John Smith"
          authorImageSource="/images/JohnSmith.jpg"
          authorDescription="CEO of Chic Boutique"
        />
        <SuccessMessage
          title="SquareUp has been Instrumental in Transforming our Online Presence. "
          description="Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier."
          authorName="John Smith"
          authorImageSource="/images/JohnSmith.jpg"
          authorDescription="CEO of Chic Boutique"
        />
      </div>
    </div>
  );
}

export default Success;
