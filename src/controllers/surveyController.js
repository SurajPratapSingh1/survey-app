const SurveyModel = require('../models/surveyModel');

class SurveyController {
    async getAllSurveys(req, res) {
        try {
            const surveys = await SurveyModel.getAllSurveys;
            res.status(200).json(surveys);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async getSurveyById(req, res) {
        try {
            const survey = await SurveyModel.getSurveyById(req.params.id);
            res.status(200).json(survey);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async createSurvey(req, res) {
        try {
            const survey = await SurveyModel.createSurvey(req.body);
            if (!survey) {
                return res.status(400).json({ message: 'Survey creation failed' });
            }
            res.status(201).json(survey);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async updateSurvey(req, res) {
        try {
            const updatedSurvey = await SurveyModel.updateSurvey(req.params.id, req.body);
            res.status(200).json(updatedSurvey);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async deleteSurvey(req, res) {
        try {
            const deletedSurvey = await SurveyModel.deleteSurvey(req.params.id);
            res.status(200).json(deletedSurvey);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new SurveyController();