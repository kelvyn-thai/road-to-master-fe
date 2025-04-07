import { ContactMeForm } from "@/modules/contact-me";
import { LandingLayout } from "@/modules/landing-layout";

function ContactMeSection() {
  return (
    <LandingLayout
      id="contact-me"
      className="bg-violet-700 h-screen scroll-mt-24"
      title="Contact me"
    >
      <ContactMeForm />
    </LandingLayout>
  );
}

export default ContactMeSection;
