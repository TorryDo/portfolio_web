import './ContactPage.css';
import { Title } from "../../container/title/Title";

import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

export const ContactPage = (
    { className }
) => {

    const infos = [
        {
            img: <FiPhone size="100%"/>,
            title: 'Call me',
            content: '(+84)369 239 202',
            cName: 'info'
        },
        {
            img: <HiOutlineMail size="100%"/>,
            title: 'Email',
            content: 'tridonguyen392@gmail.com',
            cName: 'info'
        },
        {
            img: <GrLocation size="100%"/>,
            title: 'Location',
            content: 'Thu Duc, Long Truong, Nguyen Duy Trinh',
            cName: 'info'
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

                                {/* <img src={it.img} alt="icon" /> */}
                                <div className="img">
                                    {it.img}
                                </div>


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
                    <input
                        className='form--name'
                        type="text"
                        name="name"
                        placeholder='Name'
                    />
                    <input
                        className='form--email'
                        type="text"
                        name="name"
                        placeholder='Email'
                    />
                    <textarea
                        className='form--message'
                        rows="8"
                        type="textarea"
                        name="name"
                        placeholder='Message'
                    />

                    <input
                        className="form--button"
                        type="button"
                        placeholder="click me"
                        value="Send message"
                    />

                </div>
            </div>

        </div>
    );
}