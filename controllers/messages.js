const helloFromSMSServer = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Hello from the mock SMS server!',
  });
};

const anotherMethod = () => {};

export { helloFromSMSServer, anotherMethod };
