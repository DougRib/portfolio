import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toasts";
import { useState } from "react";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Mensagem Enviada",
        description: "Obrigado por entrar em contato! Responderemos em breve.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-secondary/30 py-24 px-5">
      <div className="container mx-auto max-w-5xl py-24 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6 justify-center">
            <div className="flex items-start border border-primary rounded-lg p-3 space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="">
                <h4 className="font-medium">E-mail</h4>
                <a
                  href="mailto:douglas21pro@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  douglas21pro@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 border border-primary rounded-lg p-3">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="">
                <h4 className="font-medium">Telefone</h4>
                <a
                  href="tel:+5551984793631"
                  className="text-muted-foreground  hover:text-primary transition-colors duration-300"
                >
                  +55 51 984793631
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 border border-primary rounded-lg p-3">
              <div className="p-3 rounded-full  bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="">
                <h4 className="font-medium">Localização</h4>
                <a
                  href="https://www.google.com/maps/place/Porto+Alegre,+RS/@-30.034647,-51.217658,12z/data=!3m1!4b1!4m6!3m5!1s0x951995c8f8f8f8f9:0x9d9d9d9d9d9d9d9d!8m2!3d-30.034647!4d-51.217658!16zL20vMDJjN2Y"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Porto Alegre, RS, Brasil
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Conecte comigo </h4>
            <div className="flex space-x-4 justify-center">
              <a href="" target="_blank">
                <IconBrandLinkedin className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors duration-300" />
              </a>
              <a href="" target="_blank">
                <IconBrandInstagram className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors duration-300" />
              </a>
              <a href="" target="_blank">
                <IconBrandFacebook className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors duration-300" />
              </a>
              <a href="" target="_blank">
                <IconBrandYoutube className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="bg-gradient-to-br from-gray-700 p-8 shadow-[0_0_10px_#e76f51] rounded-lg "
          onClick={handleSubmit}
        >
          <h3 className="text-2xl font-semibold mb-6">Enviar Mensagem</h3>
          <form className="space-y-6">
            <div>
              <label className="text-md  font-medium mb-2" htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-background rounded-md border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div>
              <label className=" text-md font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-background rounded-md border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                placeholder="Digite seu email"
                required
              />
            </div>

            <div>
              <label className="text-md font-medium mb-2" htmlFor="message">
                Messagem
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full p-3 bg-background rounded-md border border-input resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                placeholder="Digite sua mensagem"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-btn w-full flex hover:bg-primary/90 transition-colors duration-300 items-center justify-center gap-2"
              )}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
