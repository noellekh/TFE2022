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
            
        },

        score_date:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }


    
    },{
        timestamps: false,
        
        
    })

    return Scores
}