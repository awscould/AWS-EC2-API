const getEnvironment = async (req, res) => {
    try {
      res.message('Hello World. This is '+process.env.Environment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  module.exports = {
    getEnvironment
  };