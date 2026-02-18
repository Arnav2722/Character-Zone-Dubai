import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Introduction",
    content:
      "Welcome to ToyHaven UAE. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our website.",
  },
  {
    title: "2. Products & Pricing",
    content:
      "All products displayed on our website are for showcase purposes. Prices are listed in UAE Dirhams (AED) and include applicable VAT. We reserve the right to update pricing without prior notice. Product availability is subject to stock levels. For the most accurate and up-to-date pricing and availability, please contact us directly via WhatsApp or our Contact Us page.",
  },
  {
    title: "3. Orders & Enquiries",
    content:
      "ToyHaven operates as a showcase platform. To place orders or make enquiries, customers are required to contact us through WhatsApp or our Contact Us page. We will respond to all enquiries within 24 hours during business days (Saturday to Thursday).",
  },
  {
    title: "4. Delivery",
    content:
      "We offer delivery services across all seven Emirates of the UAE. Delivery timelines and charges vary based on location and order size. Standard delivery within Dubai takes 1-3 business days. Deliveries to other Emirates may take 3-5 business days. Specific delivery terms will be communicated at the time of order confirmation.",
  },
  {
    title: "5. Returns & Exchanges",
    content:
      "We offer a 14-day return and exchange policy on all products, provided the item is unused, in its original packaging, and accompanied by proof of purchase. Defective products will be replaced at no additional cost. To initiate a return or exchange, please contact our customer service team via WhatsApp or email.",
  },
  {
    title: "6. Product Safety",
    content:
      "All products sold by ToyHaven comply with international safety standards including CE, ASTM, and EN71 certifications. Age recommendations are clearly marked on all products and should be followed for child safety. ToyHaven is not liable for misuse of products outside their intended age range or purpose.",
  },
  {
    title: "7. Intellectual Property",
    content:
      "All content on this website, including text, images, logos, and design elements, is the property of ToyHaven UAE and is protected under UAE intellectual property laws. Reproduction, distribution, or use of any content without written permission is strictly prohibited.",
  },
  {
    title: "8. Privacy & Data Protection",
    content:
      "We respect your privacy and are committed to protecting your personal information. Any data collected through our contact forms or communications is used solely for the purpose of responding to your enquiries and processing orders. We do not share your personal information with third parties without your consent, except as required by UAE law.",
  },
  {
    title: "9. Limitation of Liability",
    content:
      "ToyHaven shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our website or products. Our total liability for any claim shall not exceed the purchase price of the product in question.",
  },
  {
    title: "10. Governing Law",
    content:
      "These Terms and Conditions are governed by the laws of the United Arab Emirates. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.",
  },
  {
    title: "11. Changes to Terms",
    content:
      "ToyHaven reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of our website after any modifications constitutes acceptance of the updated terms.",
  },
  {
    title: "12. Contact Information",
    content:
      "If you have any questions about these Terms and Conditions, please contact us at info@toyhaven.ae or visit our Contact Us page. Our business hours are Saturday to Thursday, 9:00 AM to 9:00 PM (GST).",
  },
];

const TermsAndConditions = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: February 2026
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsAndConditions;