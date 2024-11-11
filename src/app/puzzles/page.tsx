import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import ColorSequenceChallenge from './color-sequence/page';
import NumberMemoryGame from './number-memory/page';
import PatternCompletionPuzzle from './pattern-completion/page';
import CompletarPadroes from './completar-padroes/page';
import JogoDaMemoria from './jogo-da-memoria/page';

export default function PuzzlesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-200 to-purple-200">
            <header className="sticky top-0 z-50 w-full border-b-4 border-yellow-400 bg-blue-500 text-white shadow-lg">
                <div className="container flex h-16 items-center">
                    <Link
                        className="flex items-center justify-center mr-6"
                        href="/"
                    >
                        <span
                            className="text-3xl mr-2"
                            role="img"
                            aria-label="Puzzle piece emoji"
                        >
                            🧩
                        </span>
                        <span className="text-2xl font-bold font-comic">
                            Tech Gadget
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-lg font-medium">
                        <Link
                            className="transition-colors hover:text-yellow-400"
                            href="/"
                        >
                            Início
                        </Link>
                        <Link
                            className="transition-colors hover:text-yellow-400"
                            href="/puzzles"
                        >
                            Quebra-cabeças
                        </Link>
                        <Link
                            className="transition-colors hover:text-yellow-400"
                            href="/about"
                        >
                            Sobre
                        </Link>
                        <Link
                            className="transition-colors hover:text-yellow-400"
                            href="/contact"
                        >
                            Contato
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
                    <div className="container px-4 md:px-6 mx-auto">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-blue-600 font-comic text-center mb-12">
                            Nossos Quebra-cabeças Divertidos
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            <Card className="w-full max-w-sm bg-orange-400 text-white rounded-3xl shadow-lg transition-transform hover:scale-105">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-comic">
                                        Desafio de Sequência de Cores
                                    </CardTitle>
                                    <CardDescription className="text-white text-lg">
                                        Lembre-se do padrão e recrie-o!
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ColorSequenceChallenge />
                                </CardContent>
                            </Card>
                            <Card className="w-full max-w-sm bg-pink-400 text-white rounded-3xl shadow-lg transition-transform hover:scale-105">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-comic">
                                        Jogo de Memória Numérica
                                    </CardTitle>
                                    <CardDescription className="text-white text-lg">
                                        Teste suas habilidades de memorização de
                                        números!
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <NumberMemoryGame />
                                </CardContent>
                            </Card>

                            <Card className="w-full max-w-sm bg-purple-400 text-white rounded-3xl shadow-lg transition-transform hover:scale-105">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-comic">
                                        Completar Padrões
                                    </CardTitle>
                                    <CardDescription className="text-white text-lg">
                                        Encontre a forma que completa o padrão!
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <CompletarPadroes />
                                </CardContent>
                            </Card>
                            <Card className="w-full max-w-sm bg-yellow-400 text-white rounded-3xl shadow-lg transition-transform hover:scale-105">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-comic">
                                        Jogo da Memória
                                    </CardTitle>
                                    <CardDescription className="text-white text-lg">
                                        Encontre todos os pares de emojis!
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <JogoDaMemoria />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t-4 border-yellow-400 bg-blue-500 text-white">
                <div className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6">
                    <p className="text-sm">
                        © 2024 Tech Gadget. Todos os direitos reservados.
                    </p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link
                            className="text-sm hover:underline underline-offset-4"
                            href="/terms"
                        >
                            Termos de Serviço
                        </Link>
                        <Link
                            className="text-sm hover:underline underline-offset-4"
                            href="/privacy"
                        >
                            Privacidade
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
