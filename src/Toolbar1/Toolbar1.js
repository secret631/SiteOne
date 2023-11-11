import React , {useState} from "react";
import "./Toolbar1.css"
const Toolbar1 = (props) => {
    const [keyword, setkeyword] = useState('')

    const SearchSubmit = (e) => {
        setkeyword(e.target.value)
      }
    

    return (
        <div>
            <div className="Toolbar1">
                <div className="buy">
                    <img src="./Assets/buy.jpg" />
                </div>
                <div className="login">
                    <button>ورود | ثبت نام</button>
                </div>

            
                <div className="search" >
                    <input onChange={SearchSubmit} />
                    <img src="./Assets/search.png" onClick={() => props.submitHandler(keyword)}/>
                    {/* <button onClick={() => props.submitHandler(keyword)}>Search</button> */}
                </div>
                
                
                <div className="logo">
                    <img src="./Assets/logo.png" />
                </div>




            </div>

        </div>
    )
}
export default Toolbar1