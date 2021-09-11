import './ContactPage.css';
import { Title } from "../../container/title/Title";

import telephone from "../../assets/svg/telephone.svg"
import letter from "../../assets/svg/letter.svg"
import location from "../../assets/svg/location.svg"

export const ContactPage = (
    { className }
) => {

    const infos = [
        {
            img: { telephone },
            title: 'Call me',
            content: '(+84)369 239 202',
            cName: 'info'
        },
        {
            img: { letter },
            title: 'Email',
            content: 'tridonguyen392@gmail.com',
            cName: 'info'
        },
        {
            img: { location },
            title: 'Location',
            content: 'Thu Duc, Long Truong, Nguyen Duy Trinh',
            cName: 'info'
        },
    ];

    const forms = [
        {
            cName: 'form--name',
            hint: 'name',
        },
        {
            cName: 'form--email',
            hint: 'email'
        },
        {
            cName: 'form--message',
            hint: 'message'
        },
    ];


    return (
        <div className={className}>
            <Title title="Contact" description="Get in touch" />

            <div className="Contact--body">
                <div className="Contact--body--information">
                    {
                        infos.map(it =>
                            <div className={it.cName}>

                                <img src={it.img} alt="icon" />

                                <div className="wrapper">
                                    <div className="title">
                                        {it.title}
                                    </div>
                                    <div className="content">
                                        {it.content}
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
                <div className="Contact--body--form">
                    {
                        forms.map(it =>
                                <input 
                                className={it.cName} 
                                type="text" 
                                name="name"
                                placeholder={it.hint}
                                />
                        )
                    }
                </div>
            </div>

        </div>
    );
}