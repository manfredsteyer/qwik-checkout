export interface Option {
    id: number,
    title: string;
    text: string;
    img: string;
    price: number;
}

export const mealOptions: Option[] = [
    {
        id: 1,
        title: 'Small Snack',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac cursus enim. Morbi aliquam in augue tempor scelerisque.',
        img: '/assets/snack.jpg',
        price: 10,
    },
    {
        id: 2,
        title: 'Bowl',
        text: 'Nunc ac cursus enim. Morbi aliquam in augue tempor scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        img: '/assets/bowl.jpg',
        price: 20,
    },
    {
        id: 3,
        title: 'Pasta',
        text: 'Ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac cursus enim. Morbi aliquam in augue tempor scelerisque.',
        img: '/assets/pasta.jpg',
        price: 30,
    }
];

export const seatOptions: Option[] = [
    {
        id: 1,
        title: 'Extra Legroom',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac cursus enim. Morbi aliquam in augue tempor scelerisque.',
        img: '/assets/extra.jpg',
        price: 50,
    },
    {
        id: 2,
        title: 'First Class',
        text: 'Nunc ac cursus enim. Morbi aliquam in augue tempor scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        img: '/assets/first.jpg',
        price: 2000,
    }
];

export const initOptions: Option[] = [{
    id: 0,
    img: '',
    price: 0,
    text: '',
    title: ''
}];
