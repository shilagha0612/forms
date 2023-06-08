// import React, { useState } from 'react';

// const User = () => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
//     const [submittedData, setSubmittedData] = useState(null);
//     const[userError,setUserError]=useState("")

//     const createUser = (e) => {
//         e.preventDefault();

//         const newUser = { username, email, password };
//         console.log("Welcome", newUser);
//         setUsername("");
//         setEmail("");
//         setPassword("");
//         setConfirmPassword("");
//         setHasBeenSubmitted(true);

//         if (password === confirmPassword) {
//             setSubmittedData(newUser);
//         } else {
//             console.log("Please enter a valid password");
//         }
//     };

//     const handleForm=(e)=>{
//         setUsername(e.target.value)
//         if(e.target.value.length<1){
//             setUserError("Title is Required")

//         }else if(e.target.value.length<3){
//             setUserError("must be 3 characters or longer!")
//         }else{
//             setUserError("")

//         }
//     }

//     return (
//         <div>
//             <form onSubmit={createUser}>
//                 {hasBeenSubmitted ? (
//                     <h3>Thank you for submitting the form!</h3>
//                 ) : (
//                     <h3>Welcome, please submit the form.</h3>
//                 )}

//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                     />
//                 </div>

//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="text"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>

//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>

//                 <div>
//                     <label>Confirm Password:</label>
//                     <input
//                         type="password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                     />
//                 </div>

//                 <input type="submit" value="Create user" />
//             </form>

//             <div>
//                 {hasBeenSubmitted ? "Successfully logged in" : "Enter the correct password"}
//             </div>

//             {submittedData && hasBeenSubmitted && (
//                 <div>
//                     <h2>Submitted Data:</h2>
//                     <p>Username: {submittedData.username}</p>
//                     <p>Email: {submittedData.email}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default User;


// import React, { useState } from 'react';

// const User = () => {
//     const [username, setUsername] = useState("");
//     const [usernameError, setUsernameError] = useState("");
//     const [email, setEmail] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [password, setPassword] = useState("");
//     const [passwordError, setPasswordError] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [confirmPasswordError, setConfirmPasswordError] = useState("");
//     const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

//     const createUser = (e) => {
//         e.preventDefault();

//         if (username.length < 3) {
//             setUsernameError("Username is required!");
//         }
//          else {
//             setUsernameError("");
//         }

//         if (email.length < 4) {
//             setEmailError("Email is required!");
//         } else {
//             setEmailError("");
//         }

//         if (password.length < 8) {
//             setPasswordError("Password is required!");
//         } else {
//             setPasswordError("");
//         }

//         if (confirmPassword !== password) {
//             setConfirmPasswordError("Passwords do not match!");
//         } else {
//             setConfirmPasswordError("");
//         }

//         if (username.length >= 3 && email.length >= 4 && password.length >= 8 && confirmPassword === password) {
//             setHasBeenSubmitted(true);
//         }
//     };

//     const formMessage = () => {
//         if (hasBeenSubmitted) {
//             return "Thank you for submitting the form";
//         } else {
//             return "Welcome! Please submit the form";
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={createUser}>
//                 <h3>{formMessage()}</h3>

//                 <div>
//                     <label>Username:</label>
//                     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                     {usernameError && <p>{usernameError}</p>}
//                 </div>

//                 <div>
//                     <label>Email:</label>
//                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                     {emailError && <p>{emailError}</p>}
//                 </div>

//                 <div>
//                     <label>Password:</label>
//                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                     {passwordError && <p>{passwordError}</p>}
//                 </div>

//                 <div>
//                     <label>Confirm Password:</label>
//                     <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//                     {confirmPasswordError && <p>{confirmPasswordError}</p>}
//                 </div>

//                 <input type="submit" value="Create User" />
//             </form>

//             <div>
//                 {hasBeenSubmitted ? "Successfully created user" : "Enter valid data"}
//             </div>
//         </div>
//     );
// };

// export default User;


import React, { useState } from 'react';

const User = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleFirstName = (e) => {
        const value = e.target.value;
        setFirstName(value);

        if (value.length < 2) {
            setFirstNameError('First Name must be at least 2 characters');
        } else {
            setFirstNameError('');
        }
    };

    const handleLastName = (e) => {
        const value = e.target.value;
        setLastName(value);

        if (value.length < 2) {
            setLastNameError('Last Name must be at least 2 characters');
        } else {
            setLastNameError('');
        }
    };

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (value.length < 5) {
            setEmailError('Email must be at least 5 characters');
        } else {
            setEmailError('');
        }
    };

    const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);

        if (value.length < 8) {
            setPasswordError('Password must be at least 8 characters');
        } else {
            setPasswordError('');
        }
    };

    const handleConfirmPassword = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);

        if (value !== password) {
            setConfirmPasswordError('Passwords must match');
        } else {
            setConfirmPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform additional logic or submit the form if needed
    };

    return (
        <div>
            <h1>Hook Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={handleFirstName} />
                    {firstNameError && <p>{firstNameError}</p>}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={handleLastName} />
                    {lastNameError && <p>{lastNameError}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={handleEmail} />
                    {emailError && <p>{emailError}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePassword} />
                    {passwordError && <p>{passwordError}</p>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                    />
                    {confirmPasswordError && <p>{confirmPasswordError}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default User;

