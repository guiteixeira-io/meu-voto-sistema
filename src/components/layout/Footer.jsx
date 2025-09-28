import { Link } from "react-router-dom";
import { Vote, Github, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Plataforma",
      links: [
        { name: "Como Funciona", href: "/como-funciona" },
        { name: "Modo Fiscalização", href: "/fiscalizacao" },
        { name: "Modo Eleição", href: "/eleicoes" },
        { name: "Sobre Nós", href: "/sobre" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { name: "Central de Ajuda", href: "/ajuda" },
        { name: "FAQ", href: "/faq" },
        { name: "Blog", href: "/blog" },
        { name: "API", href: "/api" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Política de Privacidade", href: "/privacidade" },
        { name: "Termos de Uso", href: "/termos" },
        { name: "Transparência", href: "/transparencia" },
        { name: "Código de Conduta", href: "/codigo-conduta" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/votosocial", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://instagram.com/votosocial",
      label: "Instagram",
    },
    { icon: Github, href: "https://github.com/votosocial", label: "GitHub" },
    { icon: Mail, href: "mailto:contato@voto.social.br", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Vote className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Voto</span>
                <span className="text-xl font-bold text-primary-400">
                  Social
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Conectando cidadania ativa com decisões eleitorais conscientes.
              Fiscalize, avalie e vote com conhecimento.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links de Navegação */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Linha de Separação */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Voto Social. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Feito com ❤️ para uma democracia mais participativa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
