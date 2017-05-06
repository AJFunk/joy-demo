'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './post.events';

const PostSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  imageUrl: { type: String, required: true },
  caption: { type: String, required: true, default: '' },
  createdAt: { type: Date, default: Date.now }
});

registerEvents(PostSchema);
export default mongoose.model('Post', PostSchema);
