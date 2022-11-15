import { FC, useState } from 'react';

interface NotificationProps {
  status: 'error' | 'success' | 'warning';
  children: string;
  handleCloseClick: () => void;
}

const Notification: FC<NotificationProps> = ({
  status,
  children,
  handleCloseClick
}) => {
  const [isShow, setIsShow] = useState<boolean>(true);

  const statusesMap = {
    error: {
      prefix: 'Error',
      bgColor: 'bg-red-700'
    },
    success: {
      prefix: 'Success',
      bgColor: 'bg-green-700'
    },
    warning: {
      prefix: 'Warning',
      bgColor: 'bg-yellow-700'
    }
  };

  const statusMap = statusesMap[status];

  return (
    <div
      className={`${statusMap.bgColor} flex items-baseline rounded-md justify-between text-white opacity-90 absolute p-2 w-1/4 top-2 translate-x-1/2 right-1/2`}
    >
      <p>{`${statusMap.prefix}: ${children}`}</p>
      <button onClick={handleCloseClick} className="text-center align-text-top">
        &#9421;
      </button>
    </div>
  );
};

export default Notification;
