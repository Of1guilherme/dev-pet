import { Outlet } from "react-router";
import { Header } from "./header";
import { ThemeProvider } from "../../contexts/themeContext";

export function Layout(){
    return(
        <ThemeProvider>
            <div className="min-h-screen bg-gray-200 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
                <Header/>
                <Outlet/>
            </div>
        </ThemeProvider>
    )
}