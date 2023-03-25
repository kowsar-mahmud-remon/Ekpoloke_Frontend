import {BiChevronLeft} from 'react-icons/bi';
import styles from '../../styles/CarouselButton.module.css'

interface ComponentBProps {
    onClick?: any; 
    className?: any; 
  }
const PreviousButton: React.FC<ComponentBProps> = ({ onClick, className }) => {
    return (
      <div className={`${className} ${styles.custom_prev_btn}`} onClick={onClick}>
        <BiChevronLeft fontSize={40} color={'#000'} />
      </div>
    );
  };

export default PreviousButton;