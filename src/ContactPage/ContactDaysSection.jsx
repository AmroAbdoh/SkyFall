import "./ContactDaysSection.css";

function SocialMediaIcon({ iconPath, url, alt }) {
  return (
    <a
      className="social-icon"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={iconPath} alt={alt} />
    </a>
  );
}

function ContactDaysSection() {
  return (
    <section className="contact-ways">
      <div className="contact-ways-container">
        <div className="contact-days">
          <p>
            Operating Days <span>Monday to Friday</span>
          </p>
        </div>

        <div className="contact-social">
          <div className="social-wrapper">
            <p className="social-title">Stay Connected</p>
            <div className="social-icons">
              <SocialMediaIcon
                iconPath="/images/facebook.png"
                url="https://facebook.com"
                alt="Facebook"
              />

              <SocialMediaIcon
                iconPath="/images/x.png"
                url="https://x.com"
                alt="X"
              />

              <SocialMediaIcon
                iconPath="/images/linkedin.png"
                url="https://linkedin.com"
                alt="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDaysSection;
