import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Replace with your UAE WhatsApp number (without + or spaces)
  const whatsappNumber = "971XXXXXXXXX";
  const message = encodeURIComponent(
    "Hello Characters Zone! I'd like to know more about your products."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
