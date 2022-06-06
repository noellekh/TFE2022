module.exports = (sequelize, DataTypes) =>{
    const AgendaClient = sequelize.define ("AgendaClient",{

        score: {
            type: DataTypes.INTEGER,

        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        training_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }



    })

    return AgendaClient
}