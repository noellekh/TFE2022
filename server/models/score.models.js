module.exports = (sequelize, DataTypes) =>{
    const Scores = sequelize.define ("Scores",{

        id_score:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        score: {
            type: DataTypes.INTEGER,

        },

        best_score:{
            type: DataTypes.INTEGER,
            allowNull: true
            
        }
    
    },{
        timestamps: false,
    })

    return Scores
}