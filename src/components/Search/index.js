import React from 'react'
import getIcon from 'util/getIcon';
import {Button,Input,SearchForm } from './styles';

export default function Search() {
    return (
       <SearchForm>
           <Input type='text' placeholder='Search over 1,000,000 recipes...'/>
           <Button>
               <svg>
                   <use href={getIcon('search')}/>
               </svg>
               Search
           </Button>
       </SearchForm>
    )
}
