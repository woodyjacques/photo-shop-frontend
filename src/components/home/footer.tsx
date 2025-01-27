import logo from "../../assets/img/icon.png";
import Chat from "../chat/chat";

function Footer() {
  return (
    <div>
      <Chat />
      <footer className="bg-gray-500 text-gray-200 py-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Logo Photo Sport" className="h-6 w-6" />
              <span className="font-bold text-xl text-white">PhotoSport.org</span>
            </div>
            <p className="text-sm">
              Jiménez 313 Zona Centro, SLP, México, CP. 78000
            </p>
            <p className="mt-2 text-sm">📞 +52 (444) 244 5081</p>
            <p className="mt-2 text-sm">📸 Instagram: photo-sports</p>
            <p className="mt-2 text-sm">📘 Facebook: photo-sports</p>
          </div>

          <div>
            <h3 className="font-bold text-lg text-white mb-4">Instrucciones</h3>
            <ul className="space-y-2">
              <li>
                <a href="/photographers" className="hover:text-red-400">
                  Fotógrafos
                </a>
              </li>
              <li>
                <a href="/cooperative" className="hover:text-red-400">
                  Cooperativa
                </a>
              </li>
              <li>
                <a href="/values" className="hover:text-red-400">
                  Nuestros Valores
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg text-white mb-4">FAQ / Ayuda</h3>
            <ul className="space-y-2">
              <li>
                <a href="/how-to-find-photos" className="hover:text-red-400">
                  Cómo encontrar fotos
                </a>
              </li>
              <li>
                <a href="/payment-methods" className="hover:text-red-400">
                  Métodos de pago
                </a>
              </li>
              <li>
                <a href="/link-expiration" className="hover:text-red-400">
                  Expiración de enlaces
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg text-white mb-4">
              Únete como Fotógrafo
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/how-it-works" className="hover:text-red-400">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="/costs" className="hover:text-red-400">
                  Costos
                </a>
              </li>
              <li>
                <a href="/apply-now" className="hover:text-red-400">
                  Solicitar Ahora
                </a>
              </li>
              <li>
                <a href="/success-stories" className="hover:text-red-400">
                  Historias de Éxito
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-white">
          © 2025 Photo Sport | Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
