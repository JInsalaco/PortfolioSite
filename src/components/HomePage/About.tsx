import { Card, CardContent } from 'components/ui/card';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div id="about" className="mb-5">
      <h2 className="mb-2 text-3xl font-bold text-primary">About Me</h2>
      <Card>
        <CardContent className="space-y-4 p-4">
          <p>
            I am a full-stack developer based in New York City, currently a Product Owner at
            JPMorgan Chase focused on digital wallet and checkout experiences. I have over 5 years
            of experience across Java, TypeScript, React, SQL, AWS, and Terraform, building and
            scaling payment and microservice platforms.
          </p>
          <p>
            Please check out{' '}
            <Link to="/resume" className="text-primary underline underline-offset-4 hover:text-primary/80">
              my resume
            </Link>{' '}
            for more information on my skillset and work projects.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
