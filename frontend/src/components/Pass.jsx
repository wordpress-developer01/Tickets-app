import React from 'react';

function Pass( { name, setName, email, setEmail, password, setPassword, setResult }) {

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        })
            .then(res => res.json())
            .then(data => {
                console.log('Server response:', data);
                setResult(data.saved);  // сохраняем полученные данные в App
            })
            .catch(err => console.error('Error:', err));
    };

    return (
        <div className="pass">
            <form onSubmit={handleSubmit}>
            <label>Your Name</label><br/>
            <input type="text" required={true} value={name} onChange={e => setName(e.target.value)} placeholder={'enter your name'}/><br/>
            <label>Your Email</label><br/>
            <input type="email" required={true} value={email} onChange={e => setEmail(e.target.value)} placeholder={'enter your email'}/><br/>
            <label>Your Password</label><br/>
            <input type="password" required={true} value={password} onChange={e => setPassword(e.target.value)} placeholder={'enter your password'}/><br/>
            <button>Generate my ticket</button>
            </form>
        </div>
    );
}

export default Pass;