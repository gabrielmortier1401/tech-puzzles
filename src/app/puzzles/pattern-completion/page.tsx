'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const shapes = ['●', '■', '▲', '★'];

export default function PatternCompletionPuzzle() {
    const [pattern, setPattern] = useState<string[]>([]);
    const [options, setOptions] = useState<string[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [gameState, setGameState] = useState<'start' | 'playing' | 'result'>(
        'start'
    );
    const [level, setLevel] = useState(1);
    const [result, setResult] = useState<'correct' | 'incorrect' | null>(null);

    const generatePattern = () => {
        const newPattern = Array.from(
            { length: 3 + level },
            () => shapes[Math.floor(Math.random() * shapes.length)]
        );
        const correctAnswer = newPattern[newPattern.length - 1];
        newPattern[newPattern.length - 1] = '?';
        setPattern(newPattern);

        const wrongOptions = shapes.filter((shape) => shape !== correctAnswer);
        const shuffledOptions = [
            correctAnswer,
            ...wrongOptions.slice(0, 3),
        ].sort(() => Math.random() - 0.5);
        setOptions(shuffledOptions);
    };

    const startGame = () => {
        generatePattern();
        setGameState('playing');
        setSelectedAnswer(null);
        setResult(null);
    };

    const handleAnswer = (answer: string) => {
        setSelectedAnswer(answer);
        const correctAnswer = options.find(
            (option) => !pattern.includes(option)
        );
        if (answer === correctAnswer) {
            setResult('correct');
            setLevel(level + 1);
        } else {
            setResult('incorrect');
        }
        setGameState('result');
    };

    const resetGame = () => {
        setGameState('start');
        setSelectedAnswer(null);
        setResult(null);
        if (result === 'incorrect') setLevel(1);
    };

    useEffect(() => {
        if (gameState === 'playing') {
            generatePattern();
        }
    }, [gameState, level]);

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Quebra-Cabeça de Completar Padrões</CardTitle>
                <CardDescription>
                    Encontre a forma faltante para completar o padrão!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {gameState === 'start' && (
                        <Button onClick={startGame} className="w-full">
                            Iniciar Jogo
                        </Button>
                    )}
                    {gameState === 'playing' && (
                        <>
                            <div className="text-4xl font-bold text-center mb-4">
                                {pattern.join(' ')}
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {options.map((option, index) => (
                                    <Button
                                        key={index}
                                        onClick={() => handleAnswer(option)}
                                        className="text-2xl h-16"
                                    >
                                        {option}
                                    </Button>
                                ))}
                            </div>
                        </>
                    )}
                    {gameState === 'result' && (
                        <div className="space-y-2">
                            {result === 'correct' ? (
                                <div className="flex items-center text-green-500">
                                    <CheckCircle2 className="mr-2" />
                                    Correto! Nível {level}
                                </div>
                            ) : (
                                <div className="flex items-center text-red-500">
                                    <AlertCircle className="mr-2" />
                                    Incorreto. Tente novamente!
                                </div>
                            )}
                            <Button onClick={resetGame} className="w-full">
                                {result === 'correct'
                                    ? 'Próximo Nível'
                                    : 'Tente Novamente'}
                            </Button>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
