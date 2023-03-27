import {Sequelize} from 'sequelize'
import db from '../config/db.js'

const {DataTypes} = Sequelize;


export const Users = db.define('ad_users', {
    user_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    username:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    status:{
        type:DataTypes.STRING
    },
    createdAt: {
        field: 'createdat',
        type:DataTypes.DATE
    },
    updatedAt: {
        field: 'updatedat',
        type:DataTypes.DATE
    }
    },
    {
        freezeTableName: true
    }
)



export const ToDo = db.define('ad_todo', {
    user_id:{
        type:DataTypes.INTEGER
    },
    to_do_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description:{
        type:DataTypes.STRING
    },
    done: {
        type:DataTypes.BOOLEAN
    },
    createdAt: {
        field: 'createdat',
        type:DataTypes.DATE
    },
    updatedAt: {
        field: 'updatedat',
        type:DataTypes.DATE
    }
    },
    {
        freezeTableName: true
    }
)



export const Contact = db.define('ad_contact', {
    user_id:{
        type:DataTypes.INTEGER,
        unique: true
    },
    full_name:{
        type:DataTypes.STRING
    },
    phone:{
        type:DataTypes.STRING
    }
    },
    {
        freezeTableName: true
    }
)
// ToDo.belongsTo(Users, {foreignKey:'user_id'})
// Contact.belongsTo(Users, {foreignKey:'user_id'})
// Users.hasMany(ToDo, {onDelete: 'CASCADE'})
// Users.hasOne(Contact, {onDelete: 'CASCADE'})