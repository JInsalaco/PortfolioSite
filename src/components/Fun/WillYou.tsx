import { useState } from 'react';
import { Button } from 'components/ui/button';
import RunawayNo from './RunawayNo';

const WillYou = () => {
  const [image, setImage] = useState('https://media.tenor.com/hBK9Al_tgq4AAAAM/cute-cat-couple.gif');
  const [text, setText] = useState('Will you be my Valentine?');
  const [showButton, setShowButton] = useState(true);

  const handleYes = () => {
    setShowButton(false);
    setText('WOOHOO');
    setImage('https://media1.tenor.com/m/28G0EVh-CKkAAAAC/cute-cat.gif');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-4 text-center text-4xl font-bold text-black">{text}</h2>
      <img src={image} alt="" />
      {showButton && (
        <div className="mt-1">
          <Button
            size="lg"
            className="m-1 bg-pink-400 text-black hover:bg-pink-500"
            onClick={handleYes}
          >
            Yes
          </Button>
          <RunawayNo />
        </div>
      )}
    </div>
  );
};

export default WillYou;
