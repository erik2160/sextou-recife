import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
<<<<<<< Updated upstream
=======
import './index.css'
import {register} from 'swiper/element/bundle'

register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

>>>>>>> Stashed changes

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
