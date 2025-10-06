import ContactForm from "@/components/modules/Contact/ContactForm";
import ShareBanner from "@/components/shared/ShareBanner";

const ContactPage = () => {
  return (
    <div className="">
       <ShareBanner title={"Contact Us"}></ShareBanner>
        <ContactForm></ContactForm>
    </div>
  );
};

export default ContactPage;
