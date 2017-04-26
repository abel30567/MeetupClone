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

GroupSchema.statics.addMeetup = async function (id, args) {
   const Meetup = mongoose.model('Meetup');

   const group = await this.findById(id);

   const meetup = await new Meetup({ ...args, group });

   group.meetups.push(meetup);

   const result = await Promise.all([meetup.save(), group.save()]);

   return result;
};

export default mongoose.model('Group', GroupSchema);
