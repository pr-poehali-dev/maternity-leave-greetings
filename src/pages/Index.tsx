import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);

  const wishes = [
    { 
      name: 'От всей команды', 
      text: 'Желаем тебе самого прекрасного времени с малышом! Пусть каждый день дарит радость и незабываемые моменты 💕',
      icon: 'Heart'
    },
    { 
      name: 'Руководство', 
      text: 'Спасибо за твой вклад в нашу команду! Желаем легкого декрета и скорейшей встречи 🌟',
      icon: 'Star'
    },
    { 
      name: 'Коллеги', 
      text: 'Ты была лучшей! Пусть материнство принесет столько же радости и успехов! ✨',
      icon: 'Sparkles'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-blue-100">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-8xl mb-6 animate-bounce">👶</div>
          <h1 className="text-6xl md:text-7xl font-bold text-rose-600 mb-4 font-serif">
            Поздравляем!
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700">
            С выходом в декретный отпуск 💐
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-white/95 backdrop-blur mb-12 shadow-2xl border-rose-200">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-4 text-5xl mb-6">
              <span className="animate-pulse">🍼</span>
              <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>🎀</span>
              <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>🧸</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              Дорогая коллега!
            </h2>
            
            <div className="space-y-5 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                Сегодня начинается твоё самое важное и волшебное приключение — материнство! 💕
              </p>
              <p>
                Желаем тебе лёгких родов, крепкого здоровья малышу и океан счастья в каждом дне.
              </p>
              <p>
                Пусть это время будет наполнено нежностью, любовью и незабываемыми моментами! 🌸
              </p>
            </div>

            <Button 
              onClick={() => setShowMessage(true)}
              size="lg"
              className="mt-8 bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg"
            >
              <Icon name="Heart" size={20} className="mr-2" />
              Открыть пожелания
            </Button>
          </div>
        </Card>

        {showMessage && (
          <div className="space-y-6 animate-fade-in">
            {wishes.map((wish, index) => (
              <Card 
                key={index} 
                className="p-6 bg-white/95 backdrop-blur shadow-lg hover:shadow-xl transition-all border-rose-100"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Icon name={wish.icon} size={24} className="text-rose-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {wish.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {wish.text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-8 bg-gradient-to-r from-rose-50 to-pink-50 border-rose-200">
              <div className="text-center space-y-4">
                <div className="text-5xl mb-4">🌈</div>
                <p className="text-2xl font-semibold text-gray-800">
                  Мы будем очень скучать!
                </p>
                <p className="text-lg text-gray-600">
                  Ждём тебя обратно отдохнувшей и счастливой ❤️
                </p>
                <p className="text-sm text-gray-500 italic mt-6">
                  С любовью и наилучшими пожеланиями, твои коллеги
                </p>
              </div>
            </Card>
          </div>
        )}

      </div>
    </div>
  );
};

export default Index;
