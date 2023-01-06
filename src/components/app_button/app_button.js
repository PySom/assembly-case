import './app_button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function AppButton({ isBusy, onClick, className, text }) {
    return (
        <button className={`app-button-color app-button ${className || ''}`} type='button' onClick={onClick}>
            {isBusy ? <FontAwesomeIcon icon={faSpinner} spin={true} /> : text || 'Submit'}
        </button>
    );
}