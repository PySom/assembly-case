import './form_container.css';
import logo from '../../assets/images/assemblyLogo.svg';
import RemoteMessage from '../remote_message/remote_message';

export default function FormContainer({ children, status }) {
    return (
        <form className='form-container'>
            <div className='d-flex flex-column header-container align-center'>
                <img src={logo} className='logo' alt='Catholic Archdiocese of Lagos logo' />
                <div className='form-description app-primary-color text-regular'>
                    <p className='no-margin'>Search the GitHub API with <br/>user or organization name<br /> From Assembly</p>
                </div>

            </div>

            <div className='form-content'>
                {children}
            </div>
            <RemoteMessage status={status} />
        </form>
    );
}