import React, { useState } from 'react'

const ResetPassword = () => {

    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Changing Password")
        console.log(newPassword)
        console.log(confirmNewPassword)
    }
    return (
        <div className='border border-3 m-auto w-[80%] mt-32 h-max shadow-3xl rounded-sm px-16 py-10 font-serif font-[600] relative'>
            <form>
                <label style={{marginBottom: "2rem"}}>
                    <p className='font-exo text-lg mb-2'>New Password</p>
                    <input type="password"
                        placeholder='New Password'
                        name="newPassword"
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                        className="rounded-md w-full px-4 py-2 text-sm font-slabo"
                    />
                </label>
                <label style={{marginBottom: "2rem"}}>
                    <p className='font-exo text-lg mb-2'>Confirm New Password</p>
                    <input type="password"
                        placeholder='Confirm New Password'
                        name="confirmNewPassword"
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        value={confirmNewPassword}
                        className="rounded-md w-full px-4 py-2 text-sm font-slabo"
                    />
                </label>
                <button
                    type='submit'
                    onClick={(e) => handleSubmit(e)}
                    className="mt-8"
                >
                    Change Password
                </button>
            </form>
        </div>
    )
}

export default ResetPassword