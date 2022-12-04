import React from 'react'

const NotFound = () => {
    return (
        <div className="flex w-full items-center justify-center flex-col mt-[20%]">
            <p className="text-center text-primary text-3xl font-secondary">
                Page Not Found!
            </p>
            <p className='text-center text-gray text-xl'>
                Please check the URL and try again.
            </p>
        </div>
    )
}

export default NotFound