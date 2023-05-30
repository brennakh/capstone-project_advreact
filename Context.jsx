import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvidor(props) {
    const [allPhotos, setAllPhotos] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    function toggleFavorite(id) {
        const updatedPhotos = allPhotos.map(photo => {
            if (photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedPhotos)
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvidor, Context}

// https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json