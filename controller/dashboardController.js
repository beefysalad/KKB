const getDashboard = async (req, res) => {
  const user = await req.user;
  res.render('dashboard/dashboard', { user });
};

module.exports = {
  getDashboard,
};
