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
import { motion } from 'framer-motion';

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

interface CardProps {
    emoji: string;
    isFlipped: boolean;
    isMatched: boolean;
    onClick: () => void;
}

const MemoryCard: React.FC<CardProps> = ({
    emoji,
    isFlipped,
    isMatched,
    onClick,
}) => (
    <motion.div
        className={`w-16 h-16 bg-blue-500 rounded-lg cursor-pointer flex items-center justify-center text-3xl ${
            isMatched ? 'invisible' : ''
        }`}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
    >
        {isFlipped ? (
            <motion.div
                animate={{ rotateY: 180 }}
                className="w-full h-full bg-white rounded-lg flex items-center justify-center"
            >
                {emoji}
            </motion.div>
        ) : (
            <span className="sr-only">{emoji}</span>
        )}
    </motion.div>
);

export default function JogoDaMemoria() {
    const [cards, setCards] = useState<string[]>([]);
    const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
    const [matchedPairs, setMatchedPairs] = useState<number>(0);
    const [moves, setMoves] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(false);

    const shuffleCards = () => {
        const shuffled = [...emojis, ...emojis]
            .sort(() => Math.random() - 0.5)
            .map((emoji) => emoji);
        setCards(shuffled);
        setFlippedIndices([]);
        setMatchedPairs(0);
        setMoves(0);
        setGameOver(false);
    };

    useEffect(() => {
        shuffleCards();
    }, []);

    const handleCardClick = (index: number) => {
        if (
            flippedIndices.length === 2 ||
            flippedIndices.includes(index) ||
            gameOver
        )
            return;

        const newFlippedIndices = [...flippedIndices, index];
        setFlippedIndices(newFlippedIndices);
        setMoves(moves + 1);

        if (newFlippedIndices.length === 2) {
            const [firstIndex, secondIndex] = newFlippedIndices;
            if (cards[firstIndex] === cards[secondIndex]) {
                setMatchedPairs(matchedPairs + 1);
                if (matchedPairs + 1 === emojis.length) {
                    setGameOver(true);
                }
            }
            setTimeout(() => setFlippedIndices([]), 1000);
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-comic text-purple-600">
                    Jogo da Memória
                </CardTitle>
                <CardDescription className="text-purple-600/80">
                    Encontre todos os pares de emojis!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="grid grid-cols-4 gap-2">
                        {cards.map((emoji, index) => (
                            <MemoryCard
                                key={index}
                                emoji={emoji}
                                isFlipped={flippedIndices.includes(index)}
                                isMatched={matchedPairs * 2 > index}
                                onClick={() => handleCardClick(index)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-purple-600 font-bold">
                            Movimentos: {moves}
                        </span>
                        <span className="text-purple-600 font-bold">
                            Pares: {matchedPairs}/{emojis.length}
                        </span>
                    </div>
                    {gameOver && (
                        <div className="flex items-center justify-center text-green-500">
                            <CheckCircle2 className="mr-2" />
                            Parabéns! Você completou o jogo!
                        </div>
                    )}
                    <Button
                        onClick={shuffleCards}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-700 font-bold py-2 px-4 rounded-full text-lg transition-transform hover:scale-105"
                    >
                        {gameOver ? 'Jogar Novamente' : 'Reiniciar'}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
