import { BackButton } from '../components';
import NotFoundImg from './img/404.gif';

const styles = {
    notFoundContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
    },

    notFoundImage: {
        objectFit: 'cover',
    },
};


const NotFound = () => {
    return (
        <>
            <BackButton />
            <div style={styles.notFoundContainer}>
                <img style={styles.notFoundImage} src={NotFoundImg} alt="Not Found" />
            </div>
        </>
    );
}

export default NotFound;
