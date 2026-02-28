import { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
  isActive?: boolean;
  submenu?: { label: string; href: string }[];
}

interface NavItemProps {
  item: MenuItem;
}

function NavItem({ item }: NavItemProps) {
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <div className="relative group">
      <a
        className={`text-sm font-medium transition-colors tracking-wider ${
          item.isActive
            ? "font-semibold text-primary hover:text-blue-700"
            : "text-slate-500 hover:text-primary"
        }`}
        href={item.href}
      >
        {item.label}
        {hasSubmenu && <span className="ml-1 text-xs">▾</span>}
      </a>

      {hasSubmenu && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="py-2">
            {item.submenu!.map((subitem, index) => (
              <a
                key={index}
                href={subitem.href}
                className="block px-6 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
              >
                {subitem.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface MobileNavItemProps {
  item: MenuItem;
  onClose: () => void;
}

function MobileNavItem({ item, onClose }: MobileNavItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <div className="border-b border-slate-100">
      {hasSubmenu ? (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors ${
              item.isActive
                ? "font-semibold text-primary"
                : "font-medium text-slate-700"
            }`}
          >
            {item.label}
            <span
              className={`text-sm transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>
          {isExpanded && (
            <div className="bg-slate-50">
              {item.submenu!.map((subitem, index) => (
                <a
                  key={index}
                  href={subitem.href}
                  onClick={onClose}
                  className="block px-10 py-3 text-sm text-slate-600 hover:text-primary hover:bg-white transition-colors"
                >
                  {subitem.label}
                </a>
              ))}
            </div>
          )}
        </>
      ) : (
        <a
          href={item.href}
          onClick={onClose}
          className={`block px-6 py-4 transition-colors ${
            item.isActive
              ? "font-semibold text-primary"
              : "font-medium text-slate-700 hover:text-primary"
          }`}
        >
          {item.label}
        </a>
      )}
    </div>
  );
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      label: "Home",
      href: "/",
      isActive: true,
    },
    {
      label: "Quem Somos",
      href: "#",
      submenu: [
        { label: "Estatuto", href: "/estatuto" },
        { label: "Diretoria", href: "/diretoria" },
      ],
    },
    {
      label: "Atividades",
      href: "#",
      submenu: [
        {
          label: "Escala de Exposições Doutrinárias",
          href: "/escala-exposicoes",
        },
        { label: "Atendimento Fraterno", href: "/atendimento-fraterno" },
        { label: "Estudo da Doutrina Espírita", href: "/estudo" },
        { label: "Cirurgias Espirituais", href: "/cirurgias" },
        { label: "Tratamento de Desobsessão", href: "/desobsessao" },
        { label: "Evangelização", href: "/evangelizacao" },
        { label: "Irradiação", href: "/irradiacao" },
        { label: "Biblioteca", href: "/biblioteca" },
      ],
    },
    {
      label: "Horários",
      href: "/horarios",
    },
    {
      label: "Contato",
      href: "/contato",
    },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        {menuItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden p-2 text-slate-700 hover:text-primary transition-colors"
        aria-label="Abrir menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0  z-60 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl z-70 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <span className="text-lg font-bold text-primary">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-slate-400 hover:text-slate-700 transition-colors"
            aria-label="Fechar menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Drawer Content */}
        <nav className="overflow-y-auto h-[calc(100vh-73px)]">
          {menuItems.map((item, index) => (
            <MobileNavItem
              key={index}
              item={item}
              onClose={() => setIsMobileMenuOpen(false)}
            />
          ))}
        </nav>
      </div>
    </>
  );
}
