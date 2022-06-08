module.exports = (sequelize, DataTypes) =>{
    const Trainings = sequelize.define("Trainings", {

        id_training:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        training_name:{
            type: DataTypes.STRING
        },
        training_descri:{
            type:DataTypes.STRING
        },
        training_img:{
            type:DataTypes.BLOB
        }

    },{
        timestamps: false,
    }
    );
    Trainings.associate = (models)=>{
        Trainings.hasMany(models.Scores,{foreignKey:'id_training'});

    }
    
    return Trainings;

    
    
};