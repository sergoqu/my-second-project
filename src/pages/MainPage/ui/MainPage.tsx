import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const OnChangeValue = (val:string) => {
        setValue(val);
    };
    return (
        <div>
            {t('Главная страница')}
            <Counter />
            <Input placeholder={t('Введите текс')} value={value} onChange={OnChangeValue} />
        </div>
    );
};

export default MainPage;
