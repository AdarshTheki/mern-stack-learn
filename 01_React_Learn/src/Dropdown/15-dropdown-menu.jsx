// React JS DropDown Menu close functionality
import React, { useRef, useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const Menus = ["Profile", "yourAPP", "setting", "logout"];

  const menuRef = useRef();
  const btnRef = useRef();

  const buttonHandler = () => {
    setOpen(!open);
    window.addEventListener("click", (e) => {
      if (e.target !== menuRef.current && e.target !== btnRef.current) {
        setOpen(false);
      }
    });
  };
  console.log(open);
  return (
    <div>
      {/* Menu button */}
      <button ref={btnRef} onClick={buttonHandler}>
        Menu Button
      </button>

      {/* onclick the container */}
      {open && (
        <div className='menu' ref={menuRef}>
          <ul className='menu-lists'>
            {Menus.map((menu) => (
              <li key={menu} onClick={() => setOpen(false)}>
                {menu}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
