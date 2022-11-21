/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUserName';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setAuthModal] = useState(false);
    const onCloseModal = useCallback(() => {
        setAuthModal(false);
    }, []);
    const onShowModal = useCallback(() => {
        setAuthModal(true);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onShowModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
                {t('signIn')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
