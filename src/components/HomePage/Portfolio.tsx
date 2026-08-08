import { GithubIcon } from 'components/icons';
import { Card, CardContent } from 'components/ui/card';
import { Badge } from 'components/ui/badge';

interface technologyCard {
  title: string;
  url: string;
  content: string;
  technologies: string[];
}

export function Portfolio() {
  const cardContent: technologyCard[] = [
    {
      title: 'Wedd.io',
      url: 'https://github.com/JInsalaco/CS554_Good_Nodels',
      content: 'Full-stack web application to assist with wedding planning and manage guest lists',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
    },
    {
      title: 'The Duck Pond',
      url: 'https://github.com/JInsalaco/CS546_Group5',
      content: 'Online forum for Stevens students to post questions and start discussions',
      technologies: ['Node.js', 'MongoDB', 'Express', 'Vue'],
    },
    {
      title: 'React Native Blackjack',
      url: 'https://github.com/JInsalaco/Blackjack',
      content: 'React Native application that simulates a game of blackjack',
      technologies: ['React Native', 'Typescript'],
    },
  ];

  return (
    <div className="mb-5">
      <h2 className="mb-2 text-3xl font-bold text-primary">Portfolio</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {cardContent.map((card) => (
          <Card key={card.title} className="h-full">
            <CardContent className="p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to ${card.title} GitHub repository`}
                >
                  <GithubIcon className="h-7 w-7" />
                </a>
              </div>
              <p className="mb-3">{card.content}</p>
              {card.technologies.map((technology, index) => (
                <Badge key={index} variant="secondary" className="m-0.5">
                  {technology}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
