import React, {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useRef,
  useState
} from 'react';
import Button from '../button/button.component';

interface UploadImageProps {
  name: string;
}

const UploadImage: FC<UploadImageProps> = ({ name }) => {
  const [imageData, setImageData] = useState<File>();
  const pickImageRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (files: FileList | null) => {
    if (files) {
      setImageData(files[0]);
    }
  };

  const handlePickImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    pickImageRef.current?.click();
  };

  console.log(imageData);

  return (
    <div className="relative w-2/3 h-44 rounded-sm border border-amber-600 border-dashed">
      <div className="h-full flex items-center overflow-y-auto justify-center mb-2">
        {imageData ? (
          <img
            className="w-full h-44 object-contain"
            src={URL.createObjectURL(imageData)}
          />
        ) : (
          ''
        )}
      </div>
      <Button className="" onClick={handlePickImage}>
        {imageData ? 'Change image' : 'Select image'}
      </Button>
      <input
        className="hidden"
        type="file"
        id="inputFile"
        ref={pickImageRef}
        accept="image/*"
        name={name}
        onChange={(e) => handleImageChange(e.target.files)}
      />
    </div>
  );
};

export default UploadImage;
