const { Op } = require('sequelize');
// const Media = require('../models/Media');
// Function to construct the dynamic where clause for Sequelize query
const buildWhereClause = (queryParams) => {
    const whereClause = {};
  
    if (queryParams.title) {
      whereClause.title = { [Op.like]: `%${queryParams.title}%` };
    }
  
    if (queryParams.id) {
      whereClause.id = queryParams.id;
    }
  
    if (queryParams.description) {
      whereClause.description = { [Op.like]: `%${queryParams.description}%` };
    }
  
    if (queryParams.tags) {
      whereClause.tags = { [Op.like]: `%${queryParams.tags}%` };
    }
  
    if (queryParams.size) {
      whereClause.size = queryParams.size;
    }
  
    if (queryParams.user_id) {
      whereClause.user_id = queryParams.user_id;
    }
  
    if (queryParams.channel_id) {
      whereClause.channel_id = queryParams.channel_id;
    }
  
    if (queryParams.duration) {
      whereClause.duration = queryParams.duration;
    }
  
    if (queryParams.maxResults) {
      // Assuming maxResults is the number of items to return
      whereClause.maxResults = queryParams.maxResults;
    }
  
    if (queryParams.category) {
      whereClause.category = queryParams.category;
    }
  
    if (queryParams.query) {
      // Assuming query searches entire table for rows containing the string
      whereClause[Op.or] = {
        title: { [Op.like]: `%${queryParams.query}%` },
        description: { [Op.like]: `%${queryParams.query}%` },
        // Add more fields to search as needed
      };
    }
  
    if (queryParams.filter) {
      whereClause.filter = queryParams.filter;
    }
  
    if (queryParams.orderby) {
      whereClause.orderby = queryParams.orderby;
    }
  
    if (queryParams.rating) {
      whereClause.rating = queryParams.rating;
    }
  
    if (queryParams.publishedAt) {
      // Assuming publishedAt is the createdAt
      whereClause.createdAt = {
        [Op.between]: [
          queryParams.publishedBefore || new Date(0), // Default to start of time if not provided
          queryParams.publishedAfter || new Date(),
        ],
      };
    }
  
    return whereClause;
  };


  module.exports = buildWhereClause;