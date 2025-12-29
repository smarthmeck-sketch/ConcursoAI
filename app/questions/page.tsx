'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: string;
}
export default function Questions() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const sampleQuestions: Question[] = [
    {
      id: '1',
      text: 'Qual eh a capital do Brasil?',
      options: ['Sao Paulo', 'Brasilia', 'Rio de Janeiro', 'Salvador'],
      correctAnswer: 1,
      category: 'Geografia',
      difficulty: 'facil'
    },
    {
      id: '2',
      text: 'Em que ano foi proclamada a Independencia do Brasil?',
      options: ['1789', '1822', '1889', '1891'],
      correctAnswer: 1,
      category: 'Historia',
      difficulty: 'medio'
    }
  ];
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) router.push('/login');
      setUser(user);
      setQuestions(sampleQuestions);
    };
    getUser();
  }, [router]);
  const handleAnswer = () => {
    if (selectedAnswer === null) return;
    if (selectedAnswer === questions[currentQuestion]?.correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };
  if (questions.length === 0) return <div>Carregando...</div>;
  const question = questions[currentQuestion];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Questoes e Simulados</h1>
          <button onClick={() => router.push('/dashboard')} className="text-gray-600">Voltar</button>
        </div>
      </header>
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <p className="text-gray-600">Questao {currentQuestion + 1} de {questions.length}</p>
            <div className="bg-gray-200 h-2 rounded-full mt-2"><div className="bg-blue-600 h-2 rounded-full" style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}></div></div>
          </div>
          <h2 className="text-xl font-bold mb-6 text-gray-900">{question.text}</h2>
          <div className="space-y-3 mb-8">
            {question.options.map((option, idx) => (
              <button key={idx} onClick={() => setSelectedAnswer(idx)} className={`w-full p-4 text-left rounded-lg border-2 transition ${
                selectedAnswer === idx ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-400'
              }`}>
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleAnswer} disabled={selectedAnswer === null} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400">
            Proximo
          </button>
        </div>
        <div className="mt-8 bg-blue-100 rounded-lg p-6 text-center">
          <p className="text-gray-700">Score: {score} de {questions.length}</p>
        </div>
      </main>
    </div>
  );
}
