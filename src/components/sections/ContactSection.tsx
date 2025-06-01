import { Section } from "@/components/shared/Section";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";

export function ContactSection() {
  return (
    <Section id="contact" className="bg-secondary/30" style={{ animationDelay: '0.8s' }}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Contact Me</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind, a question, or just want to say hi? I&apos;d love to hear from you.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <ContactForm />
        <div className="mt-8 md:mt-0">
          <SocialLinks />
        </div>
      </div>
    </Section>
  );
}
