export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ 
      error: 'Validation Error', 
      details: err.details 
    });
  }
  
  res.status(500).json({ error: 'Internal Server Error' });
};