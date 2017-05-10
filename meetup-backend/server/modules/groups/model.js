import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Name must be at least 5 characters long.'],
  },
  description: {
    type: String,
    required: true,
    minlength: [10, 'Name must be at least 10 characters long.'],
  },
  category: {
    type: String,
  },
  meetups: [{
    type: Schema.Types.ObjectId,
    ref: 'Meetup',

  }],
}, { timestamps: true });

/**
 * Create a Meetup and add it to the meetups array in the group. A group can
 * create a meetup
 */

GroupSchema.statics.addMeetup = async function (id, args) {

   const Meetup = mongoose.model('Meetup');
// We add the group id to the meetup group element
// Finally this is the author of the Meetup
   const meetup = await new Meetup({ ...args, group: id });
// We found the group with the id provided by the URL
// And we push the meetup id in the meetups element
   const group = await this.findByIdAndUpdate(id, { $push: { meetups: meetup.id } });

   return {
     meetup: await meetup.save(),
     group,
   };
};

export default mongoose.model('Group', GroupSchema);
