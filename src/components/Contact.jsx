import { Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toasts";
import { useState } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Mensagem Enviada",
        description: "Obrigado por entrar em contato! Responderemos em breve.",
        duration: 2000,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-secondary/30 py-16 px-4">
      <div className="container mx-auto max-w-5xl py-10 px-4">
        <h2 className="text-3xl md:text-4xl p-5 gradient-text bg-clip-text text-transparent mb-5 text-center opacity-0 animate-fade-in-delay-1">
          Entre em Contato
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-center opacity-0 animate-fade-in-delay-2">
          Estou sempre aberto a discutir novos projetos, ideias criativas ou
          oportunidades de fazer parte da sua visão.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto opacity-0 animate-fade-in-delay-3">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">
            Informações de Contato
          </h3>

          <div className="space-y-5 justify-center">
            <div className="flex items-start rounded-xl border-1 border-primary  p-3 space-x-4">
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

            <div className="flex items-start space-x-4 rounded-xl border-1 border-primary p-3">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="">
                <h4 className="font-medium">Contato</h4>
                <a
                  href="https://wa.me/5551984793631?text=Olá%20Douglas,%20gostaria%20de%20falar%20com%20você!"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 rounded-xl border-1 border-primary  p-3">
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
              <a
                href="https://www.linkedin.com/in/douglasribeiro21"
                target="_blank"
              >
                <IconBrandLinkedin className="h-8 w-8 text-muted-foreground hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a
                href="https://www.instagram.com/douglas_ribeiro_21/"
                target="_blank"
              >
                <IconBrandInstagram className="h-8 w-8 text-muted-foreground hover:text-pink-500 transition-colors duration-300" />
              </a>
              <a
                href="https://www.facebook.com/douglas.ribeiro.853028"
                target="_blank"
              >
                <IconBrandFacebook className="h-8 w-8 text-muted-foreground hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a href="" target="_blank">
                <IconBrandYoutube className="h-8 w-8 text-muted-foreground hover:text-red-500 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-700 p-8 shadow-[0_0_10px_#bd2600] rounded-lg ">
          <h3 className="text-2xl font-semibold mb-6">Enviar Mensagem</h3>
          <form className="space-y-6 text-left" onSubmit={handleSubmit}>
            <div>
              <label className="text-md font-medium mb-2 ml-1" htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-3 bg-background rounded-md border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className=" text-md font-medium mb-2 ml-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-3 bg-background rounded-md border border-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label
                className="text-md font-medium mb-2 ml-1"
                htmlFor="message"
              >
                Messagem
              </label>
              <textarea
                name="message"
                rows="6"
                className="w-full p-3 bg-background rounded-md border border-input resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                placeholder="Digite sua mensagem"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "cosmic-btn w-full flex hover:bg-primary/90 img-effect transition-all duration-400 items-center justify-center gap-2"
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
