import React from "react";
import "./infoSection.css";

function InfoSection({
  title,
  paragraph,
  paragraphTitle = null,
  imageUrl = null,
}) {
  return (
    <section className="info-section">
      <h1 className="info-title">{title}</h1>

      <div className="info-content">
        <div className={`info-text ${paragraphTitle ? "has-title" : ""}`}>
          {paragraphTitle && (
            <>
              <h3 className="info-content-title">{paragraphTitle}</h3>
              
              <hr class="divider" />
            </>
          )}

          <p>{paragraph}</p>
        </div>

        {imageUrl && <img src={imageUrl} alt={title} />}
      </div>
    </section>
  );
}

export default InfoSection;
