import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from 'components/icons';
import { Card, CardContent } from 'components/ui/card';

export function ContactInfo() {
  return (
    <div id="contact-info" className="mb-5 p-2">
      <h2 className="mb-2 text-3xl font-bold text-primary">Contact Info</h2>
      <Card>
        <CardContent className="p-2">
          <ul className="space-y-1">
            <li className="flex items-center gap-2 px-2 py-1.5">
              <Mail className="h-5 w-5" />
              <a
                href="mailto:joseph.insalaco1@gmail.com"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                joseph.insalaco1@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2 px-2 py-1.5">
              <Phone className="h-5 w-5" />
              <a
                href="tel:+17186890507"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                (718) 689-0507
              </a>
            </li>
            <li className="flex items-center gap-2 px-2 py-1.5">
              <GithubIcon className="h-5 w-5" />
              <a
                href="https://github.com/JInsalaco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2 px-2 py-1.5">
              <LinkedinIcon className="h-5 w-5" />
              <a
                href="https://www.linkedin.com/in/joseph-insalaco-ab7679194/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
