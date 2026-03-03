import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Send, Clock, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  message: z.string().min(10, "Please tell me a bit more about your project (at least 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@thevineet.com", href: "mailto:hello@thevineet.com" },
  { icon: Clock, label: "Availability", value: "Mon – Sat, 10 AM – 7 PM IST", href: null },
  { icon: MapPin, label: "Location", value: "India · Serving clients worldwide", href: null },
];

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "I'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeUp} className="section-label mx-auto">
              Get In Touch
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="section-title"
            >
              Let's build something <span className="text-gradient">great</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="section-desc mx-auto"
            >
              Have a project in mind? Fill out the form below and I'll get back to you within 24 hours with a free consultation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact Info Sidebar */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="card-elevated p-5 flex items-start gap-4"
                >
                  <div className="shrink-0 rounded-lg bg-primary/8 p-2.5">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 font-medium text-navy hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-medium text-navy">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} className="card-elevated p-6 bg-navy text-primary-foreground">
                <h3 className="font-display text-lg font-bold">Why work with me?</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    "10+ years of full-stack experience",
                    "Direct communication — no middlemen",
                    "NDA signed before we start",
                    "Post-launch support included",
                    "Transparent, fixed-price quotes",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="shrink-0 text-primary" />
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="lg:col-span-3"
            >
              <motion.div variants={fadeUp} className="card-elevated p-8 md:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto mb-5 inline-flex rounded-full bg-primary/10 p-5">
                      <CheckCircle2 size={36} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy">Thank you!</h3>
                    <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                      Your message has been received. I'll review your project details and get back to you within 24 hours.
                    </p>
                    <Link to="/" className="btn-primary mt-8 inline-flex">
                      Back to Home <ArrowRight size={16} />
                    </Link>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-navy font-semibold">
                                Full Name <span className="text-destructive">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-navy font-semibold">
                                Email <span className="text-destructive">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-navy font-semibold">Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 98765 43210" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-navy font-semibold">
                                Project Type <span className="text-destructive">*</span>
                              </FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="website-development">Website Development</SelectItem>
                                  <SelectItem value="wordpress-development">WordPress Development</SelectItem>
                                  <SelectItem value="laravel-development">Laravel Development</SelectItem>
                                  <SelectItem value="react-development">React.js Development</SelectItem>
                                  <SelectItem value="php-development">PHP Development</SelectItem>
                                  <SelectItem value="ai-integration">AI Integration</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy font-semibold">Budget Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                                <SelectItem value="50k-1l">₹50,000 – ₹1,00,000</SelectItem>
                                <SelectItem value="1l-3l">₹1,00,000 – ₹3,00,000</SelectItem>
                                <SelectItem value="3l-5l">₹3,00,000 – ₹5,00,000</SelectItem>
                                <SelectItem value="5l-plus">₹5,00,000+</SelectItem>
                                <SelectItem value="not-sure">Not sure yet</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy font-semibold">
                              Project Details <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell me about your project — goals, timeline, any specific requirements..."
                                className="min-h-[140px] resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="btn-primary w-full !rounded-xl border-0">
                        <Send size={16} />
                        Send Message
                      </Button>

                      <p className="text-center text-xs text-muted-foreground">
                        I typically respond within 24 hours. Your information is kept confidential.
                      </p>
                    </form>
                  </Form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
