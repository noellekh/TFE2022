module.exports = (sequelize, DataTypes) =>{
    const Score = sequelize.define ("Score",{

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

    return Score
}