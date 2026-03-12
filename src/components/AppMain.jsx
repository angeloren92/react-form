function AppMain({ recipes }) {

  return (
    <main className="container">
      <div className="row my-3">
        <div className="col">
          <ul class="list-group">
            {recipes.map(({title, id}) => (
              <li key={id} class="list-group-item">{title}</li>
            ))
            }
          </ul>
        </div>
      </div>
    </main>
  )
}

export default AppMain