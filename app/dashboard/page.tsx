'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
        return;
      }
      setUser(user);
      
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();
      
      setProfile(profileData);
      setLoading(false);
    };
    getUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Carregando...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎓</span>
            <h1 className="text-2xl font-bold text-blue-600">ConcursoAI Dashboard</h1>
          </div>
          <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Sair
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Bem-vindo, {profile?.name || user?.email}!</h2>
          <p className="text-gray-600">Sua jornada para a aprovação em concursos públicos começa aqui.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-blue-600">0</div>
            <p className="text-gray-600 text-sm">Questões Resolvidas</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-green-600">0%</div>
            <p className="text-gray-600 text-sm">Taxa de Acerto</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-purple-600">0 dias</div>
            <p className="text-gray-600 text-sm">Sequencia de Estudos</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-orange-600">0h</div>
            <p className="text-gray-600 text-sm">Tempo de Estudo</p>
          </div>
        </div>

        {/* Main Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mentor IA */}
          <Link href="/mentor" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition cursor-pointer">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">Mentor IA</h3>
              <p className="text-gray-600 mb-4">Chat com inteligencia artificial para tirar dúvidas e aprender de forma personalizada.</p>
              <span className="text-blue-600 font-semibold">Iniciar Chat →</span>
            </div>
          </Link>

          {/* Questions */}
          <Link href="/questions" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition cursor-pointer">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">Questões e Simulados</h3>
              <p className="text-gray-600 mb-4">Resolvam milãres de questões de concursos anteriores e faça simular completícimos.</p>
              <span className="text-blue-600 font-semibold">Começar →</span>
            </div>
          </Link>

          {/* Progress */}
          <Link href="/progress" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition cursor-pointer">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">Meu Progresso</h3>
              <p className="text-gray-600 mb-4">Acompanhe seu desempenho, estatisticas de estudo e area que precisa melhorar.</p>
              <span className="text-blue-600 font-semibold">Ver Progresso →</span>
            </div>
          </Link>

          {/* Study Plans */}
          <Link href="/study-plans" className="group">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition cursor-pointer">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">Plano de Estudos</h3>
              <p className="text-gray-600 mb-4">Crie planos personalizados com base em seus objetivos e tempo disponivel para estudo.</p>
              <span className="text-blue-600 font-semibold">Criar Plano →</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
