import React, { useState } from "react"

const DEFAULT_BOOK_DETAILS = {
    name: '',
    price: 0,
    category: '',
    description: ''
}

function Input({ label, onChange, value, name, type }) {
    const id = React.useId()
    return <>
        <label htmlFor="name-field">
            {label}{': '}
        </label>
        <input
            id={id}
            required
            name={name}
            type={type}
            value={value}
            onChange={onChange}
        />
    </>
}

function BookForm({ handleAddBook, handleClose }) {
    const [bookDetails, setBookDetails] = useState(DEFAULT_BOOK_DETAILS)

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setBookDetails({
            ...bookDetails,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleAddBook({ ...bookDetails, id: Math.random() })
        }}>
            <Input
                name='name'
                value={bookDetails.name}
                type='text'
                onChange={handleInputChange}
                label={'Book Name'}
            />
            <Input
                name='price'
                value={bookDetails.price}
                type='number'
                onChange={handleInputChange}
                label={'Price'}
            />
            <Input
                name='category'
                value={bookDetails.category}
                type='text'
                onChange={handleInputChange}
                label={'Category'}
            />
            <label htmlFor="description">
                Description:
            </label>
            <textarea
                id="description"
                name="description"
                value={bookDetails.description}
                onChange={handleInputChange}
            />
            <input type="submit" />
            <button onClick={handleClose}>Cancel</button>
        </form>
    )
}

export default BookForm

