function Dropdown(props) {

    const renderChoices = props.data.map((elem, index) => {
      return (
        <option key={index} value={elem.name}>{elem.name}</option>
      )
    })
  
    const handleChange = (e) => {
      props.setSelectedState(props.data[e.target.selectedIndex])
    }
  
    return (
      <div id="div-dropdown">
        <span>Select State: </span>
        <select onChange={(e) => handleChange(e)}>
          { renderChoices }
        </select>
      </div>
    )
  }
  
  export default Dropdown