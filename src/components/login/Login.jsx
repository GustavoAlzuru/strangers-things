import React, {useState} from "react";

export const Login = (props) => {
    const [email, SetEmail] = useState('');
    const [pass, setPass] = useState('');
    const BASE_URL='https://strangers-things.herokuapp.com/api/2302-acc-et-web-pt-c'
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/users/login`, {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                user: {
                  username: email,
                  password: pass
                }
              })
            });
            const result = await response.json();
            console.log(result);
            return result
          } catch (err) {
            console.error(err);
          }

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