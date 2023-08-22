import Header from "./Header"
import Leftbar from "./Leftbar"

function Admin({children}) {
  return (
    <div>
        <Header />
        <div>
            <div><Leftbar /></div>
            <div>{children}</div>
        </div>
    </div>
  )
}

export default Admin