import {Collections} from '../types';

const DATA_CONTENT: Collections = [
  {
    id: 1,
    img: require('../assets/img1.png'),
    name: 'UI',
    price: 50,
    time: '3 h 30 min',
    desc: 'Advanced mobile interface design',
    bgcolor: '#F8F2EE',
    intro:
      'You can launch a new career in web develop- ment today by learning HTML & CSS. You dont need a computer science degree or expensive software. All you need is a computer, a bit of time,a lot of determination, and a teacher you trust.Once the form data has been validated on the client-side, it is okay to submit the form. And, since we covered validation in the previous article, we re ready to submit! This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns.',
  },
  {
    id: 2,
    img: require('../assets/img2.png'),
    name: 'CSS',
    price: 20,
    time: '1 h 10 min',
    desc: 'Advanced mobile interface design',
    bgcolor: '#E6EDF4',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum porta nibh. Mauris orci sem, scelerisque quis lorem at, aliquam scelerisque velit. Pellentesque accumsan est nulla, ac lacinia lectus ultricies et. Nullam vitae auctor mi. Nullam laoreet id nulla eu egestas. Donec sed nibh pretium, mollis ex sit amet, tempor lectus. Morbi interdum ipsum id augue viverra pulvinar. Cras aliquet venenatis ante vel pretium. Maecenas aliquet erat eget felis tincidunt commodo.',
  },
];

const DATA_CATEGORY: Collections = [
  {
    category: '#CSS',
  },
  {
    category: '#UX',
  },
  {
    category: '#Swift',
  },
  {
    category: '#UI',
  },
];

export {DATA_CATEGORY, DATA_CONTENT};
