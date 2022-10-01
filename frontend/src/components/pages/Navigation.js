
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
   const [toggle, setToggle] = useState(false)

   const openMenu = () =>{
      if(!toggle){
         console.log('Menu clicked!')
         setToggle(toggle)
         const menu = document.querySelector('.menu--list').children
         const firstElement = menu[0]
         const midElement = menu[1]
         const secondElement = menu[2]
         console.log(firstElement);
         const menuItems = document.querySelectorAll('.menu--list--burger')
         const menuItems2 = document.querySelectorAll('.menu--list--burger1')
         menuItems.forEach((e, i) => {
            console.log(`${e} : ${i + 1}`);
            // console.log(e.indexof(menuItems2));
            // menu.firstChild.style.backgroundColor = 'red'
            // menu.nth
            // console.log(menu);
            firstElement.style.backgroundColor = 'red'
            firstElement.style.transform = `rotateX(${45}deg)`
            midElement.style.display = 'none'
            secondElement.style.backgroundColor = 'red'
         })
         // console.log(menu);
         // console.log(menuItems);
         // menu.style.backgroundColor = 'red'
      }
   }
   return (
      <nav className='navigation'>
         <ul className='nav items'>
            <li className='items--list items--hover-underline-animation'>
               <Link to={`#`} className='items--list--link'>Task</Link>
            </li>
            <li className='items--list items--hover-underline-animation'>
               <Link to={`#`} className='items--list--link'>About</Link>
            </li>
            <li className='items--list items--hover-underline-animation'>
               <Link to={`#`} className='items--list--link'>Contact us</Link>
            </li>
         </ul>
         <ul className='nav menu'>
            <li className='menu--item'>
               <Link to={`#`} className='menu--item--link'>Sign in</Link>
            </li>
            <li className='menu--item'>
               <Link to={`#`} className='menu--item--link'>Sign up</Link>
            </li>
            <li className='menu--list' onClick={openMenu}>
               <span className='menu--list--burger menu--list--burger1'></span>
               <span className='menu--list--burger menu--list--burger2'></span>
               <span className='menu--list--burger menu--list--burger3'></span>
            </li>
         </ul>
      </nav>
   );
}

export default Navigation;