import food from './food.jpg'
import './Header.css';
function Header(){
return(
    <div>
        <header>
            <img className="logo"src={food} alt="" />
            <h1 className="title">Welcome to Food Post </h1>
        </header>
    </div>
)
}
export default Header;