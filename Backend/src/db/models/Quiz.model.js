import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../db';

import { Question } from './Question.model';

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

// Quiz to Question association
Quiz.hasMany(Question, {
  foreignKey: 'quizId',
  sourceKey: 'id',
  onDelete: 'CASCADE'
});
Question.belongsTo(Quiz, {
  foreignKey: 'quizId',
  targetId: 'id',
  onDelete: 'CASCADE'
});
