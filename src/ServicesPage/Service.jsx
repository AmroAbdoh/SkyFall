import SectionHeader from "../SectionHeader";
import { services as serviceData } from "./serviceData";
import {engineer} from "./engineeringData";
import { projectManegment } from "./projectManegmentData";
import "./Service.css";

function ServiceCard({ title, icon }) {
  return (
    <div className="service-card">
      <div className="img-container">
        <img src={icon} alt="icon" className="icon" />
      </div>
      <p>{title}</p>
    </div>
  );
}

const Category = ({ title, items }) => {
  return (
    <div className="category">
      <h2>{title}</h2>

      <div className="cards">
        {items.map((item, index) => (
          <ServiceCard key={index} title={item.title} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

function Service({type}) {
  let data;
  let SectionHeaderTitle ;
  let SectionHeaderDescription ;
  let SectionHeaderSubTitle ;

  switch (type) {
    case "engineering":
      data = engineer;
      SectionHeaderTitle = "Engineering";
      SectionHeaderDescription ="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
      SectionHeaderSubTitle = "Our engineering services include:"
      break;
    case "project":
      data = projectManegment;
      SectionHeaderTitle = "Project Management";
      SectionHeaderDescription ="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
      SectionHeaderSubTitle = "Our project management services include:"
      break;
    default:
      data = serviceData;
      SectionHeaderTitle = "Design";
      SectionHeaderDescription ="At Skyfall, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. "
      SectionHeaderSubTitle = "Our design services include:"

  }

  

  return (
    <div className="service-page">
      <SectionHeader
        title={SectionHeaderTitle}
        description={    SectionHeaderDescription      }
        subtitle={ SectionHeaderSubTitle }
      />

      <div className="services-container">
        {data.map((category, index) => (
          <Category key={index} title={category.title} items={category.items} />
        ))}
      </div>
    </div>
  );
}

export default Service;
