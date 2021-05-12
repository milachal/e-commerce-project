import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import authAPI from '../../api/axios'
import AuthContext from '../../contexts/AuthContext'
import Button from '../ui/Button'
import AdminNavigation from './AdminNavigation'

const AddProduct = () => {
    
    const { userStatus, isUserLoggedIn } = useContext(AuthContext)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [sex, setSex] = useState('unisex')
    const [category, setCategory] = useState('shoes')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const history = useHistory()

    const onSubmitHandler = (event) => {
        event.preventDefault()
       
        if (!title) {
            alert('Title is required')
            return
        }
        if (!price) {
            alert('Price is required')
            return
        }
        if (!image) {
            alert('URL is required!')
            return
        } 
        const postProduct = async () => {
            try {
                await authAPI.post('http://localhost:3001/api/add-new-product', { title, price, sex, category, description, image })
                history.push('/products')
            } catch (e) {
                console.log('Unable to create product')
            }
        }
        postProduct()
    }

    const handlePrice = e => {
        // const priceNumber = Number(e.target.value)
        setPrice(e.target.value)
        // price.toFixed(2)
    }

    return (
        <>
        {isUserLoggedIn && userStatus === 'admin' ? (
            <>
                <AdminNavigation />
                <Container>
                    <Header>Add new product</Header>
                    <InputContainer>
                        <Input 
                            name="title" 
                            type="text" 
                            placeholder="Title" 
                            value={title} onChange={e => setTitle(e.target.value)} 
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input 
                            name="price" 
                            type="number" 
                            placeholder="Price" 
                            value={price} 
                            onChange={handlePrice} 
                        />
                    </InputContainer>
                    <InputContainer>
                        <OptionList name="sex" value={sex} onChange={e => setSex(e.target.value)}>
                            <option value="women's">Women's</option>
                            <option value="men's">Men's</option>
                            <option value="unisex">Unisex</option>
                        </OptionList>
                    </InputContainer>
                    <InputContainer>   
                        <OptionList name="product-category" value={category} onChange={e => setCategory(e.target.value)}>
                            <option value="shoes">Shoes</option>
                            <option value="accessories">Accessories</option>
                            <option value="jewelry">Jewelry</option>
                            <option value="bags">Bags</option>
                            <option value="clothes">Clothes</option>
                        </OptionList>
                    </InputContainer>
                    <InputContainer>
                        <Textarea 
                            name="description" 
                            placeholder="Product's description" 
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </InputContainer>
                    <InputContainer>          
                        <Input 
                            type="text" 
                            placeholder="Image URL" 
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />
                    </InputContainer>
                    <Button type="submit" onClick={onSubmitHandler}>Submit</Button>
                </Container>
            </>
        ) : <div>No permission</div>}
            
        </>
    )
}

export default AddProduct

const Container = styled.form`
    padding: 2rem;
`

const Header = styled.h2`
    font-size: 200%;
    margin-left: 3rem;  

`

const InputContainer = styled.div`
    margin: 1rem; 
`

const Input = styled.input`
    width: 50%;
    max-width: 300px;
    border: 1px solid #666666;
    padding: 7px 10px;
    margin: 0 2rem;
    border-radius: 5px;
`

const OptionList = styled.select`
    width: 10%;
    border: 1px solid #666666;
    padding: 5px 7px;
    margin: 0 2rem;
    border-radius: 5px;
`

const Textarea = styled.textarea`
    width: 22%;
    border: 1px solid #666666;
    padding: 7px 10px;
    margin: 0 2rem;
    border-radius: 5px;
`
