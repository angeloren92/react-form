import { useState } from "react"

function AppMain({ recipes }) {

  const [newItem, setItems] = useState('')
  const [newList, setNewList] = useState(recipes)
  const [error, setError] = useState(false)

  function removeItem(i) {
    const changedList = newList.filter((element, index) => index !== i)
    setNewList(changedList)
  }

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
            <input type="text" className="form-control" placeholder="Aggiungi Nuova Sezione" value={newItem} onChange={(e) => setItems(e.target.value)} />
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Aggiungi</button>
          </form>
          {error && <small className="text-danger m-1">INSERISCI ALMENO 10 CARATTERI!</small>}
          <ul className="list-group my-3">
            {newList.map((element, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <h2 className="h4">{element}</h2>
                <span>
                  <button className="btn btn-outline-secondary m-1">
                    <i class="bi bi-pen"></i>
                  </button>
                  <button onClick={() => removeItem(index)} className="btn btn-outline-danger m-1">
                    <i class="bi bi-trash3"></i>
                  </button>
                </span>
              </li>
            ))
            }
            { newList.length === 0 && <li className="list-group-item d-flex justify-content-between align-items-center">
              <h2 className="h4">NON CI SONO RICETTE</h2>
            </li>
            }
          </ul>
        </div>
      </div>
    </main>
  )
}

export default AppMain