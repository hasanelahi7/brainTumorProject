import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from './navbar'

export default function Layout({ children }) {

    return (
        <div className="flex min-h-screen flex-col">
        <header className="mb-8">
           <Navbar/>
        </header>
        <main className="container mx-auto max-w-7xl flex-1">
            {children}
        </main>
<footer className="mt-8 flex justify-center border-t border-t-gray-300 shadow-lg py-3">
    <span>Copyright &copy; 2023 Bahria University</span>
</footer>

    </div>
    )
}