import { Bot, Braces, Coffee, Database, Route, Sparkles, Users, Workflow } from 'lucide-react';
import { Card, CardContent } from 'components/ui/card';
import '../../images/skill-icons.css';

interface skillCard {
  skill: string;
  icon?: string;
  Icon?: typeof Coffee;
}

const skills: skillCard[] = [
  { skill: 'Stakeholder Management', Icon: Users },
  { skill: 'Generative AI', Icon: Sparkles },
  { skill: 'AI Agents', Icon: Bot },
  { skill: 'AI Workflow Automation', Icon: Workflow },
  { skill: 'Java', Icon: Coffee },
  { skill: 'TypeScript', Icon: Braces },
  { skill: 'React', icon: 'ib mdi-react' },
  { skill: 'SQL', Icon: Database },
  { skill: 'AWS', icon: 'ib mdi-aws' },
  { skill: 'Roadmapping', Icon: Route },
];

export function Skills() {
  return (
    <div id="skills" className="mb-5">
      <h2 className="mb-2 text-3xl font-bold text-primary">Skills</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map((card) => (
          <Card key={card.skill} className="h-full">
            <CardContent className="flex h-full flex-col items-center justify-center gap-1 p-5">
              {card.Icon ? <card.Icon className="h-12 w-12" /> : <span className={card.icon} />}
              <span className="text-center text-base">{card.skill}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
