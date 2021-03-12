import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import search from '../../images/icons/magnifying-glass.svg'
import SearchSuggestion from '../Products/SearchSuggestion'

const SearchBar = () => {

    const [keyword, setKeyword] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const getSearchKeyword = async (e) => {
        const newKeyword = e.target.value
        setKeyword(newKeyword)
        const { data } = await axios.get('http://localhost:3001/api/products/')
        if (newKeyword) {
            setSuggestions(data.filter((product) => {
                return product.title.toLowerCase().includes(newKeyword)
            }))
        }    
    }
    
    return (
        <Container>
            <Search 
                type="search" 
                placeholder="search" 
                value={keyword}
                onChange={getSearchKeyword} />
            <StyledButton 
                type="submit" 
            >
                <span>
                    <Link to={{
                        pathname: "/products/",
                        search: `?search=${keyword}`

                    }}>
                        <Image src={search} alt="search-icon"/>
                    </Link>
                    
                </span>
            </StyledButton>
            {keyword !== '' ? (
                <SuggestionsContainer>
                    {suggestions.slice(0, 5).map(suggestion => {
                        return (
                            <SearchSuggestion 
                                key={suggestion.id}
                                src={suggestion.image}
                                alt={suggestion.title}
                                title={suggestion.title}
                                price={suggestion.price}
                                id={suggestion.id}
                            />
                        )
                    })}
                    {suggestions.length > 5 ? (
                        <StyledLink to={{
                            pathname: "/products",
                            search:`?search=${keyword}`
                        }}
                        >See all</StyledLink>
                    ): null }
                </SuggestionsContainer>
            ) : null }
        </Container>
    )
}

export default SearchBar

const Container = styled.div`
    position: relative;
    display: inline-block;  
    text-align: center;
`

const Search = styled.input`
    border: none;
    border-bottom: 1px solid #c8c8c8;
    text-transform: uppercase;
    padding: 0.5rem;
    margin: 0.8rem 0;
`
const StyledButton = styled.button`
    float: left; 
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    margin: 0.8rem 0 0.8rem 0.8rem;
`

const Image = styled.img`
    width: 1rem;
`

const SuggestionsContainer = styled.div`
    position: absolute;
    left: 0;
    top: 55px;
    background: white;
    width: 350px;
    box-shadow: 0 0 5px #575555;
    padding: 20px;
    z-index: 9999;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: bold;
    &:hover {
        opacity: 0.5;
    }
`