import React, {useState} from "react";

export const Login = (props) => {
    const [email, SetEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);

    }

    return(
        <>
            <form onSubmit={handleSubmit}>
            <label htmlFor ="email">Email</label>
                <input value={email} onChange={(e) => SetEmail(e.target.value)} type="email" placeholder="Write you @email" id="email" name="email"/>
                
                <label htmlFor ="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button> Don't have account Register Here.</button>
        </>
    )

}