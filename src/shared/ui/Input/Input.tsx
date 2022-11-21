import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'|'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className, value, onChange, type = 'text', placeholder, autoFocus, ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [inFocus, setInFocus] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autoFocus) {
            setInFocus(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onBlur = () => {
        setInFocus(false);
    };

    const onForus = () => {
        setInFocus(true);
    };

    const OnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (<div className={cls.placeholder}>{`${placeholder}>`}</div>)}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    onFocus={onForus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    value={value}
                    onChange={(e) => OnChangeHandler(e)}
                    type={type}
                    className={cls.input}
                    {...otherProps}
                />
                {inFocus && (<span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />)}
            </div>

        </div>
    );
});
