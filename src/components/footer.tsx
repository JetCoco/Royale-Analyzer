
import { Crown, Github, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown size={24} className="text-accent" />
              <span className="font-bold text-lg">Royale Analyzer</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Analiza tu rendimiento en Clash Royale con estadísticas detalladas, análisis de mazos y insights de batallas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="/favorites" className="text-muted-foreground hover:text-primary transition-colors">Favoritos</Link></li>
              <li><Link href="/premium" className="text-muted-foreground hover:text-primary transition-colors">Premium</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API de Clash Royale</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Royale Analyzer. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">No está afiliado oficialmente con Supercell.</p>
        </div>
      </div>
    </footer>
  );
}
