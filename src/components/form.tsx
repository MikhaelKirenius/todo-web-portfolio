import React, { useState } from 'react';

const Form: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 my-2'>
            <input type="text" placeholder="Activities Name" className="input input-bordered w-full max-w-xs" value={name} onChange={(e) => setName(e.target.value)}/>
            <select className="select select-secondary w-full  max-w-xs" >
            <option selected disabled>Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">On Going</option>
            <option value="Completed">Completed</option>
            </select>
            <select className="select select-secondary w-full  max-w-xs" >
            <option selected disabled>Level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            </select>
            <input type="date" placeholder="Activities Name" className="input input-bordered w-full max-w-xs"/>
            <button className='btn btn-secondary' type="submit">Submit</button>
        </form>
    );
};

export default Form;