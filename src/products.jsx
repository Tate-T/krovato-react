import productsData from './productsData.json'

import MobileSpartaBed1x from "./images/main/mobile/1x/sparta-bed@1x.webp";
import MobileSpartaBed2x from "./images/main/mobile/2x/sparta-bed@2x.webp";

import DesktopSpartaBed1x from "./images/main/desktop/1x/sparta-bed@1x.webp";
import DesktopSpartaBed2x from "./images/main/desktop/2x/sparta-bed@2x.webp";

import DesktopArgonBed1x from "./images/main/desktop/1x/argon-bed@1x.webp";
import DesktopArgonBed2x from "./images/main/desktop/2x/argon-bed@2x.webp";

import DesktopPrestigeBed1x from "./images/main/desktop/1x/prestige-bed@1x.webp";
import DesktopPrestigeBed2x from "./images/main/desktop/2x/prestige-bed@2x.webp";

import DesktopTokioSofa1x from "./images/main/desktop/1x/tokio-sofa@1x.webp";
import DesktopTokioSofa2x from "./images/main/desktop/2x/tokio-sofa@2x.webp";

import DesktopLargoMatress1x from "./images/main/desktop/1x/largo-matress@1x.webp";
import DesktopLargoMatress2x from "./images/main/desktop/2x/largo-matress@2x.webp";

import DesktopArgentumMatress1x from "./images/main/desktop/1x/argentum-matress@1x.webp";
import DesktopArgentumMatress2x from "./images/main/desktop/2x/argentum-matress@2x.webp";

import DesktopBravoSofa1x from "./images/main/desktop/1x/bravo-sofa@1x.webp";
import DesktopBravoSofa2x from "./images/main/desktop/2x/bravo-sofa@2x.webp";

import DesktopMK5Bed1x from "./images/main/desktop/1x/mk5-bed@1x.webp";
import DesktopMK5Bed2x from "./images/main/desktop/2x/mk5-bed@2x.webp";

let products = productsData;

products = productsData.reduce((acc, item) => {
  
    switch (item.image.src) {

        case 'MobileSpartaBed1x':
            
            item.image.src = `${MobileSpartaBed1x}`;
        
            break;

        case 'DesktopSpartaBed1x':
            
            item.image.src = `.${DesktopSpartaBed1x}`;
        
            break;

        case 'DesktopArgonBed1x':
            
            item.image.src = `.${DesktopArgonBed1x}`;
        
            break;

        case 'DesktopPrestigeBed1x':
            
            item.image.src = `.${DesktopPrestigeBed1x}`;
        
            break;
    
        case 'DesktopTokioSofa1x':
            
            item.image.src = `.${DesktopTokioSofa1x}`;
        
            break;
            
        case 'DesktopLargoMatress1x':
            
            item.image.src = `.${DesktopLargoMatress1x}`;
        
            break;

        case 'DesktopArgentumMatress1x':
            
            item.image.src = `.${DesktopArgentumMatress1x}`;
        
            break;

        case 'DesktopBravoSofa1x':
            
            item.image.src = `.${DesktopBravoSofa1x}`;
        
            break;

        case 'DesktopMK5Bed1x':
            
            item.image.src = `.${DesktopMK5Bed1x}`;
        
            break;
        
        default:

            item.image.src = `${MobileSpartaBed1x}`;
            break;
    };
    
    acc.push(item);
    return acc;
}, []);

export default products;