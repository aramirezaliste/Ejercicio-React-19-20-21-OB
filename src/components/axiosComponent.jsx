import React, { useState, useEffect } from 'react'
import { getRandomJoke } from '../service/axiosService';
import { Button } from '@mui/material';
import TextTransition, { presets } from 'react-text-transition';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';



export const AxiosComponent = () => {
    const [joke, setJoke] = useState({})
    const [like, setLike] = useState(0)
    const [unLike, setUnLike] = useState(0)

    useEffect(() => {
        getJoke();
    }, [])

    const getJoke = () => {
        getRandomJoke()
            .then((response) => {
                setJoke(response.data)
                //console.log(response.data)
            })
            .catch((error) => {
                alert(`Error al obtener el Chiste: ${error}`)
            })
    }

    const likeUp = () => {
        setLike(like + 1)
    }

    const unLikeUp = () => {
        setUnLike(unLike + 1)
    }

    return (
        <div>
            <h1>Chuck Norris Jokes</h1>
            <div style={{boxSizing:'border-box', height:'10rem'}}>
                <TextTransition 
                springConfig={presets.stiff} 
                style={{fontSize:'20px', justifyContent:'center', alignItems:'center', fontFamily:'monospace', fontWeight:'bold'}}
                
                >
                    {joke.value}
                </TextTransition>
            </div>
            <div style={{marginTop:'20px'}}>
                <Button variant='contained' color='secondary' onClick={getJoke}>Generar Chiste</Button>
            </div>
            <div style={{ marginTop: '5px' }}>
                <h3>Do you liked the Joke?</h3>
                <Button variant='contained' color='success' onClick={likeUp} style={{ marginRight: '5px' }}>{like}<ThumbUpIcon style={{paddingLeft:'6px'}}></ThumbUpIcon></Button>
                <Button variant='contained' color='error' onClick={unLikeUp}>{unLike} <ThumbDownIcon style={{paddingLeft:'6px'}}></ThumbDownIcon></Button>
            </div>
        </div>
    )
}
