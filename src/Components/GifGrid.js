import React from 'react'
import { useFetchGifs } from '../Hooks/useFechtGifs'
import {GifGridItem} from './GifGridItem'

export const GifGrid = ({ category }) => {


    const { data:images, loading } = useFetchGifs(category);



    return (
        <>
            <h3>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading...</p>}

            <div className='card-grid'>
                <ol>
                    {
                        images.map(img => (

                            <GifGridItem {...img} key={img.id} />
                        ))
                    }

                </ol>
            </div>

        </>

    )
}
