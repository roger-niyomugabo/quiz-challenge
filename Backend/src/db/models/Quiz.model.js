import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../db';

import { Question } from './Question.model';

// Define your Quiz model

export const Quiz = sequelize.define('quiz', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.literal('gen_random_uuid()')
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  }
});

// Declare associations here
Quiz.hasMany(Question, {
  foreignKey: 'quizId', // Foreign key in Question model
  sourceKey: 'id',
  onDelete: 'CASCADE'
});
Question.belongsTo(Quiz, {
  foreignKey: 'quizId',
  targetId: 'id',
  onDelete: 'CASCADE'
});
