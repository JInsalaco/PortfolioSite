import { useState } from 'react';
import { Button } from 'components/ui/button';

const RunawayNo = () => {
  const maxHeight = window.innerHeight - 400;
  const maxWidth = window.innerWidth - 200;
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  const handleMouseOver = () => {
    setLeft((Math.random() * 2 - 1) * (maxWidth / 2 + 1));
    setTop((Math.random() * 2 - 1) * (maxHeight / 2 + 1));
  };

  return (
    <Button
      size="lg"
      onMouseEnter={handleMouseOver}
      className="relative bg-destructive text-destructive-foreground hover:bg-destructive"
      style={{ top, left }}
    >
      No
    </Button>
  );
};

export default RunawayNo;
