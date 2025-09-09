import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminDashboard = () => {
  const { logout } = useAuth();

  // Estado para conteúdo editável
  const [content, setContent] = useState({
    heroTitle: 'Branding Estratégico com IA para criar marcas que impactam e geram resultados',
    heroSubtitle: 'Desenvolvemos estratégias únicas que conectam sua marca ao público certo, aumentam vendas e constroem reconhecimento duradouro no mercado.',
    heroVideo: '/placeholder.mp4',
    stats: {
      projects: 156,
      experience: 13,
      countries: 6
    },
    brandColors: {
      primary: '#F59E0B',
      black: '#0F0F0F',
      white: '#FFFFFF'
    }
  });

  const handleContentChange = (key: string, value: any) => {
    setContent(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    localStorage.setItem('site-content', JSON.stringify(content));
    alert('Conteúdo salvo com sucesso!');
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <div className="flex justify-between items-center p-6 border-b border-brand-gray-800">
        <h1 className="text-2xl font-bold text-brand-yellow">Painel Admin CMS</h1>
        <Button onClick={logout} variant="outline">
          Sair
        </Button>
      </div>

      <div className="p-6">
        <Tabs defaultValue="hero" className="w-full">
          <TabsList className="grid grid-cols-5 w-full mb-6 bg-brand-gray-900">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="stats">Estatísticas</TabsTrigger>
            <TabsTrigger value="colors">Cores</TabsTrigger>
            <TabsTrigger value="images">Imagens</TabsTrigger>
            <TabsTrigger value="videos">Vídeos</TabsTrigger>
          </TabsList>

          <TabsContent value="hero">
            <Card className="bg-brand-gray-900 border-brand-gray-700">
              <CardHeader>
                <CardTitle className="text-brand-yellow">Seção Hero</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Título Principal</label>
                  <Textarea
                    value={content.heroTitle}
                    onChange={(e) => handleContentChange('heroTitle', e.target.value)}
                    className="bg-brand-gray-800 border-brand-gray-600 text-brand-white"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subtítulo</label>
                  <Textarea
                    value={content.heroSubtitle}
                    onChange={(e) => handleContentChange('heroSubtitle', e.target.value)}
                    className="bg-brand-gray-800 border-brand-gray-600 text-brand-white"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">URL do Vídeo</label>
                  <Input
                    value={content.heroVideo}
                    onChange={(e) => handleContentChange('heroVideo', e.target.value)}
                    className="bg-brand-gray-800 border-brand-gray-600 text-brand-white"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <Card className="bg-brand-gray-900 border-brand-gray-700">
              <CardHeader>
                <CardTitle className="text-brand-yellow">Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Projetos Criados</label>
                    <Input
                      type="number"
                      value={content.stats.projects}
                      onChange={(e) => handleContentChange('stats', { ...content.stats, projects: parseInt(e.target.value) })}
                      className="bg-brand-gray-800 border-brand-gray-600 text-brand-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Anos de Experiência</label>
                    <Input
                      type="number"
                      value={content.stats.experience}
                      onChange={(e) => handleContentChange('stats', { ...content.stats, experience: parseInt(e.target.value) })}
                      className="bg-brand-gray-800 border-brand-gray-600 text-brand-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Países Atendidos</label>
                    <Input
                      type="number"
                      value={content.stats.countries}
                      onChange={(e) => handleContentChange('stats', { ...content.stats, countries: parseInt(e.target.value) })}
                      className="bg-brand-gray-800 border-brand-gray-600 text-brand-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="colors">
            <Card className="bg-brand-gray-900 border-brand-gray-700">
              <CardHeader>
                <CardTitle className="text-brand-yellow">Cores da Marca</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Cor Primária</label>
                    <Input
                      type="color"
                      value={content.brandColors.primary}
                      onChange={(e) => handleContentChange('brandColors', { ...content.brandColors, primary: e.target.value })}
                      className="bg-brand-gray-800 border-brand-gray-600 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Cor Preta</label>
                    <Input
                      type="color"
                      value={content.brandColors.black}
                      onChange={(e) => handleContentChange('brandColors', { ...content.brandColors, black: e.target.value })}
                      className="bg-brand-gray-800 border-brand-gray-600 h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Cor Branca</label>
                    <Input
                      type="color"
                      value={content.brandColors.white}
                      onChange={(e) => handleContentChange('brandColors', { ...content.brandColors, white: e.target.value })}
                      className="bg-brand-gray-800 border-brand-gray-600 h-12"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="images">
            <Card className="bg-brand-gray-900 border-brand-gray-700">
              <CardHeader>
                <CardTitle className="text-brand-yellow">Gestão de Imagens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-white/70">Upload e gestão de imagens será implementado em breve.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="videos">
            <Card className="bg-brand-gray-900 border-brand-gray-700">
              <CardHeader>
                <CardTitle className="text-brand-yellow">Gestão de Vídeos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-white/70">Upload e gestão de vídeos será implementado em breve.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <Button onClick={handleSave} className="w-full bg-brand-yellow text-brand-black hover:bg-brand-yellow/90">
            Salvar Alterações
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;