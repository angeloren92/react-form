import { useState } from "react"

function AppMain({ recipes }) {

  const [newItem, setItems] = useState('')
  const [newList, setNewList] = useState(recipes)
  const [error, setError] = useState(false)

  function addNewItem(e) {
    e.preventDefault()
    if (newItem.length >= 10) {
      setNewList([newItem, ...newList])
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <main className="container">
      <div className="row my-3">
        <div className="col">
          <form className="input-group mt-3" onSubmit={addNewItem}>
            <input type="text" className="form-control" placeholder="Aggiungi Nuova Sezione" value={newItem} onChange={(e) => setItems(e.target.value)}/>
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Aggiungi</button>
          </form>
          {error && <small className="text-danger m-1">INSERISCI ALMENO 10 CARATTERI!</small>}
          <ul className="list-group my-3">
            {newList.map( (element, index) => (
              <li key={index} className="list-group-item">{element}</li>
            ))
            }
          </ul>
        </div>
      </div>
    </main>
  )
}

export default AppMain