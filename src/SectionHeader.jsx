import "./SectionHeader.css";

function SectionHeader({ title, description, subtitle }) {
  return (
    <article className="body-title">
      <section className="body-title-intro">
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      <div>{subtitle}</div>
    </article>
  );
}

export default SectionHeader;
