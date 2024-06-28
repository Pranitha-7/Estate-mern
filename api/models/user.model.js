import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:"https://png.pngtree.com/png-vector/20240426/ourmid/pngtree-free-barbie-doll-on-simple-background-png-image_12330080.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;