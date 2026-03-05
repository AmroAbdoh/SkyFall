import "./contactData.css"


function ContactCard({iconPath , description })
{
    return (
    <div className="contact-card">
        <img src={iconPath} alt={description} />
        <span>{description}</span>

    </div>
    
)
}

function ContactData() {
  return (
    <div className="contact-data">
        <ContactCard iconPath="./images/mail.png" description="a.alnjada@skyfall-enterprises.com"/>
        <ContactCard iconPath="./images/phone.png" description="+962 79 7016535"/>
        <ContactCard iconPath="./images/location.png" description="Amman, Jordan"/>
    
    </div>
  )
}

export default ContactData