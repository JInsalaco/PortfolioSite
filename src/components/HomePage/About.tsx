import { Card, CardContent } from 'components/ui/card';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div id="about" className="mb-5">
      <h2 className="mb-2 text-3xl font-bold text-primary">About Me</h2>
      <Card>
        <CardContent className="space-y-4 p-4">
          <p>
            I&apos;m a Senior Product Manager at JPMorganChase in New York City, where I own the
            digital checkout experiences across Chase. Most of my work is making the integrations
            behind those experiences simpler for the teams that build on them.
          </p>
          <p>
            Before moving into product, I spent five years as a software engineer at JPMorganChase,
            Bank of America, and National Grid, building payment services, cloud infrastructure, and
            front-end platforms. That background lets me work closely with engineering teams on
            architecture and trade-offs, and turn complex integration work into simpler,
            self-service products.
          </p>
          <p>
            I&apos;m especially interested in how AI changes the way product teams work. My team was
            one of the first at the bank to move to Kanban and an AI-native POD model, where PRDs are
            written by people, Claude drafts the epics and stories, and AI agents handle the
            routine back-and-forth, so the team spends less time in meetings and more time
            shipping.
          </p>
          <p>
            Please check out{' '}
            <Link to="/resume" className="text-primary underline underline-offset-4 hover:text-primary/80">
              my resume
            </Link>{' '}
            for more detail on my experience.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
