import mongoose from 'mongoose';

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/meetupME');
    mongoose.connection
        .once('open', () => console.log('MongoDB is Running'))
        .on('error', err => console.error(err))
};