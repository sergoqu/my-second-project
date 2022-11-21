import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFromProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFromProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autoFocus placeholder={t('Введите username')} className={cls.input} type="text" />
            <Input placeholder={t('Введите password')} className={cls.input} type="text" />
            <Button className={cls.loginBtn}>{t('войти')}</Button>
        </div>
    );
};
