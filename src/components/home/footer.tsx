import logo from "../../assets/img/icon.png";
import Chat from "../chat/chat";

function Footer() {
  return (
    <div>
        <Chat />
        <footer className="bg-gray-100 text-gray-600 py-6 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <img src={logo} alt="Logo Lumepic" className="h-6 w-6" />
            <a href="/">
              <span className="font-bold text-gray-800">PHOTO SPORT</span>
            </a>
          </div>
          <span className="mt-2 md:mt-0 text-sm">© 2025 Photo Sport</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center mt-6 space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
          <a href="/faq" className="hover:text-red-500">
            Preguntas Frecuentes
          </a>
          <a href="/terms" className="hover:text-red-500">
            Términos & Condiciones
          </a>
          <a href="/privacy" className="hover:text-red-500">
            Políticas de Privacidad
          </a>
          <a href="/contact" className="hover:text-red-500">
            Contacto
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
