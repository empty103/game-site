import cn from 'classnames';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = ({
    bgColor,
    width,
    children,
    className,
    onClick
}: ButtonProps) => {
    return (
        <button
            className={cn(className, styles.btn, {
                [styles.orange]: bgColor === 'orange',
                [styles.golden]: bgColor === 'golden',
                [styles.grey]: bgColor === 'grey',
                [styles.small]: width === 'small',
                [styles.middle]: width === 'middle',
                [styles.large]: width === 'large',
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
}