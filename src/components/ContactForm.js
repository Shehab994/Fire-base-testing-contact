import React, { useState } from 'react'
import './ContactForm.css'
export default function ContactForm() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    let name, value;
    const getUserData = (text) => {
        name = text.target.name;
        value = text.target.value;
        setUser({ ...user, [name]: value })
    }

    const postData = async (submit) => {
        submit.preventDefault();
        const { name, email, phone, message } = user;
        if (name && email && phone && message) {
            const res = await fetch('https://test-fire-base-c02ca-default-rtdb.firebaseio.com/firebasetest.json', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    message
                })
            }

            );
            if (res) {
                setUser({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                })
                alert('Message sent succsesfully')
            }
        } else {
            alert('Fill all the data !')
        }


    }
    return (
        <div className='contact_form'>
            <div className="about">
                <h1>Request a free <br /> demo today!</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure distinctio libero eum quasi architecto ex dolorem fugiat sunt a dolore!</p>
                <h3>A massage from our CEO</h3>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi temporibus expedita repudiandae reiciendis molestiae"</p>
                <div className="id-box">
                    <div className="profile">
                        <img src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=" alt="" />
                        <div className="details">
                            <div className="name">Shehab Shekh</div>
                            <div className="post">CEO, Admin</div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Sent A Massage</h2>
            <form method='POST'>
                <div className="massage-section">
                    <div className="names">
                        <div className="frist-name">
                            <label>Name</label>
                            <input type="text" name='name' value={user.name} onChange={getUserData} placeholder='Type Your Name' />
                        </div>
                        <div className="last-name">
                            <label>Last Name</label>
                            <input type="text" name='email' value={user.email} onChange={getUserData} placeholder='Type Your email' />
                        </div>
                    </div>
                    <div className="email-section">
                        <label>Phone</label>
                        <input name='phone' type="text" value={user.phone} onChange={getUserData} placeholder='Type Your Phone no.' />
                    </div>
                    <div className="massage">
                        <label>Massage</label>
                        <textarea name="message" id="" value={user.message} onChange={getUserData} placeholder='Type Your Massage'></textarea>
                    </div>
                    <div className="buttons">
                        <button onClick={postData}>Submit</button>
                    </div>
                    <div className='result'></div>
                </div>

            </form>
        </div>
    )
}
