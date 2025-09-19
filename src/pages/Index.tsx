import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [activeSection, setActiveSection] = useState('home')

  const technologies = [
    {
      icon: 'Smartphone',
      title: 'AR-камера',
      description: 'Передовые алгоритмы распознавания объектов и пространства',
      features: ['Трекинг в реальном времени', 'Распознавание маркеров', '360° обзор']
    },
    {
      icon: 'MapPin',
      title: 'Геолокация',
      description: 'Точное позиционирование и привязка к местности',
      features: ['GPS навигация', 'Индор-позиционирование', 'Интерактивные карты']
    },
    {
      icon: 'Puzzle',
      title: 'Игровая логика',
      description: 'Сложные головоломки и интерактивные задания',
      features: ['Система подсказок', 'Прогрессия сложности', 'Мультиплеер']
    },
    {
      icon: 'Play',
      title: 'Медиа-контент',
      description: '3D модели, звуки и видео для полного погружения',
      features: ['3D анимация', 'Пространственный звук', 'Видео-вставки']
    }
  ]

  const quests = [
    {
      title: 'Тайна исчезнувшего артефакта',
      description: 'Археологическое приключение в поисках древнего артефакта',
      difficulty: 'Средний',
      duration: '90 минут',
      location: 'Городской парк',
      image: '🏺',
      features: ['Исторические факты', 'Поиск подсказок', 'Командная работа']
    },
    {
      title: 'Космическая станция',
      description: 'Спасательная миссия на орбитальной станции',
      difficulty: 'Сложный',
      duration: '120 минут',
      location: 'Планетарий',
      image: '🚀',
      features: ['Научные задачи', 'Логические головоломки', 'VR-элементы']
    },
    {
      title: 'Магическая академия',
      description: 'Обучение в школе волшебства и магии',
      difficulty: 'Легкий',
      duration: '60 минут',
      location: 'Библиотека',
      image: '🪄',
      features: ['Творческие задания', 'Групповые испытания', 'Интерактивные заклинания']
    }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading font-bold text-xl text-primary">AR QUESTS</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'technologies', label: 'Технологии' },
                { id: 'quests', label: 'Сюжеты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button className="gradient-bg text-white">
              Начать квест
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="font-heading font-bold text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              AR QUESTS
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Погрузитесь в мир дополненной реальности, где цифровые элементы сливаются с реальным миром, 
              создавая уникальные приключения и незабываемые впечатления
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="gradient-bg text-white text-lg px-8 py-3">
                <Icon name="Play" className="mr-2" size={20} />
                Попробовать бесплатно
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Icon name="Info" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '50+', label: 'Уникальных локаций' },
                { number: '120', label: 'Минут игрового времени' },
                { number: '4', label: 'Уровня сложности' },
                { number: '95%', label: 'Довольных игроков' }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="font-heading font-bold text-3xl text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl mb-4">Технологии будущего</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы используем передовые технологии для создания максимально реалистичного и захватывающего опыта
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-bg rounded-2xl flex items-center justify-center">
                    <Icon name={tech.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-heading text-xl">{tech.title}</CardTitle>
                  <CardDescription className="text-base">{tech.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quests Section */}
      <section id="quests" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl mb-4">Захватывающие сюжеты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый квест — это уникальная история с множеством загадок, головоломок и неожиданных поворотов
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {quests.map((quest, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg overflow-hidden">
                <div className="h-48 gradient-bg flex items-center justify-center text-6xl">
                  {quest.image}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={quest.difficulty === 'Легкий' ? 'default' : quest.difficulty === 'Средний' ? 'secondary' : 'destructive'}>
                      {quest.difficulty}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {quest.duration}
                    </div>
                  </div>
                  <CardTitle className="font-heading text-xl">{quest.title}</CardTitle>
                  <CardDescription className="text-base">{quest.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} className="mr-2" />
                    {quest.location}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Особенности:</h4>
                    <div className="flex flex-wrap gap-2">
                      {quest.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-bg text-white">
                    Начать этот квест
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-secondary/50 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="font-heading font-bold text-2xl text-primary mb-4">AR QUESTS</div>
            <p className="text-muted-foreground mb-6">
              Будущее развлечений уже здесь. Присоединяйтесь к революции дополненной реальности.
            </p>
            <div className="flex justify-center space-x-6">
              {['Mail', 'Phone', 'MessageCircle'].map((icon, index) => (
                <Button key={index} variant="ghost" size="sm">
                  <Icon name={icon as any} size={20} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}