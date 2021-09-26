import './ContactPage.css';
import { Title } from "../../container/title/Title";

import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";

export const ContactPage = (
    { className }
) => {

    const infos = [
        {
            img: <FiPhone size="100%" />,
            title: 'Call me',
            content: '(+84)369 239 202',
            cName: 'info'
        },
        {
            img: <HiOutlineMail size="100%" />,
            title: 'Email',
            content: 'tridonguyen392@gmail.com',
            cName: 'info'
        },
        {
            img: <GrLocation size="100%" />,
            title: 'Location',
            content: 'Thu Duc, Long Truong, Nguyen Duy Trinh',
            cName: 'info'
        },
    ];


    return (
        <div className={className}>
            <Title title="Contact" description="Get in touch" />

            <div className="Hlist contact">
                <div className="contact__information Vlist">
                    {
                        infos.map(it =>
                            <div className={it.cName}>

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
                <div className="contact__form Vlist">
                    <input
                        className='name'
                        type="text"
                        name="name"
                        placeholder='Name'
                    />
                    <input
                        className='email'
                        type="text"
                        name="name"
                        placeholder='Email'
                    />
                    <textarea
                        className='message'
                        rows="8"
                        type="textarea"
                        name="name"
                        placeholder='Message'
                    />

                    <div className="btn btn-send">
                        <div className="btn__txt">Send message</div>
                        <div className="btn__icon">
                            <BiMailSend size="100%" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}