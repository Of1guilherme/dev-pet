import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../contexts/cartContext";
import { useTheme } from "../../../contexts/themeContext";
import { FiMoon, FiShoppingCart, FiSun } from "react-icons/fi";

export function Header() {
    const { cartAmount } = useContext(CartContext);
    const { theme, toggleTheme } = useTheme();

    return(
        <header className="w-full px-1 bg-slate-200 dark:bg-zinc-900">
            <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto">
                <Link to="/" className="font-bold text-2xl text-zinc-900 dark:text-white">
                    Dev PetShop
                </Link>
                <div className="flex items-center gap-5">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
                        title={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
                        className="text-zinc-900 dark:text-white cursor-pointer"
                    >
                        {theme === "light" ? <FiMoon size={22} /> : <FiSun size={22} />}
                    </button>
                    <Link to="/cart" className="relative text-zinc-900 dark:text-white">
                        <FiShoppingCart size={24} />
                        {cartAmount > 0 && (
                            <span className="absolute -top-3 -right-3 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
                                {cartAmount}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    )
}