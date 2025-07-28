import React, {useState, useEffect} from 'react';
import '../assets/ToggleBackgroundStyle.css';

const ToggleBackgroundColor = () => {
    const [dark, setDark] = useState(false);

    // 让 body 真正占满整页
    useEffect(() => {
        document.body.style.backgroundColor = dark ? '#1b1b1b' : 'white';
        document.body.style.color = dark ? '#ffa31a' : '#1b1b1b';
        //组件卸载或 dark 再次变化前，把样式复原
        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, [dark]);

    const toggle = () => setDark(prev => !prev);

    return (
        <div>
            <button
                onClick={toggle}
                style={{
                    backgroundColor: dark ? '#1b1b1b' : 'white',
                    color: dark ? '#ffa31a' : '#1b1b1b',
                    border: `2px solid ${dark ? '#ffa31a' : '#1b1b1b'}`,
                }}
            >
                {dark ? 'Black Theme' : 'White Theme'}
            </button>

            <section className="content">
                <h1>Welcome To A<br/>Real World..</h1>
            </section>
        </div>
    );
};

export default ToggleBackgroundColor;