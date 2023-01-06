export default function Layout({ children }) {
    return (
        <div className='app-accent-bg-color'>
            <div className='app-padding'>
                {children}
            </div>
        </div>
        );
}