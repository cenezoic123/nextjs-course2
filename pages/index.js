import MeetupList from '../components/meetups/MeetupList';


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mandalay_Bay%2C_Las_Vegas.jpg/800px-Mandalay_Bay%2C_Las_Vegas.jpg',
    address: 'Liburon, Carcar City',
    description: 'This is our first meetup'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mandalay_Bay%2C_Las_Vegas.jpg/800px-Mandalay_Bay%2C_Las_Vegas.jpg',
    address: 'Liburon, Carcar City',
    description: 'This is our second meetup'
  },
  {
    id: 'm3',
    title: 'A Third Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Mandalay_Bay%2C_Las_Vegas.jpg/800px-Mandalay_Bay%2C_Las_Vegas.jpg',
    address: 'Liburon, Carcar City',
    description: 'This is our third meetup'
  }
];


function HomePage(){
  return <MeetupList meetups = {DUMMY_MEETUPS} />;
}


export default HomePage;