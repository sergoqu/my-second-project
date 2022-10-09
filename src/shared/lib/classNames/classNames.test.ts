import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with first params', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with addictional class', () => {
        const expected = 'someClass clases cls';
        expect(classNames('someClass', {}, ['clases', 'cls'])).toBe(expected);
    });
    test('with addictional params', () => {
        const expected = 'someClass clases cls hovered focus';
        expect(classNames(
            'someClass',
            {
                hovered: true,
                scrolable: false,
                focus: true,
            },
            ['clases', 'cls'],
        ))
            .toBe(expected);
    });
    test('with addictional params undefiend', () => {
        const expected = 'someClass clases cls scrolable';
        expect(classNames('someClass', {
            hovered: undefined,
            scrolable: true,
        }, ['clases', 'cls']))
            .toBe(expected);
    });
});
