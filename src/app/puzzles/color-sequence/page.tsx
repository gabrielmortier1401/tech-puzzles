'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import { AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const colors = [
    {
        name: 'vermelho',
        bg: 'bg-red-500',
        hover: 'hover:bg-red-600',
        text: 'text-white',
    },
    {
        name: 'azul',
        bg: 'bg-blue-500',
        hover: 'hover:bg-blue-600',
        text: 'text-white',
    },
    {
        name: 'verde',
        bg: 'bg-green-500',
        hover: 'hover:bg-green-600',
        text: 'text-white',
    },
    {
        name: 'amarelo',
        bg: 'bg-yellow-400',
        hover: 'hover:bg-yellow-500',
        text: 'text-black',
    },
    {
        name: 'roxo',
        bg: 'bg-purple-500',
        hover: 'hover:bg-purple-600',
        text: 'text-white',
    },
    {
        name: 'rosa',
        bg: 'bg-pink-500',
        hover: 'hover:bg-pink-600',
        text: 'text-white',
    },
];

export default function ColorSequenceChallenge() {
    const [sequence, setSequence] = useState<string[]>([]);
    const [playerSequence, setPlayerSequence] = useState<string[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [level, setLevel] = useState(1);
    const [showSequence, setShowSequence] = useState(false);
    const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>(
        'playing'
    );

    const generateSequence = useCallback(() => {
        const newSequence = Array.from(
            { length: level + 2 },
            () => colors[Math.floor(Math.random() * colors.length)].name
        );
        setSequence(newSequence);
    }, [level]);

    const startGame = () => {
        setIsPlaying(true);
        setPlayerSequence([]);
        setGameStatus('playing');
        generateSequence();
    };

    const handleColorClick = (color: string) => {
        if (!isPlaying) return;

        const newPlayerSequence = [...playerSequence, color];
        setPlayerSequence(newPlayerSequence);

        if (
            newPlayerSequence[newPlayerSequence.length - 1] !==
            sequence[newPlayerSequence.length - 1]
        ) {
            setGameStatus('lost');
            setIsPlaying(false);
            return;
        }

        if (newPlayerSequence.length === sequence.length) {
            if (level === 5) {
                setGameStatus('won');
                setIsPlaying(false);
            } else {
                setLevel(level + 1);
                setPlayerSequence([]);
                generateSequence();
            }
        }
    };

    useEffect(() => {
        if (sequence.length > 0) {
            setShowSequence(true);
            const timer = setTimeout(() => {
                setShowSequence(false);
            }, sequence.length * 1000);
            return () => clearTimeout(timer);
        }
    }, [sequence]);

    return (
        <div className="container mx-auto px-4 py-8">
            <Link
                href="/puzzles"
                className="inline-flex items-center mb-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Quebra-cabeças
            </Link>
            <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl shadow-lg border-4 border-yellow-400">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-comic text-blue-600">
                        Desafio de Cores
                    </CardTitle>
                    <CardDescription className="text-lg text-purple-700">
                        Lembre-se da sequência e recrie-a!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {colors.map((color) => (
                            <Button
                                key={color.name}
                                className={`h-24 w-full rounded-2xl transition-all transform hover:scale-105 ${color.bg} ${color.hover} ${color.text} text-lg sm:text-xl font-bold shadow-md flex items-center justify-center`}
                                onClick={() => handleColorClick(color.name)}
                                disabled={!isPlaying || showSequence}
                            >
                                {color.name}
                            </Button>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
                        <div className="text-2xl font-comic text-purple-600">
                            Nível: {level}
                        </div>
                        <Button
                            onClick={startGame}
                            disabled={isPlaying}
                            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-full text-lg sm:text-xl transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
                        >
                            {level === 1 ? 'Iniciar Jogo' : 'Reiniciar'}
                        </Button>
                    </div>
                    <div
                        className="h-16 flex items-center justify-center"
                        aria-live="polite"
                    >
                        {showSequence && (
                            <div className="flex space-x-4">
                                {sequence.map((colorName, index) => {
                                    const color = colors.find(
                                        (c) => c.name === colorName
                                    );
                                    return (
                                        <motion.div
                                            key={index}
                                            className={`w-10 h-10 rounded-full ${color?.bg}`}
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{
                                                delay: index * 0.5,
                                                duration: 0.5,
                                                type: 'spring',
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        )}
                        {gameStatus === 'won' && (
                            <motion.div
                                className="text-green-500 flex items-center justify-center text-2xl font-comic"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, type: 'spring' }}
                            >
                                <CheckCircle2 className="mr-2" />
                                Parabéns! Você é incrível!
                            </motion.div>
                        )}
                        {gameStatus === 'lost' && (
                            <motion.div
                                className="text-red-500 flex items-center justify-center text-2xl font-comic"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, type: 'spring' }}
                            >
                                <AlertCircle className="mr-2" />
                                Ops! Tente novamente!
                            </motion.div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
