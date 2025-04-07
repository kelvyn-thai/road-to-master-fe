import { ContactMeForm } from "@/ui/contact-me";
import { LandingLayout } from "@/ui/landing-layout";

function ContactMeSection() {
  return (
    <LandingLayout
      id="contact-me"
      className="bg-violet-700 h-screen"
      title="Contact me"
    >
      <ContactMeForm />
    </LandingLayout>
  );
}

export default ContactMeSection;
