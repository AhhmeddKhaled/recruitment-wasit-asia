import style from '../components/navbar/Navbar.module.css';

export const handleDropdownToggle = (e) => {
  const clickedSpan = e.currentTarget;
  const li = clickedSpan.closest("li");
  const ul = li.parentElement;

  const isAlreadyActive = clickedSpan.classList.contains(style.active);

  ul.querySelectorAll(`.${style.active}`).forEach((el) => {
    el.classList.remove(style.active);
  });

  if (!isAlreadyActive) {
    clickedSpan.classList.add(style.active);
  }
};
