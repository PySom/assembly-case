export default function RemoteMessage({ status }) {
    
    return (
        <div style={{ height: '20px' }} className='text-center full-width'>
            {status && <p style={{ color: status.success ? 'green' : 'red' }}>{status.message}</p>}
        </div>
    );
}