// server/models/Questionnaire.js
const mongoose = require('mongoose');

const questionnaireSchema = new mongoose.Schema({
  artistName: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  signedToLabel: { type: String, required: true },
  nextSongDistribution: { type: Date, required: true },
  distributedBefore: { type: String, required: true },
  spotifyLink: { type: String, required: true },
  youtubeLink: { type: String, required: true },
  instagramHandle: { type: String, required: true },
  currentCost: { type: String, required: true },
  currentPlan: { type: String, required: true },
  issuesFaced: { type: String, required: true },
  upcomingSongs: { type: String, required: true },
  feedback: { type: String, required: true }
});

// module.exports = mongoose.model('Questionnaire', questionnaireSchema);  // Old Version

module.exports = mongoose.models.Questionnaire || mongoose.model('Questionnaire', questionnaireSchema);  // New version