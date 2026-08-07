import { Avatar, AvatarImage, AvatarFallback } from 'components/ui/avatar';
import { Badge } from 'components/ui/badge';
import headshot from '../../images/headshot.jpeg';

export function Welcome() {
  return (
    <div className="mb-5 p-2">
      <div id="home" className="flex items-center">
        <Avatar className="h-[100px] w-[100px]">
          <AvatarImage src={headshot} alt="Headshot of Joseph Insalaco" />
          <AvatarFallback>JI</AvatarFallback>
        </Avatar>
        <div className="ml-1 flex flex-wrap items-baseline">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Joseph&nbsp;</h1>
          <h1 className="text-4xl font-bold text-primary sm:text-5xl md:text-6xl">Insalaco</h1>
          <div className="mt-2 w-full">
            <Badge className="m-0.5">Full-stack Developer</Badge>
            <Badge className="m-0.5">Product Owner</Badge>
            <Badge className="m-0.5">New York City</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
