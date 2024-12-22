import { Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { FaFacebook } from "react-icons/fa";
import { supabase } from "@/integrations/supabase/client";
import { useRef } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const submissionData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([submissionData]);

      if (error) {
        console.error('Error submitting form:', error);
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Message envoyé !",
        description: "Nous vous contacterons dès que possible.",
      });

      // Reset form using the ref
      formRef.current?.reset();
      
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-secondary" id="contact">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Contactez-nous</h2>
        <div className="max-w-2xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Envoyer le Message
            </button>
          </form>
          <div className="mt-12 space-y-4">
            <a
              href="https://www.facebook.com/profile.php?id=61561664091591"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-primary transition-colors"
            >
              <FaFacebook className="w-6 h-6" />
              <span>Suivez-nous sur Facebook</span>
            </a>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <span>034 63 268 16</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};