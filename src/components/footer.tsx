/* eslint-disable @next/next/no-img-element */

export function Footer() {
  return (
    <footer className="w-full bg-neutral-900 py-8 px-4 text-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          {/* Logo del artista */}
          <img
            src="/vaquero.svg"
            alt="Logo del Artista"
            className="w-16 h-16 max-md:mx-auto mb-2 md:mb-0 md:mr-4 rounded-full"
          />
          <p className="text-sm flex whitespace-nowrap max-sm:flex-col items-center justify-center md:justify-start">
            Sígueme en:
            <span className="ml-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@joserafaellopezosto8627"
                className="text-blue-500 hover:underline flex items-center"
              >
                El Rondoneño
              </a>
            </span>
            <span className="ml-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100063642931231&ref=bookmarks&paipv=0&eav=Afbjq1kp2k5fzYRMLwLGHEB2KLEFo-cEyEAaBjKjz1bey66a3RvY6Q_JyGWQJaXLFHM"
                className="text-blue-500 hover:underline flex items-center"
              >
                Joropo Llano Y Leyenda
              </a>
            </span>
            {/* Agrega más redes sociales según sea necesario */}
          </p>
          <p className="text-sm mt-2">
            Página creada por{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linktr.ee/jefferson_lopez_dev"
              className="text-blue-500 hover:underline"
            >
              Jefferson Lopez
            </a>
          </p>
        </div>
        <div className="text-sm pt-5 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Jose Rafael Lopez Osto</p>
          <p className="mt-2">Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
