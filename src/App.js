import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';


function App(){

useEffect(() => {
    const cookistored = new Cookies();
    const cookies = new Cookies();
    cookies.set('reactfromblog','this_works', {path: '/'})
},[])

}