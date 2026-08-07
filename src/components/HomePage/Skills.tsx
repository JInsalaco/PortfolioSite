import { Coffee, Braces, Database, Boxes } from 'lucide-react';
import { Card, CardContent } from 'components/ui/card';
import '../../images/skill-icons.css';

interface skillCard {
  skill: string;
  icon?: string;
  Icon?: typeof Coffee;
}

export function Skills() {
  const cardContent: skillCard[] = [
    {
      skill: 'Java',
      Icon: Coffee,
    },
    {
      skill: 'TypeScript',
      Icon: Braces,
    },
    {
      skill: 'React',
      icon: 'ib mdi-react',
    },
    {
      skill: 'SQL',
      Icon: Database,
    },
    {
      skill: 'AWS',
      icon: 'ib mdi-aws',
    },
    {
      skill: 'Terraform',
      Icon: Boxes,
    },
  ];

  return (
    <div className="mb-5">
      <h2 className="mb-2 text-3xl font-bold text-primary">Skills</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {cardContent.map((card) => (
          <Card key={card.skill} className="h-full">
            <button className="flex h-full w-full flex-col items-center justify-center rounded-xl transition-colors hover:bg-accent">
              <CardContent className="flex flex-col items-center gap-1 p-6">
                {card.Icon ? <card.Icon className="h-16 w-16" /> : <span className={card.icon} />}
                <span className="text-center text-base">{card.skill}</span>
              </CardContent>
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
