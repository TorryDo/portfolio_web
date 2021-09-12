import React from "react";
import { Title } from "../../container/title/Title";
import './SkillsPage.css';

import { FaAndroid } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';

export const SkillsPage = ({ className }) => {

    const androidSkill = {
        color: '#E33801',
        img: <FaAndroid size="100%" color="#00B105" />,
        text: 'Android',
        itemList: [
            '• Git | Kotlin',
            '• MVVM structure',
            '• Firebase DB | Room DB',
            '• Android Jetpack',
            '• Dagger Hilt',
            '• Retrofit 2',
            '• Solid Principle'
        ]
    };
    const designSkill = {
        color: '#00B105',
        img: <RiPencilFill size="100%" color="#E33801" />,
        text: 'Design',
        itemList: [
            {
                img: <RiPencilFill size="100%" color="#E33801" />,
                text: 'Take a quick look',
                urlText: 'Figma',
                url: 'https://figma.com'
            },
            {
                img: <RiPencilFill size="100%" color="#E33801" />,
                text: 'Take a quick look',
                urlText: 'Illustrator',
                url: 'https://adobe.com'
            },
            {
                img: <RiPencilFill size="100%" color="#E33801" />,
                text: 'Take a quick look',
                urlText: 'After Effects',
                url: 'https://adobe.com'
            },
        ]
    };

    // ------------------ Abyss below ---------------------

    const itemTitle = (img, text) =>
        <div className="SkillsPage--HList--itemTitle">
            <div className="wrapper">
                {img}
            </div>

            <div className="title">{text}</div>
        </div>


    const androidItem = (data) =>
        <div className="SkillsPage--HList--android">
            {itemTitle(data.img, data.text)}

            <div className="android--description">
                {data.itemList.map(it =>
                    <div className="android--item">
                        {it}
                    </div>
                )}
            </div>

        </div>

    const designItem = (data) =>
        <div className="SkillsPage--HList--design">
            {itemTitle(data.img, data.text)}

            <div className="design--body">
                {data.itemList.map((it, index) =>
                    <div className="design--item">
                        <div className="iconWrapper">
                            {it.img}
                        </div>

                        <p>
                            {it.text} : <a href={it.url} id={index}>{it.urlText}</a>
                        </p>
                    </div>
                )}
            </div>
        </div>


    return (
        <div className={className}>
            <Title
                title="Skills"
                description="Get in touch"
            />

            <div className="SkillsPage--HList">
                {androidItem(androidSkill)}
                {designItem(designSkill)}
            </div>

        </div>

    );
}