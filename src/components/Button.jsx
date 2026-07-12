import "../styles/button.css"
function Button({color,children}) {
  return (
<button className="app-button" style={{background:color}}>
{children}
</button>

  )
}

export default Button