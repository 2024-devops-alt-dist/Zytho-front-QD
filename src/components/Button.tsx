import "./Button.css"
import { useState } from "react";

function Button({ title, text }: { title: string, text: string }) {

    const [count, setCount] = useState(0);

    const clickMe = () => {
    setCount(count + 1);
    console.log("coucou venant de " + title);
};

    return ( 
        <div>

            <div>
                <button className="btn" onClick={clickMe}>{text} - cliqué {count} fois</button>
                <p>{title}</p>
            </div>
        </div>
    )
};

export default Button;