import React from 'react'

const AdminForm = ({id : key, majRecette, recettes, resetRecette}) => {

    const recette = recettes[key]
    
    const handleChange = (event, key) =>{
        const {name, value} = event.target
        const recette = recettes[key]
        recette[name] = value
        majRecette(key, recette)
    }

    return (
        <div className="card">
            <form className="admin-form">
                <input value={recette.nom} onChange={e => handleChange(e, key)} name="nom" type="text" placeholder="nom de la recette" />

                <input value={recette.image} onChange={e => handleChange(e, key)} name="image" type="text" placeholder="nom de l'image" />

                <textarea value={recette.ingredients} onChange={e => handleChange(e, key)} name="ingredients" rows="3" placeholder="liste des ingredients" />

                <textarea value={recette.instructions} onChange={e => handleChange(e, key)} name="instructions" rows="15" placeholder="liste des instructions" />

            </form>  
            <button onClick={() => resetRecette(key)}>supprimer</button>
        </div>
    )
    
}

export default AdminForm