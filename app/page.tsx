'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎓</span>
            <h1 className="text-2xl font-bold text-blue-600">ConcursoAI</h1>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Recursos</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Preços</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">Sobre</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Entrar</button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">Prepare-se para Concursos com IA</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Plataforma SaaS completa com técnicas de estudo científicas, mentor IA integrado e planejamento personalizado.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-lg">
            Começar Agora
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-lg">
            Ver Demo
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12">✨ Recursos Principais</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-5xl mb-4">🤖</div>
              <h4 className="text-xl font-bold mb-3">Mentor IA</h4>
              <p className="text-gray-600">Chat em tempo real com respostas instantâneas. Explicações personalizadas em múltiplos níveis de dificuldade.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-5xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-3">Técnicas Científicas</h4>
              <p className="text-gray-600">Pareto, Repetição Espaçada, Active Recall, Feynman, Interleaving e Pomodoro integrados.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-5xl mb-4">📈</div>
              <h4 className="text-xl font-bold mb-3">Dashboard Inteligente</h4>
              <p className="text-gray-600">Acompanhe seu progresso em tempo real. Análises detalhadas de desempenho por matéria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <p className="text-lg">Usuários Ativos</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1M+</div>
              <p className="text-lg">Questões Resolvidas</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <p className="text-lg">Taxa de Aprovação</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg">Mentor Disponível</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h3 className="text-4xl font-bold mb-6">Pronto para Começar?</h3>
        <p className="text-lg text-gray-600 mb-8">Acesse a plataforma completa agora e comece sua jornada para aprovação.</p>
        <button className="bg-blue-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition">
          Acessar Plataforma Completa
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">© 2025 ConcursoAI. Todos os direitos reservados.</p>
          <p className="text-sm">Desenvolvido com ❤️ para concurseiros brasileiros</p>
        </div>
      </footer>
    </div>
  );
}
