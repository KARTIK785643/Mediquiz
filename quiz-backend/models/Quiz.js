// const quizSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   image: { type: String }, // Store the image as a base64 string or URL
//   audio: { type: String }, // Store the audio as a base64 string or URL
//   questions: [{
//     question: { type: String, required: true },
//     options: { type: [String], required: true },
//     correctAnswer: { type: String, required: true }
//   }],
//   createdAt: { type: Date, default: Date.now }
// }, { collection: 'quizzes' });

// const Quiz = mongoose.model('Quiz', quizSchema);