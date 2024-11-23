const getHomePage = (req, res) => {
    res.json({
      success: true,
      message: 'Welcome to the HomePage of Law Tech!',
      description: 'Find lawyers, legal advice, and more.',
    });
  };
  
  module.exports = { getHomePage };
  
