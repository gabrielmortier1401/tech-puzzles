'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AlertCircle, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NumberMemoryGame() {
    const [number, setNumber] = useState('');
    const [userInput, setUserInput] = useState('');
    const [gameState, setGameState] = useState<
        'start' | 'memorize' | 'input' | 'result'
    >('start');
    const [level, setLevel] = useState(1);
    const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);

    const generateNumber = () => {
        return Math.floor(Math.random() * 10 ** level)
            .toString()
            .padStart(level, '0');
    };

    const startGame = () => {
        const newNumber = generateNumber();
        setNumber(newNumber);
        setGameState('memorize');
        setTimeout(
            () => {
                setGameState('input');
            },
            2000 + level * 500
        ); // Increase memorize time with level
    };

    const handleSubmit = () => {
        if (userInput === number) {
            setResult('correct');
            setLevel(level + 1);
        } else {
            setResult('incorrect');
        }
        setGameState('result');
    };

    const resetGame = () => {
        setNumber('');
        setUserInput('');
        setGameState('start');
        setResult(null);
        if (result === 'incorrect') setLevel(1);
    };

    useEffect(() => {
        if (gameState === 'input') {
            setUserInput('');
        }
    }, [gameState]);

    return (
        <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-yellow-200 to-pink-200 rounded-3xl shadow-lg border-4 border-purple-400">
            <CardHeader className="text-center">
                <CardTitle className="text-3xl font-comic text-purple-600">
                    Jogo da Memória Numérica
                </CardTitle>
                <CardDescription className="text-lg text-blue-600">
                    Lembre-se do número e digite-o de volta!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {gameState === 'start' && (
                        <Button
                            onClick={startGame}
                            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg"
                        >
                            Iniciar Jogo
                        </Button>
                    )}
                    {gameState === 'memorize' && (
                        <motion.div
                            className="text-6xl font-bold text-center text-purple-600 mb-4"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, type: 'spring' }}
                        >
                            {number}
                        </motion.div>
                    )}
                    {gameState === 'input' && (
                        <div className="space-y-4">
                            <Input
                                type="number"
                                placeholder="Digite o número"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                className="text-2xl text-center py-3 rounded-xl border-2 border-purple-400 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
                            />
                            <Button
                                onClick={handleSubmit}
                                className="w-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg"
                            >
                                Enviar
                            </Button>
                        </div>
                    )}
                    {gameState === 'result' && (
                        <div className="space-y-4">
                            {result === 'correct' ? (
                                <motion.div
                                    className="flex items-center justify-center text-green-500 text-2xl font-comic"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        type: 'spring',
                                    }}
                                >
                                    <CheckCircle2 className="mr-2" />
                                    Incrível! Nível {level}
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="flex items-center justify-center text-red-500 text-2xl font-comic"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        type: 'spring',
                                    }}
                                >
                                    <AlertCircle className="mr-2" />
                                    Ops! O número era {number}
                                </motion.div>
                            )}
                            <Button
                                onClick={resetGame}
                                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg"
                            >
                                {result === 'correct'
                                    ? 'Próximo Nível'
                                    : 'Tentar Novamente'}
                            </Button>
                        </div>
                    )}
                </div>
                <div className="mt-6 flex justify-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                            key={index}
                            className={`w-8 h-8 ${
                                index < level
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
