const initialState={
    cartDelivery:[
        {
            text: 'Самовивіз із магазину',
            description: 'Бесплатно',
            img: checkCircle,
            alt: 'check-icon',
        },
        {
            text: 'Графік роботи: щодня з 9:00 до 18:00',
            description: 'м. Київ, пров. Ізяславський 52, пов. 2',
            img: location,
            alt: 'location-icon',
            map: 'На мапі',
            mapIcon: btnLogo,
        },
        {
            text: 'Доставка Нова Пошта',
            description: '≈ від 500 грн',
            img: novaPoshta,
            alt: 'novaposhta-icon',
        },
        {
            text: "Доставка кур'єром",
            description: '≈ від 200 грн',
            img: deliveryMan,
            alt: 'deliveryman-icon',
        },
    ]
}

const reducerBasket = ( state = initialState, action ) => {
    
    return state

}

export default reducerBasket