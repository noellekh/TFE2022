module.exports = (sequelize, DataTypes) =>{
    const Users = sequelize.define('Users', {
        user_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
        user_name:{
        type: DataTypes.STRING
         },

        user_surname:{
            type: DataTypes.STRING
            },

        user_password :{
        type: DataTypes.TEXT
        },

        user_birth:{
        type: DataTypes.DATE
        },

        user_email:{
        type: DataTypes.STRING
        },
        
        user_phone:{
        type: DataTypes.STRING
        },
    
        user_sex:{
        type: DataTypes.STRING
        },
        user_street:{
        type: DataTypes.STRING
        },
        postal:{
        type: DataTypes.INTEGER
        },
        newsletter:{
        type: DataTypes.STRING
        }

    },{
        freezeTableName: true,
        timestamps: false
    }

    );

    Users.associate = (models)=>{
        Users.hasMany(models.Scores,{foreignKey: 'user_id'})
    }

    Users.associate=(models)=>{
        Users.hasMany(models.AgendaClient, {foreignKey:'user_id'})
    }

    Users.associate = (models)=>{
        Users.hasMany(models.Charts,{foreignKey:'user_id'});
    
    }

    return Users;
};