import React, { useState, useEffect } from "react";
import "./ProductList.css"
import axios from "axios";
import Card from "../Card/Card";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Toolbar1 from "../Toolbar1/Toolbar1";

const ProductList = () => {
    const [Cards, setCards] = useState(null)
    const [text, settext] = useState('dress')
    const [PageNumber, setPageNumber] = useState(1)



    useEffect(() => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: text, per_page: 10, page: 1, page: PageNumber },
            headers: {
                Authorization: 'Client-ID 8GMrSwACBn1O6TtOVIrzpWDNqkeLaEGMyW5-A5Y6eZ0'
            }
        }).then(Response => {

            setCards(Response.data.results)
        })

    }, [text, PageNumber])


    //Api CardList
    const CardList = Cards?.map(obj => {
        return (
            <Card key={obj.id} OBG={obj} />
        )

    })


    //pagination
    const handleChange = (event, value) => {
        setPageNumber(value)
    }


    //Search
    const SearchSubmitClick = (keyword) => {
            settext(keyword)
        
    }
    

    return (

        <div >
            {/* props for Toolbar1 */}
            <Toolbar1 submitHandler={SearchSubmitClick} />

            <div className="ProductListText">
                <h2>دسته بندی محصولات</h2>

            </div>
            <div className="ProductList">
                {CardList}
            </div>

            <div className='Pagination'>
                <Stack spacing={2}>
                    <Typography>Page: {PageNumber}</Typography>
                    <Pagination count={10} page={PageNumber} onChange={handleChange} />
                </Stack>

            </div>

        </div>
    )
}
export default ProductList