import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from 'components/ui/button';

export default function ScrollButton() {
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const handleButtonVisibility = () => {
      window.scrollY > 300 ? setIsButtonVisible(true) : setIsButtonVisible(false);
    };
    window.addEventListener('scroll', handleButtonVisibility);
  });

  return (
    <>
      {isButtonVisible && (
        <Button
          size="icon"
          variant="ghost"
          className="float-right m-16"
          onClick={handleScroll}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-8 w-8" />
        </Button>
      )}
    </>
  );
}
