const prisma = require('../../prismaClient');

class SurveyModel {
    static async getAllSurveys() {
    return await prisma.survey.findMany({
        include: {
            questions: {
                include: {
                    options: true
                }
            }
        }
    });
}

    static async getSurveyById(id) {
    return await prisma.survey.findUnique({
        where: { id },
        include: {
            questions: {
                include: {
                    options: true
                }
            }
        }
    });
}

    static async createSurvey(data) {
        return await prisma.survey.create({
    data,
    include: {
        questions: {
            include: {
                options: true
            }
        }
    }
});
    }

    static async updateSurvey(id, data) {
        return await prisma.survey.update({ where : { id }}, { data });
    }

    static async deleteSurvey(id) {
        return await prisma.survey.delete({ where : { id }});
    }
}

module.exports = SurveyModel;