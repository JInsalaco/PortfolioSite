import { About } from './About';
import { ContactInfo } from './ContactInfo';
import { Portfolio } from './Portfolio';
import { Welcome } from './Welcome';
import { Skills } from './Skills';

export default function HomeContainer() {
  return (
    <div className="container h-full">
      <Welcome />
      <About />
      <Skills />
      <Portfolio />
      <ContactInfo />
    </div>
  );
}
