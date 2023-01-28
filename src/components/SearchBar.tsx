import "../css/SearchBar.css"

interface I_SearchBar_props {
  query : string;
  setQuery : (params : any) => any;
}

export const SearchBar: React.FC<I_SearchBar_props> = ({ query, setQuery }) => {

  const searchHandler = (e : React.FormEvent<SearchBarFormElements>) => {
    e.preventDefault();
    setQuery(e.currentTarget.elements.queryInput.value);
  }

  return (
    <div className="searchbar">
      <form className="searchbar__form" onSubmit={searchHandler}>
        <input id="queryInput" type="text" className="searchbar__input" placeholder="Search" />
      </form>
    </div>
    
  )
}

interface FormElements extends HTMLFormControlsCollection {
  queryInput: HTMLInputElement
}

interface SearchBarFormElements extends HTMLFormElement {
  readonly elements: FormElements
}