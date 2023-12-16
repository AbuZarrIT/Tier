import './Search.css'
import {React,useState} from 'react'
const Search = ({data,setData,resultSearch,setresultSearch}) => {
    const getValue = (e) => {
        e.preventDefault()
        let resultText = e.target.value.toLowerCase();
        poisk(resultText)
    }
    const poisk = (text) => {
        let arr = data.filter(obj => obj.name.toLowerCase() === text);
        if(text.length === 0){
            arr = []
            setresultSearch(arr)
        }
        if(arr.length <= 0){
            console.log('error')
        } else {
            setresultSearch(arr)
        }
    }
    return (
        <form className='MainPage-form' action="#">
            <input 
            className='MainPage-search-input form-control' 
            type="text" 
            placeholder='Wo nach suchst du?'
            onChange={getValue} />
            <button 
            className="MainPage-search-btn btn btn-primary"
            onClick={poisk}>
            Suchen</button>
        </form>
    )
}
export default Search;