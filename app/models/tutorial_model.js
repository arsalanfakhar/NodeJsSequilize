module.exports = (sequelize, Sequelize) => {

    const Tutorial = sequelize.define('tutorial', {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING,
            allowNull:false
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return Tutorial;
};