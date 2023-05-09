import  ReactDOM  from 'react-dom'
import App from './app'
import './index.css'

ReactDOM.render(<App/>, document.querySelector('#root'))



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
           console.log(entry)
           if (entry.isIntersecting) {
               entry.target.classList.add('show');
           } else {
               entry.target.classList.remove('show');
           }
           if (entry.isIntersecting) {
               entry.target.classList.add('shown');
           } else {
               entry.target.classList.remove('shown');
           }
    });
})



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const hiddennElements = document.querySelectorAll('.hiddenn');
hiddennElements.forEach((el) => observer.observe(el));
