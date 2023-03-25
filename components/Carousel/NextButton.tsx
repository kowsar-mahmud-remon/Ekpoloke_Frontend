
import {BiChevronRight} from 'react-icons/bi';

import styles from '../../styles/CarouselButton.module.css'

interface ComponentBProps {
    onClick?: any; 
    className?: any; 
  }
const NextButton: React.FC<ComponentBProps> = ({ onClick, className }) => {
  return (
    <div onClick={onClick} className={`${className} ${styles.custom_next_btn} ${styles.homeSlider}`}>
      <BiChevronRight fontSize={40} color={'#000'} />
    </div>
  );
};

export default NextButton;