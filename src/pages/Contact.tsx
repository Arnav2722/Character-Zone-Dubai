// import { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";
// import { db, isFirebaseConfigured } from "@/lib/firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { z } from "zod";

// const contactSchema = z.object({
//   name: z.string().trim().min(1, "Name is required").max(100),
//   email: z.string().trim().email("Please enter a valid email").max(255),
//   phone: z.string().trim().max(20).optional(),
//   subject: z.string().trim().min(1, "Subject is required").max(200),
//   message: z.string().trim().min(1, "Message is required").max(1000),
// });

// type ContactForm = z.infer<typeof contactSchema>;

// const contactInfo = [
//   { icon: MapPin, label: "Address", value: "Al Quoz Industrial Area, Dubai, UAE" },
//   { icon: Phone, label: "Phone", value: "+971 4 XXX XXXX" },
//   { icon: Mail, label: "Email", value: "info@toyhaven.ae" },
//   { icon: Clock, label: "Working Hours", value: "Sat-Thu: 9AM - 9PM" },
// ];

// const Contact = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
//   const [form, setForm] = useState<ContactForm>({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const updateField = (field: keyof ContactForm, value: string) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: undefined }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrors({});

//     const result = contactSchema.safeParse(form);
//     if (!result.success) {
//       const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
//       result.error.errors.forEach((err) => {
//         const field = err.path[0] as keyof ContactForm;
//         fieldErrors[field] = err.message;
//       });
//       setErrors(fieldErrors);
//       return;
//     }

//     if (!isFirebaseConfigured || !db) {
//       toast({
//         title: "Firebase not configured",
//         description:
//           "Please set up your Firebase configuration in src/lib/firebase.ts to enable the contact form.",
//         variant: "destructive",
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       await addDoc(collection(db, "contacts"), {
//         ...result.data,
//         createdAt: serverTimestamp(),
//         status: "new",
//       });

//       toast({
//         title: "Message sent! 🎉",
//         description: "Thank you for reaching out. We'll get back to you soon!",
//       });

//       setForm({ name: "", email: "", phone: "", subject: "", message: "" });
//     } catch (error) {
//       console.error("Failed to send message:", error);
//       toast({
//         title: "Failed to send",
//         description: "Something went wrong. Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="py-10 md:py-16">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-10 text-center"
//         >
//           <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
//             Contact Us
//           </h1>
//           <p className="mt-2 text-muted-foreground">
//             We'd love to hear from you! Reach out for any inquiries.
//           </p>
//         </motion.div>

//         <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-5">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//             className="space-y-6 md:col-span-2"
//           >
//             <div className="rounded-xl bg-primary/5 p-6">
//               <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
//                 Get in Touch
//               </h3>
//               <ul className="space-y-4">
//                 {contactInfo.map((item) => (
//                   <li key={item.label} className="flex items-start gap-3">
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
//                       <item.icon className="h-5 w-5 text-primary" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-foreground">
//                         {item.label}
//                       </p>
//                       <p className="text-sm text-muted-foreground">
//                         {item.value}
//                       </p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3 }}
//             className="md:col-span-3"
//           >
//             <form
//               onSubmit={handleSubmit}
//               className="rounded-xl border bg-card p-6 shadow-sm"
//             >
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Full Name *</Label>
//                   <Input
//                     id="name"
//                     placeholder="Your name"
//                     value={form.name}
//                     onChange={(e) => updateField("name", e.target.value)}
//                   />
//                   {errors.name && (
//                     <p className="text-xs text-destructive">{errors.name}</p>
//                   )}
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email *</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="your@email.com"
//                     value={form.email}
//                     onChange={(e) => updateField("email", e.target.value)}
//                   />
//                   {errors.email && (
//                     <p className="text-xs text-destructive">{errors.email}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-4 grid gap-4 sm:grid-cols-2">
//                 <div className="space-y-2">
//                   <Label htmlFor="phone">Phone (optional)</Label>
//                   <Input
//                     id="phone"
//                     placeholder="+971 XX XXX XXXX"
//                     value={form.phone}
//                     onChange={(e) => updateField("phone", e.target.value)}
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="subject">Subject *</Label>
//                   <Input
//                     id="subject"
//                     placeholder="How can we help?"
//                     value={form.subject}
//                     onChange={(e) => updateField("subject", e.target.value)}
//                   />
//                   {errors.subject && (
//                     <p className="text-xs text-destructive">{errors.subject}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-4 space-y-2">
//                 <Label htmlFor="message">Message *</Label>
//                 <Textarea
//                   id="message"
//                   placeholder="Tell us more about your inquiry..."
//                   rows={5}
//                   value={form.message}
//                   onChange={(e) => updateField("message", e.target.value)}
//                 />
//                 {errors.message && (
//                   <p className="text-xs text-destructive">{errors.message}</p>
//                 )}
//               </div>

//               <Button
//                 type="submit"
//                 className="mt-6 w-full"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   "Sending..."
//                 ) : (
//                   <>
//                     <Send className="mr-2 h-4 w-4" />
//                     Send Message
//                   </>
//                 )}
//               </Button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// src/pages/Contact.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="bg-red-500 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x600/FF0000/FFFFFF?text=Pattern')] opacity-10 bg-cover bg-center"></div>
        <h1 className="text-4xl font-black uppercase relative z-10">
          Contact Us
        </h1>
        <p className="text-lg mt-4 opacity-90 relative z-10">
          We'd love to hear from you!
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information & Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 uppercase mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question about a product, your order, or just want to say
                hi? Our team is here to help.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Visit Us</h3>
                    <p className="text-gray-600">
                      Colorland Toys HQ, <br />
                      123 Play Street, Dubai, UAE
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <p className="text-gray-600">+971 4 123 4567</p>
                    <p className="text-sm text-gray-500">
                      Mon - Sun, 10am - 10pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-gray-600">support@colorlandtoys.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
              <img
                src="https://placehold.co/800x400/E0E0E0/757575?text=Map+Location+Placeholder"
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-50 p-8 md:p-10 rounded-3xl border-2 border-blue-100 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900 uppercase mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-gray-700"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-gray-700"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-bold text-gray-700"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Order Inquiry"
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  className="bg-white h-32"
                />
              </div>
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
