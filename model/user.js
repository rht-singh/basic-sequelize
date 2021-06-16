

module.exports=function(sequelize,DataTypes){
        return sequelize.define('first',{
        
    uuid:{
        // autoIncrement:true,
        // allowNull:false,
        // primaryKey:true,
        defaultValue:DataTypes.UUIDV4,
        type:DataTypes.UUID,
       
    },

    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})


     
}