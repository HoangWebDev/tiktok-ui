import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-1/438837307_1781505952357379_194462505574883281_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHf58-IXg5AcFm1NeuTouMD9X9exaY3IkP1f17FpjciQZU4YVm5k6tbyrPouUEZ4zTGhmIHabVMdnsPz1XZPIW&_nc_ohc=dCgvHCkOASkQ7kNvgGJZreP&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYAAkRrdmYxkggnv9qR1QjbhkcCTWruQwR_dXvmZUqCzqA&oe=667D69F1"
                alt="Hoaa"
            />

            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>quangnguyenvan</span>
            </div>
        </div>
    );
}

export default AccountItem;
