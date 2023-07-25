import { AppIcon, AppIcons } from '@Constans/icons';
import classNames from 'classnames';
import style from './ChatIcon.module.scss';
import { OnClickType } from '@Constans/htmlConstants';

interface ChatIconProps {
  onClickChatIcon: OnClickType<HTMLDivElement>;
}

const ChatIcon: React.FC<ChatIconProps> = ({ onClickChatIcon }) => {
  const chatContainerStyle = classNames(style.chatContainer);

  return (
    <div onClick={onClickChatIcon} className={chatContainerStyle}>
      {AppIcons[AppIcon.Chat]}
    </div>
  );
};

export default ChatIcon;
