export const fetchMeetups = () => 
    fetch('http://10.109.156.51:3000/api/meetups')
        .then(res => res.json());