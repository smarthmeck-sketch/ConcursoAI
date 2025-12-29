'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) {
        setError(signInError.message);
        return;
      }
      if (data.user) router.push('/dashboard');
    } catch (err: any) {
        setError(err.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <span className="text-4xl">🎓</span>
            <h1 className="text-3xl font-bold text-blue-600 mt-4">ConcursoAI</h1>
            <p className="text-gray-600 mt-2">Prepare-se para sucesso</p>
          </div>
          {error && <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4 text-sm">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="seu@email.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400">
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">Nao tem conta? <Link href="/signup" className="text-blue-600 hover:underline">Cadastre-se aqui</Link></p>
          <button onClick={() => router.push('/')} className="w-full mt-4 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">Voltar para Home</button>
        </div>
      </div>
    </div>
  );
}
