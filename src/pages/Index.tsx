import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const wishes = [
    { 
      name: 'Команда маркетинга', 
      text: 'Желаем тебе самого волшебного времени с малышом! Пусть каждый день будет наполнен радостью и улыбками 💕',
      avatar: '🎯'
    },
    { 
      name: 'Отдел разработки', 
      text: 'Поздравляем с главным проектом в жизни! Пусть он запускается без багов и работает стабильно 🚀',
      avatar: '💻'
    },
    { 
      name: 'HR-отдел', 
      text: 'Ты самая лучшая! Желаем легких родов, здоровья малышу и скорейшей встречи с тобой в офисе! 🌸',
      avatar: '💼'
    },
    { 
      name: 'Лучшие подруги', 
      text: 'Дорогая, так рады за тебя! Пусть материнство принесет только счастье и умиление ✨',
      avatar: '💕'
    },
    { 
      name: 'Руководство', 
      text: 'Спасибо за твой вклад в компанию! Желаем тебе легкого декрета и счастливого материнства 🌟',
      avatar: '⭐'
    },
    { 
      name: 'Отдел продаж', 
      text: 'Ты была лучшей! Пусть новая роль мамы принесет столько же успехов и радости! 🎊',
      avatar: '📈'
    }
  ];

  const photos = [
    { url: 'https://cdn.poehali.dev/projects/091e2ecd-7770-4ce2-945a-99ec517c62b9/files/0dc64f6e-e239-4391-90a0-6b3af4f32874.jpg', caption: 'Корпоратив 2024' },
    { url: 'https://cdn.poehali.dev/projects/091e2ecd-7770-4ce2-945a-99ec517c62b9/files/05d38ea2-c90a-42ba-97eb-82f3ea3e11f5.jpg', caption: 'Последний день перед декретом' },
    { url: 'https://cdn.poehali.dev/projects/091e2ecd-7770-4ce2-945a-99ec517c62b9/files/c0a56a9a-ca68-465e-a79f-e531d4a0c234.jpg', caption: 'Подарки от коллег' }
  ];

  const videos = [
    { title: 'От директора', thumbnail: 'https://cdn.poehali.dev/projects/091e2ecd-7770-4ce2-945a-99ec517c62b9/files/0dc64f6e-e239-4391-90a0-6b3af4f32874.jpg', url: '', duration: '2:30' },
    { title: 'Команда маркетинга', thumbnail: 'https://cdn.poehali.dev/projects/091e2ecd-7770-4ce2-945a-99ec517c62b9/files/05d38ea2-c90a-42ba-97eb-82f3ea3e11f5.jpg', url: '', duration: '3:15' },
    { title: 'Отдел разработки', thumbnail: 'https://cdn.poehali.dev/projects/091e2ecd-7770-4ce2-945a-99ec517c62b9/files/c0a56a9a-ca68-465e-a79f-e531d4a0c234.jpg', url: '', duration: '2:45' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="text-7xl animate-float">🍼</div>
          </div>
          <h1 className="text-6xl md:text-8xl font-caveat font-bold text-primary mb-4 drop-shadow-sm">
            Поздравляем с декретом!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-rubik">
            Начинается самое невероятное приключение ✨
          </p>
        </header>

        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="main" className="font-rubik">
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="wishes" className="font-rubik">
              <Icon name="Heart" size={18} className="mr-2" />
              Пожелания
            </TabsTrigger>
            <TabsTrigger value="photos" className="font-rubik">
              <Icon name="Camera" size={18} className="mr-2" />
              Фото
            </TabsTrigger>
            <TabsTrigger value="videos" className="font-rubik">
              <Icon name="Video" size={18} className="mr-2" />
              Видео
            </TabsTrigger>
          </TabsList>

          <TabsContent value="main" className="animate-fade-in">
            <Card className="p-8 md:p-12 bg-white/90 backdrop-blur-sm border-2 border-primary/20">
              <div className="text-center space-y-6">
                <div className="flex justify-center gap-4 text-5xl mb-6">
                  <span className="animate-float">🧸</span>
                  <span className="animate-float" style={{ animationDelay: '0.5s' }}>🎈</span>
                  <span className="animate-float" style={{ animationDelay: '1s' }}>👶</span>
                  <span className="animate-float" style={{ animationDelay: '1.5s' }}>🎀</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-caveat font-bold text-foreground mb-6">
                  Дорогая наша коллега!
                </h2>
                
                <div className="space-y-4 text-lg md:text-xl text-foreground/80 font-rubik leading-relaxed">
                  <p>
                    Сегодня особенный день! Ты отправляешься в самое важное путешествие своей жизни — 
                    навстречу материнству. 💕
                  </p>
                  <p>
                    Мы невероятно рады за тебя и хотим пожелать, чтобы это время было наполнено 
                    только радостью, нежностью и волшебными моментами.
                  </p>
                  <p>
                    Пусть малыш растет здоровым и счастливым, а ты чувствуешь себя самой любимой мамой на свете! 
                  </p>
                  <p className="text-2xl font-caveat font-bold text-primary pt-4">
                    Мы очень ждем вашей встречи! 🌸
                  </p>
                </div>

                <div className="pt-8">
                  <p className="text-sm text-muted-foreground italic">
                    С любовью, вся команда ❤️
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="wishes" className="animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2">
              {wishes.map((wish, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-white/90 backdrop-blur-sm border-2 border-primary/20 hover:shadow-lg transition-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{wish.avatar}</div>
                    <div className="flex-1">
                      <h3 className="font-caveat text-2xl font-bold text-foreground mb-2">
                        {wish.name}
                      </h3>
                      <p className="font-rubik text-foreground/80 leading-relaxed">
                        {wish.text}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="photos" className="animate-fade-in">
            <div className="grid gap-6 md:grid-cols-3">
              {photos.map((photo, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden bg-white/90 backdrop-blur-sm border-2 border-primary/20 hover:scale-105 transition-transform"
                >
                  <img 
                    src={photo.url} 
                    alt={photo.caption}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <p className="font-caveat text-xl font-bold text-center text-foreground">
                      {photo.caption}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="animate-fade-in">
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-primary/20 mb-6">
              <h2 className="font-caveat text-4xl font-bold text-center text-foreground mb-8">
                Видеопоздравления от коллег 🎥
              </h2>
              
              <div className="grid gap-6 md:grid-cols-3">
                {videos.map((video, index) => (
                  <Card 
                    key={index}
                    className="overflow-hidden bg-white border-2 border-secondary/30 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon name="Play" size={32} className="text-secondary ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-white text-sm font-rubik">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-caveat text-2xl font-bold text-center text-foreground">
                        {video.title}
                      </h3>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border-2 border-primary/30">
              <div className="text-center">
                <Icon name="Upload" size={32} className="mx-auto mb-3 text-primary" />
                <h3 className="font-caveat text-3xl font-bold text-foreground mb-2">
                  Добавить видео
                </h3>
                <p className="font-rubik text-muted-foreground mb-4">
                  Загрузите свое видеопоздравление для коллеги 💕
                </p>
                <Button variant="default" size="lg" className="font-rubik">
                  <Icon name="VideoIcon" size={18} className="mr-2" />
                  Загрузить видео
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Icon name="Sparkles" size={20} />
            <span className="font-rubik">Сделано с любовью для самой лучшей коллеги</span>
            <Icon name="Sparkles" size={20} />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;