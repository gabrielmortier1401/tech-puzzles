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

const formas = ['●', '■', '▲', '★'];

export default function CompletarPadroes() {
    const [padrao, setPadrao] = useState<string[]>([]);
    const [opcoes, setOpcoes] = useState<string[]>([]);
    const [respostaSelecionada, setRespostaSelecionada] = useState<
        string | null
    >(null);
    const [estadoJogo, setEstadoJogo] = useState<
        'inicio' | 'jogando' | 'resultado'
    >('inicio');
    const [nivel, setNivel] = useState(1);
    const [resultado, setResultado] = useState<'correto' | 'incorreto' | null>(
        null
    );

    const gerarPadrao = () => {
        const novoPadrao = Array.from(
            { length: 3 + nivel },
            () => formas[Math.floor(Math.random() * formas.length)]
        );
        const respostaCorreta = novoPadrao[novoPadrao.length - 1];
        novoPadrao[novoPadrao.length - 1] = '?';
        setPadrao(novoPadrao);

        const opcoesErradas = formas.filter(
            (forma) => forma !== respostaCorreta
        );
        const opcoesEmbaralhadas = [
            respostaCorreta,
            ...opcoesErradas.slice(0, 3),
        ].sort(() => Math.random() - 0.5);
        setOpcoes(opcoesEmbaralhadas);
    };

    const iniciarJogo = () => {
        gerarPadrao();
        setEstadoJogo('jogando');
        setRespostaSelecionada(null);
        setResultado(null);
    };

    const handleResposta = (resposta: string) => {
        setRespostaSelecionada(resposta);
        const respostaCorreta = opcoes.find((opcao) => !padrao.includes(opcao));
        if (resposta === respostaCorreta) {
            setResultado('correto');
            setNivel(nivel + 1);
        } else {
            setResultado('incorreto');
        }
        setEstadoJogo('resultado');
    };

    const reiniciarJogo = () => {
        setEstadoJogo('inicio');
        setRespostaSelecionada(null);
        setResultado(null);
        if (resultado === 'incorreto') setNivel(1);
    };

    useEffect(() => {
        if (estadoJogo === 'jogando') {
            gerarPadrao();
        }
    }, [estadoJogo, nivel]);

    return (
        <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-comic text-purple-600">
                    Completar Padrões
                </CardTitle>
                <CardDescription className="text-purple-600/80">
                    Encontre a forma que completa o padrão!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {estadoJogo === 'inicio' && (
                        <Button
                            onClick={iniciarJogo}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-700 font-bold py-2 px-4 rounded-full text-lg transition-transform hover:scale-105"
                        >
                            Iniciar Jogo
                        </Button>
                    )}
                    {estadoJogo === 'jogando' && (
                        <>
                            <div className="text-4xl font-bold text-center mb-4">
                                {padrao.join(' ')}
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {opcoes.map((opcao, index) => (
                                    <Button
                                        key={index}
                                        onClick={() => handleResposta(opcao)}
                                        className="text-2xl h-16 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-transform hover:scale-105"
                                    >
                                        {opcao}
                                    </Button>
                                ))}
                            </div>
                        </>
                    )}
                    {estadoJogo === 'resultado' && (
                        <div className="space-y-2">
                            {resultado === 'correto' ? (
                                <div className="flex items-center text-green-500">
                                    <CheckCircle2 className="mr-2" />
                                    Correto! Nível {nivel}
                                </div>
                            ) : (
                                <div className="flex items-center text-red-500">
                                    <AlertCircle className="mr-2" />
                                    Incorreto. Tente novamente!
                                </div>
                            )}
                            <Button
                                onClick={reiniciarJogo}
                                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full text-lg transition-transform hover:scale-105"
                            >
                                {resultado === 'correto'
                                    ? 'Próximo Nível'
                                    : 'Tentar Novamente'}
                            </Button>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
