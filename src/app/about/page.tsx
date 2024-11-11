import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Puzzle, Zap, Brain, Shapes, Lightbulb } from 'lucide-react';

export default function AboutPage() {
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
                            aria-label="Emoji de peça de quebra-cabeça"
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
                            Sobre a Tech Gadget
                        </h1>
                        <Card className="w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg">
                            <CardContent className="p-6 text-center">
                                <p className="text-lg mb-6 text-gray-700">
                                    A Tech Gadget é uma plataforma educacional
                                    divertida e interativa, criada para ajudar
                                    crianças a desenvolver habilidades
                                    cognitivas importantes através de
                                    quebra-cabeças e jogos envolventes.
                                </p>
                                <p className="text-lg mb-6 text-gray-700">
                                    Nossa missão é tornar o aprendizado uma
                                    aventura emocionante, combinando tecnologia
                                    e educação de uma maneira que as crianças
                                    adoram!
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-200 via-yellow-200 to-pink-200">
                    <div className="container px-4 md:px-6 mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-600 font-comic">
                            O Que Oferecemos
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                            {[
                                {
                                    icon: Zap,
                                    title: 'Quebra-cabeças de Lógica',
                                    description:
                                        'Desafios que estimulam o pensamento crítico',
                                },
                                {
                                    icon: Brain,
                                    title: 'Jogos de Memória',
                                    description:
                                        'Atividades para melhorar a capacidade de retenção',
                                },
                                {
                                    icon: Shapes,
                                    title: 'Reconhecimento de Padrões',
                                    description:
                                        'Exercícios para aprimorar a percepção visual',
                                },
                                {
                                    icon: Lightbulb,
                                    title: 'Resolução de Problemas',
                                    description:
                                        'Tarefas que incentivam a criatividade',
                                },
                            ].map((item, index) => (
                                <Card
                                    key={index}
                                    className="w-full max-w-sm bg-white/80 backdrop-blur-sm text-purple-600 rounded-3xl shadow-lg transition-transform hover:scale-105"
                                >
                                    <CardHeader>
                                        <item.icon className="w-12 h-12 mb-2 mx-auto" />
                                        <CardTitle className="text-2xl font-comic">
                                            {item.title}
                                        </CardTitle>
                                        <CardDescription className="text-purple-600/80 text-lg">
                                            {item.description}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
                    <div className="container px-4 md:px-6 mx-auto text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-600 font-comic">
                            Junte-se à Diversão!
                        </h2>
                        <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
                            Estamos sempre adicionando novos quebra-cabeças e
                            jogos. Venha explorar, aprender e se divertir
                            conosco!
                        </p>
                        <Button
                            className="bg-yellow-400 hover:bg-yellow-500 text-blue-700 font-bold py-2 px-6 rounded-full text-xl transition-transform hover:scale-105"
                            asChild
                        >
                            <Link href="/puzzles">Comece a Jogar Agora!</Link>
                        </Button>
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
