'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
export default function Progress() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) router.push('/login');
      setUser(user);
    };
    getUser();
  }, [router]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <h1 className="text-2xl font-bold text-blue-600">Meu Progresso</h1>
          <button onClick={() => router.push('/dashboard')} className="text-gray-600">Voltar</button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Desempenho</h3>
            <div className="text-4xl font-bold text-blue-600">0%</div>
            <p className="text-gray-600 text-sm">Taxa de acerto</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Tempo de Estudo</h3>
            <div className="text-4xl font-bold text-green-600">0h</div>
            <p className="text-gray-600 text-sm">Total acumulado</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-lg mb-4">Sequencia</h3>
            <div className="text-4xl font-bold text-purple-600">0</div>
            <p className="text-gray-600 text-sm">Dias consecutivos</p>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold mb-6">Graficos e Analises</h2>
          <p className="text-gray-600">Seus dados de progresso aparecerão aqui conforme você estuda. Comece resolvendo questões para ver seus dados em tempo real.</p>
        </div>
      </main>
    </div>
  );
}
