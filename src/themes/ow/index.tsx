import { Theme } from '../interface';
import React from 'react';
import { defaultSounds } from '../default';

const soundUrls = import.meta.glob('./sounds/*.mp3', {
    import: 'default',
    eager: true,
});

const sounds = Object.entries(soundUrls).map(([key, value]) => ({
    name: key.slice(9, -4),
    src: value,
})) as Theme<string>['sounds'];

const imagesUrls = import.meta.glob('./images/*.png', {
    import: 'default',
    eager: true,
});

const icons = Object.entries(imagesUrls).map(([key, value]) => ({
    name: key.slice(9, -4),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    content: <img src={value} alt="" />,
}));

export const owTheme: Theme<string> = {
    title: '仙表情包',
    desc: (
        <p>
            感谢
            <a
                href="https://space.bilibili.com/228122468"
                target="_blank"
                rel="noreferrer"
            >
                各位纤维
            </a>
            提供素材
        </p>
    ),
    name: '仙表情包',
    icons: icons.map(({ name, content }) => ({
        name,
        content,
        clickSound: 'button-click',
        tripleSound: name === '仙表情包' ? 'triple' : name,
    })),
    sounds: [...defaultSounds, ...sounds],
};
