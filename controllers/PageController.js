module.exports = {
    getDashboard: (req, res) => {
      res.render(
        'dashboard',
        {
          welcomeMessage: `Welcome to the dashboard ${req.session.currentUser.firstName}!`,
          withAuth: req.session.withAuth
        }
      );
    }
  }