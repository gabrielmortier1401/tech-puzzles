import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import { Zap, Brain, Shapes, Lightbulb } from 'lucide-react';
import ColorSequenceChallenge from './puzzles/color-sequence/page';
import NumberMemoryGame from './puzzles/number-memory/page';
import PatternCompletionPuzzle from './puzzles/pattern-completion/page';
import JogoDaMemoria from './puzzles/jogo-da-memoria/page';
import CompletarPadroes from './puzzles/completar-padroes/page';

export default function Home() {
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
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
                    <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-blue-600 font-comic">
                                    Quebra-cabeças Incríveis para Crianças
                                    Curiosas!
                                </h1>
                                <p className="mx-auto max-w-[700px] text-xl text-purple-700 md:text-2xl font-comic">
                                    Aumente seu poder cerebral com
                                    quebra-cabeças super divertidos e
                                    interativos!
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button
                                    className="bg-yellow-400 hover:bg-yellow-500 text-blue-700 font-bold py-2 px-4 rounded-full text-lg transition-transform hover:scale-105"
                                    asChild
                                >
                                    <Link href="/puzzles">Vamos Jogar!</Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-full text-lg transition-transform hover:scale-105"
                                    asChild
                                >
                                    <Link href="/about">Saiba Mais!</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-200 via-yellow-200 to-pink-200">
                    <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-600 font-comic">
                            Categorias de Quebra-cabeças
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center w-full">
                            {[
                                {
                                    icon: Zap,
                                    title: 'Quebra-cabeças de Lógica',
                                    description:
                                        'Desafie suas habilidades de raciocínio',
                                    href: '/puzzles',
                                    color: 'bg-red-400',
                                },
                                {
                                    icon: Brain,
                                    title: 'Jogos de Memória',
                                    description:
                                        'Melhore suas habilidades de memorização',
                                    href: '/puzzles',
                                    color: 'bg-blue-400',
                                },
                                {
                                    icon: Shapes,
                                    title: 'Reconhecimento de Padrões',
                                    description:
                                        'Identifique e complete sequências',
                                    href: '/puzzles',
                                    color: 'bg-green-400',
                                },
                                {
                                    icon: Lightbulb,
                                    title: 'Resolução de Problemas',
                                    description: 'Encontre soluções criativas',
                                    href: '/puzzles',
                                    color: 'bg-yellow-400',
                                },
                            ].map((category, index) => (
                                <Card
                                    key={index}
                                    className={`w-full max-w-sm ${category.color} text-white rounded-3xl shadow-lg transition-transform hover:scale-105`}
                                >
                                    <CardHeader>
                                        <category.icon className="w-12 h-12 mb-2 mx-auto" />
                                        <CardTitle className="text-2xl font-comic">
                                            {category.title}
                                        </CardTitle>
                                        <CardDescription className="text-white text-lg">
                                            {category.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button
                                            variant="secondary"
                                            className="w-full bg-white text-purple-600 font-bold py-2 px-4 rounded-full text-lg transition-transform hover:scale-105"
                                            asChild
                                        >
                                            <Link href={category.href}>
                                                Explorar
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                    <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600 font-comic">
                            Quebra-cabeças em Destaque
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
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
                            <Card className="w-full max-w-sm bg-teal-400 text-white rounded-3xl shadow-lg transition-transform hover:scale-105">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-comic">
                                        Quebra-cabeça de Completar Padrões
                                    </CardTitle>
                                    <CardDescription className="text-white text-lg">
                                        Encontre a forma que falta na sequência!
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
